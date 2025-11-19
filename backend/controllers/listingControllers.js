/* create listing Post request restricted to user role owner
returns all listings for all users not role specific
owner can create, update, delete their own listings



*/

const Listing = require('../models/listingModel');

// Create new listing
exports.createListing = async (req, res) => {
  try {
    const { title, description, category, location, photos } = req.body;

    if (!title || !description || !category || !location) {
      return res.status(400).json({ message: 'Title, description, category, and location are required' });
    }

    if (photos && !Array.isArray(photos)) {
      return res.status(400).json({ message: 'Photos must be an array of URLs' });
    }

    const listing = await Listing.create({
      title,
      description,
      category,
      location,
      photos,
      owner: req.user.id,
    });

    res.status(201).json({ message: 'Listing created successfully', listing });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all listings (owners see their listings, admin sees all)
exports.getListings = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) filter.category = req.query.category;
    if (req.user.role !== 'admin') filter.owner = req.user.id;

    const listings = await Listing.find(filter).populate('owner', 'username email');
    res.json(listings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get single listing by ID
exports.getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate('owner', 'username email');
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    res.json(listing);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update listing (only owner or admin)
exports.updateListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: 'Listing not found' });

    if (listing.owner.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update this listing' });
    }

    Object.assign(listing, req.body);
    await listing.save();
    res.json({ message: 'Listing updated', listing });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete listing (only owner or admin)
exports.deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: 'Listing not found' });

    if (listing.owner.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete this listing' });
    }

    await listing.remove();
    res.json({ message: 'Listing deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};