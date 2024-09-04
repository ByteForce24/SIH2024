const { ref, set, get } = require('firebase/database');
const database = require('../../config/firebase-config');
const Student = require('../../models/StudentSchema');

const createStudent = async (req, res) => {
  try {
    const { username } = req.params;
    const studentData = req.body;

    // Validate student data
    if (!studentData.enrollmentNumber) {
      return res.status(400).json({ error: 'Enrollment number is required' });
    }

    // Create Student ID
    const studentID = `${studentData.enrollmentNumber.slice(-4)}:${username}@student`;

    // Check if student record exists
    const studentRef = ref(database, `students/${studentID}`);
    const snapshot = await get(studentRef);
    if (snapshot.exists()) {
      return res.status(400).json({ error: 'Student record already exists' });
    }

    // Save student data
    const student = {
      ...studentData,
      studentID,
    };
    await set(studentRef, student);

    res.status(201).json({ message: 'Student created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error creating student: ' + error.message });
  }
};

module.exports = { createStudent };
