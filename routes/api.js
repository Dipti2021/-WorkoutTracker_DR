const router = require("express").Router();
const db = require("../models/workout.js");




router.get("/api/workouts/range", (req, res) => {
    db.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
     
    });
});


router.get("/api/workouts", (req, res) => {
   db.find({}).then(dbWorkout => {

        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
      
    });
});


router.post("/api/workouts", ({ body }, res) => {
    db.create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ params, body }, res) => {
 db.findOneAndUpdate(
    { _id: params.id },
    {   
         $push: { exercises: body } },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout)
    })
    .catch((err) => {
      res.status(400).json(err);
      
    })
});


module.exports = router;