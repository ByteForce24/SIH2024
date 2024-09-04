const { ref, set, get } = require('firebase/database');
const database = require('../../config/firebase-config');
const Alumni = require('../../models/AlumniSchema');

const createAlumni = async (req, res) => {
  try {
    const { username } = req.params;
    const alumniData = req.body;

    // Validate alumni data
    if (!alumniData.enrollmentNumber) {
      return res.status(400).json({ error: 'Enrollment number is required' });
    }

    // Create Alumni ID
    const alumniID = `${alumniData.enrollmentNumber.slice(-4)}:${username}@alumni`;

    // Check if alumni record exists
    const alumniRef = ref(database, `alumni/${alumniID}`);
    const snapshot = await get(alumniRef);
    if (snapshot.exists()) {
      return res.status(400).json({ error: 'Alumni record already exists' });
    }

    // Save alumni data
    const alumni = {
      ...alumniData,
      alumniID,
    };
    await set(alumniRef, alumni);

    res.status(201).json({ message: 'Alumni created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating alumni: ' + error.message });
  }
};

module.exports = { createAlumni };
