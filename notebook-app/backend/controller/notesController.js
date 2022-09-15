const Notes = require("../model/notesModel");

const fetchAllNotes = async (req, res) => {
  const id = req.user;
  const notes = await Notes.find({ user: id });
  res.status(201).json(notes);
};

const createNote = async (req, res) => {
  const { title, text, color, time } = req.body;
  const notes = new Notes({
    title,
    text,
    user: req.user,
    time,
    color,
  });
  const resp = await notes.save();
  res.status(201).json(resp);
};

const updateNote = async (req, res) => {
  const id = req.note;
  const userId = req.user;
  const note = await Notes.findById(id);
  console.log(note);
  if (!note) {
    res.status(400).json({
      message: "Note not found !",
    });
    return;
  }
  if (note.user.toString() !== userId) {
    res.status(401).json({
      message: "Unauthorized access",
    });
    return;
  }
  const updateNotes = await Notes.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true, runValidators: true }
  );
  res.status(201).json(updateNotes);
};

const deleteNote = async (req, res) => {
  const id = req.note;
  const userId = req.user;
  const note = await Notes.findById(id);

  if (!note) {
    res.status(400).json({
      message: "Note not found !",
    });
    return;
  }
  if (note.user.toString() !== userId) {
    res.status(401).json({
      message: "Unauthorized Access",
    });
    return;
  }
  const deletedNotes = await Notes.findByIdAndDelete(id);
  res.status(201).json({
    message: `${deletedNotes.title} Deleted Successfully`,
    note: deletedNotes,
  });
};

module.exports = { fetchAllNotes, createNote, updateNote, deleteNote };
