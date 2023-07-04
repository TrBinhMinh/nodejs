const express = require('express');
const {
  getAccount,
  getOverview,
  getTour,
  getLoginForm,
  updateUserData,
} = require('../controllers/viewsController');
const { isLoggedIn, protect } = require('../controllers/authController');

const router = express.Router();

router.get('/me', protect, getAccount);
router.patch('/submit-user-data', protect, updateUserData);

router.use(isLoggedIn);

router.get('/', getOverview);
router.get('/tour/:slug', getTour);
router.get('/login', getLoginForm);

module.exports = router;
