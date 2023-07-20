const express = require('express');
const {
  getAccount,
  getOverview,
  getTour,
  getLoginForm,
  updateUserData,
  getMyTours,
} = require('../controllers/viewsController');
const { isLoggedIn, protect } = require('../controllers/authController');
const { createBookingCheckout } = require('../controllers/bookingController');

const router = express.Router();

router.get('/me', protect, getAccount);
router.get('/my-tours', protect, getMyTours);
router.patch('/submit-user-data', protect, updateUserData);

router.use(isLoggedIn);

router.get('/', createBookingCheckout, getOverview);
router.get('/tour/:slug', getTour);
router.get('/login', getLoginForm);

module.exports = router;
