const { ref, set, get } = require('firebase/database');
const database = require('../config/firebase-config');
const Faculty = require('../models/FacultySchema');

const createFaculty = async (req, res) => {
  try {
    const { username } = req.params;
    const facultyData = req.body;

    // Validate faculty data
    if (!facultyData.enrollmentNumber) {
      return res.status(400).json({ error: 'Enrollment number is required' });
    }

    // Create Faculty ID
    const facultyID = `${facultyData.enrollmentNumber.slice(-4)}:${username}@faculty`;

    // Check if faculty record exists
    const facultyRef = ref(database, `faculty/${facultyID}`);
    const snapshot = await get(facultyRef);
    if (snapshot.exists()) {
      return res.status(400).json({ error: 'Faculty record already exists' });
    }

    // Save faculty data
    const faculty = {
      ...facultyData,
      facultyID,
    };
    await set(facultyRef, faculty);

    res.status(201).json({ message: 'Faculty created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating faculty: ' + error.message });
  }
};

module.exports = { createFaculty };
