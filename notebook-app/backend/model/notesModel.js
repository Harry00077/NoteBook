const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    time: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;
