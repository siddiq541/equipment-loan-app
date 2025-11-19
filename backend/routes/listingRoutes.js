// backend/routes/listingRoutes.js
const express = require('express');
const { createListing, getListings, getListingById, updateListing, deleteListing } = require('../controllers/listingControllers');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/listings')
  .post(protect, createListing)
  .get(protect, getListings);

router.route('/listings/:id')
  .get(protect, getListingById)
  .put(protect, updateListing)
  .delete(protect, deleteListing);

module.exports = router;