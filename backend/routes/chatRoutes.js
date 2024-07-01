const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/create-group").post(protect, createGroupChat);
router.route("/rename-group").put(protect, renameGroup);
router.route("/remove-from-group").put(protect, removeFromGroup);
router.route("/add-to-group").put(protect, addToGroup);

module.exports = router;
