const express = require("express");
const {
  fetchAllNotes,
  createNote,
  updateNote,
  deleteNote,
} = require("../controller/notesController");
const { fetchUser, validateNewNote } = require("../middleware/middleware");

const router = express.Router();

router.get("/mynotes", fetchUser, fetchAllNotes);
router.post("/mynotes", fetchUser, validateNewNote, createNote);
router.put("/mynotes/:id", fetchUser, validateNewNote, updateNote);
router.delete("/mynotes/:id", fetchUser, deleteNote);

module.exports = router;
