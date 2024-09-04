const { ref, set, get, remove } = require('firebase/database');
const database = require('../config/firebase-config');
const bcrypt = require('bcrypt');
const { createAccessToken, createRefreshToken } = require('../utils/tokenUtils');
const Student = require('../models/StudentSchema');
const Alumni = require('../models/AlumniSchema');
const Faculty = require('../models/FacultySchema'); // Import Faculty model

const createUser = async (req, res) => {
  try {
    const { username, fullName, role, email, mobileNumber, gender, aadharNumber, password, studentData, alumniData, facultyData } = req.body;

    if (!username || username.length > 50) {
      return res.status(400).json({ error: 'Invalid username' });
    }

    if (!['student', 'alumni', 'faculty'].includes(role)) {
      return res.status(400).json({ error: 'Invalid role' });
    }

    const userRef = ref(database, `users/${username}`);
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

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

    // Save user data first
    await set(userRef, user);

    try {
      // Save student-specific data
      if (role === 'student' && studentData) {
        const student = new Student({
          studentID: studentData.studentID,
          userID: username,
          enrollmentNumber: studentData.enrollmentNumber,
          collegeName: studentData.collegeName,
          branchName: studentData.branchName,
          semester: studentData.semester,
          description: studentData.description,
          followingCount: studentData.followingCount,
          following: studentData.following,
          profilePhotoLink: studentData.profilePhotoLink,
          collegeIDPhotoLink: studentData.collegeIDPhotoLink,
          savedPostsCount: studentData.savedPostsCount,
          savedPosts: studentData.savedPosts,
          skills: studentData.skills,
          profileLink: studentData.profileLink,
        });

        const studentRef = ref(database, `students/${username}`);
        await set(studentRef, student.toObject());
      }

      // Save alumni-specific data
      if (role === 'alumni' && alumniData) {
        const alumni = new Alumni({
          alumniID: alumniData.alumniID,
          userID: username,
          enrollmentNumber: alumniData.enrollmentNumber,
          collegeName: alumniData.collegeName,
          branchName: alumniData.branchName,
          description: alumniData.description,
          followingCount: alumniData.followingCount,
          following: alumniData.following,
          followersCount: alumniData.followersCount,
          followers: alumniData.followers,
          collegeIDPhotoLink: alumniData.collegeIDPhotoLink,
          savedPostsCount: alumniData.savedPostsCount,
          savedPosts: alumniData.savedPosts,
          calendar: alumniData.calendar,
          employmentStatus: alumniData.employmentStatus,
          jobTitle: alumniData.jobTitle,
          achievement: alumniData.achievement,
          areaOfExpertise: alumniData.areaOfExpertise,
          contactEmail: alumniData.contactEmail,
          links: alumniData.links,
          profilePhotoLink: alumniData.profilePhotoLink,
          profileLink: alumniData.profileLink,
        });

        const alumniRef = ref(database, `alumni/${username}`);
        await set(alumniRef, alumni.toObject());
      }

      // Save faculty-specific data
      if (role === 'faculty' && facultyData) {
        const faculty = new Faculty({
          facultyEnrollmentNumber: facultyData.facultyEnrollmentNumber,
          userID: username,
          collegeName: facultyData.collegeName,
          departmentName: facultyData.departmentName,
          designation: facultyData.designation,
          yearsOfExperience: facultyData.yearsOfExperience,
          publicationsCount: facultyData.publicationsCount,
          profilePhotoLink: facultyData.profilePhotoLink,
          profileLink: facultyData.profileLink,
          researchAreas: facultyData.researchAreas,
          officeNumber: facultyData.officeNumber,
          contactEmail: facultyData.contactEmail,
          coursesTaught: facultyData.coursesTaught,
          projects: facultyData.projects,
          eventsOrganized: facultyData.eventsOrganized,
        });

        const facultyRef = ref(database, `faculty/${username}`);
        await set(facultyRef, faculty.toObject());
      }

      // Create JWT tokens
      const accessToken = createAccessToken({ username });
      const refreshToken = createRefreshToken({ username });

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      res.status(201).json({ message: 'User created successfully', accessToken });
    } catch (err) {
      // Rollback user data if there's an error in saving role-specific data
      await remove(userRef);
      throw err;
    }
  } catch (error) {
    res.status(500).json({ error: 'Error creating user: ' + error.message });
  }
};

module.exports = { createUser };
