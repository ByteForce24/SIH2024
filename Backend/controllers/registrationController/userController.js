const { ref, set, get } = require('firebase/database');
const database = require('../../config/firebase-config');
const bcrypt = require('bcrypt');
const { createAccessToken, createRefreshToken } = require('../../utils/tokenUtils');

const createUser = async (req, res, next) => {
  try {
    const { username, fullName, role, email, mobileNumber, gender, aadharNumber, password } = req.body;

    // Validate username and role
    if (!username || username.length > 50) {
      return res.status(400).json({ error: 'Invalid username' });
    }

    if (role !== 'student' && role !== 'alumni' && role !== 'faculty') {
      return res.status(400).json({ error: 'Invalid role' });
    }

    // Check if username already exists in Firebase
    const userRef = ref(database, `users/${username}`);
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Prepare user data
    const user = {
      username,
      fullName,
      role,
      email,
      mobileNumber: Number(mobileNumber),
      gender,
      aadharNumber,
      registrationTimeStamp: new Date().toISOString(),
      password: hashedPassword,
    };

    // Save the user data in Firebase
    await set(userRef, user);

    // Create JWT tokens
    const accessToken = createAccessToken({ username });
    const refreshToken = createRefreshToken({ username });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    // Redirect based on role
    if (role === 'student') {
      return res.redirect(307, `/api/user/student`);
    } else if (role === 'alumni') {
      return res.redirect(307, `/api/user/alumni`);
    } else if (role === 'faculty') {
      return res.redirect(307, `/api/user/faculty`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error creating user: ' + error.message });
  }
};

module.exports = { createUser };
