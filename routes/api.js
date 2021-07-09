const router = require("express").Router();
const Workout = require("../models/workout.js");
const mongoose = require("mongoose");



router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .limit(7)
      .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
      console.log(err);
    });
});


router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
      console.log(err);
    });
});


router.post("/api/workouts", ({ body }, res) => {
    Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log(err);
    });
});

router.put("/api/workouts/:id", ({ params, body }, res) => {
  Workout.findOneAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout)
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log(err);
    })
});


module.exports = router;