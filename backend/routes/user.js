const express = require("express");

const router = express.Router();

const { authMiddleware } = require("../middleware/auth");
const { ifAuthenticated } = require("../middleware/if-autheticated");
const {
  getAllUsers,
  getSingleUser,
  updateProfile,
  deleteProfile,
  checkMyAuth,
} = require("../controllers/user");
const {
  getScholarshipUser,
  getSavedScholarships,
} = require("../controllers/scholarship");

router.route("/").get(ifAuthenticated, getAllUsers);
router
  .route("/me")
  .get(authMiddleware, checkMyAuth)
  .patch(authMiddleware, updateProfile)
  .delete(authMiddleware, deleteProfile);

router.route("/me/saved").get(authMiddleware, getSavedScholarships);
router.route("/:id").get(ifAuthenticated, getSingleUser);
router.route("/:id/scholarships").get(getScholarshipUser);

// route for user projects

module.exports = router;
