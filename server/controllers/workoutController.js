const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// GET all workouts

const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}

// GET a single workout

const getWorkout = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'workout does not exist'})
    }

    const workout = await Workout.findById(id)

    if(!workout) {
        return res.status(404).json({error: 'workout does not exist'})
    }

    res.status(200).json(workout)
}

// CREATE new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
    
    // added doc to DB 
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}


// DELETE a workout

const deleteWorkout = async (req, res) => {

}

// UPDATE a workout

const updateWorkout = async (req, res) => {

}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
  }