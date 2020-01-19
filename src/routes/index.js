const express = require('express');
const welcomeRoute = require('./welcome');
const usersRoute = require('./users');
const cformsRoute = require('./cforms');

const router = express.Router();

router.use('/cforms', cformsRoute);
router.use('/welcome', welcomeRoute);
router.use('/users', usersRoute);
router.get('/', (req, res) => res.send('Hello World!'));

export default router;
