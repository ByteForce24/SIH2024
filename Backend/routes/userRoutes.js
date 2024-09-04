const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/registrationController/userController');
const { createAlumni } = require('../controllers/registrationController/alumniController');
const { createFaculty } = require('../controllers/registrationController/facultyController');
const { createStudent } = require('../controllers/studentController');

// User creation route
router.post('/register', createUser);

// Role-based routes
router.post('/alumni/:username', createAlumni);
router.post('/faculty/:username', createFaculty);
router.post('/student/:username', createStudent);

module.exports = router;
