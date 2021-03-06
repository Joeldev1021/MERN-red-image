const Note = require("../models/Note");
const createError = require("http-errors");

const getNotes = async (req, res, next) => {
//   const notes = await Note.find() .populate("userId");
  try {
    const notes = await Note.find({ userId: req.user.id });
    if (!notes) throw createError.NotFound("notes not found");
    res.json(notes);
  } catch (error) {
    next(error);
  }
};

const createNote = async (req, res, next) => {
  try {
    const note = await new Note(req.body);
    if (!note) throw createError.BadRequest("image is not created");
    note.userId = req.user.id;
    await note.save();
    res.json(note);
  } catch (error) {
    next(error);
  }
};

const getNoteById = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};

const updateNoteById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const noteUpdate = await Note.findByIdAndUpdate(id, req.body);
    if (!noteUpdate) throw createError.NotFound("note not found");
    return res.json(noteUpdate);
  } catch (error) {
    next(error);
  }
};

const deleteNote = async (req, res, next) => {
  const id = req.params.id;
  try {
    const noteDelete = await Note.findByIdAndDelete(id);
    if (!noteDelete) throw createError.NotFound("note not deleted");
    return res.json(noteDelete);
  } catch (error) {
    next(error);
  }
};

module.exports = { getNotes, createNote, getNoteById, updateNoteById, deleteNote };
