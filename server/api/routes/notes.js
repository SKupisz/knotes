const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Note = require("../models/note");

router.post("/notes", checkAuth, (req, res, next) => {
  const decoded = jwt.verify(req.body.token, process.env.JWT_KEY);
  Note.find({ userId: decoded.userId })
    .exec()
    .then((docs) => {
      console.log(docs);
      if (docs.length >= 0) {
        res.status(200).json(docs); ///powinno byc docs zamiast decoded
      } else {
        res.status(404).json({
          message: "no entries found",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status.json({
        error: err,
      });
    });
});

router.post("/createNote", checkAuth, (req, res, next) => {
  const decoded = jwt.verify(req.body.token, process.env.JWT_KEY);
  const note = new Note({
    _id: new mongoose.Types.ObjectId(),
    userId: decoded.userId,
    title: req.body.title,
    content: ""
  });
  note
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "handling post request to /notes",
        createdNote: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/:noteId", (req, res, next) => {
  const id = req.params.noteId;
  Note.findById(id)
    .exec()
    .then((doc) => {
      console.log("From database ", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for the provided ID" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/updateNote/:noteId", (req, res, next) => {
  const id = req.params.noteId;
  Note.update({ _id: id }, { content: req.body.content })
    .exec()
    .then((result) => {
      console.log("patch",result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.delete("/:noteId", (req, res, next) => {
  const id = req.params.noteId;
  Note.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
