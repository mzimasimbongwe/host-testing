// AuthRoute.js

const { Signup, Login } = require('../Controllers/AuthController');
const router = require('express').Router();

// Add new routes for Signup and Login
router.post('/signup', Signup);
router.post('/login', Login);

// Update the existing route with userVerification

module.exports = router;
