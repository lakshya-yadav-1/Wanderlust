const Listing = require("../models/listing.js");
const {listingSchema} = require("../schema.js")
// filters
module.exports.index = async (req, res) => {
  const { category, search } = req.query;
  let filter = {};

  if (category && category !== "all") {
    filter.category = category;
  }

  if (search && search.trim() !== "") {
    const regex = new RegExp(search.trim(), "i");
    filter.$or = [{ title: regex }, { location: regex }, { country: regex }];
  }

  const allListings = await Listing.find(filter);

  res.render("listings/index.ejs", {
    allListings,
    selectedCategory: category || "all",
    search: search || "",
  });
};




// Render New Listing Form
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

// Show all Listings
module.exports.showListing = async (req, res, next) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

//Create New Listing
module.exports.createListing = async (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error)
    throw new ExpressError(400, error.details.map((e) => e.message).join(","));

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;

Fix: if (req.file) {
  newListing.image = {
    url: req.file.path, // Cloudinary URL
    filename: req.file.filename, // Cloudinary filename
  }
} else {
  newListing.image = {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    filename: "unsplash-default",
  };
}

  await newListing.save();
  req.flash("success", "Listing Created!");
  res.redirect(`/listings/${newListing._id}`);
};



// Render Edit Listing Form
module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing,originalImageUrl });
};

// Update Listing
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;

  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Lisitng Updated!");
  res.redirect(`/listings/${id}`);
};

// Delete Listing
module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Lisitng Deleted!");
  res.redirect("/listings");
};
