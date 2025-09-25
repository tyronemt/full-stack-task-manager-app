const express = require('express');
const {
    getAllTasks,
    getTask, 
    createTask,
    deleteTask,
    updateTask
} = require('../controllers/taskController');
const router = express.Router()

// Get all tasks
router.get('/', getAllTasks)

//Get a single task
router.get('/:id', getTask)

//Post a new task
router.post('/', createTask)

//delete a task
router.delete('/:id', deleteTask)

//update a task
router.patch('/:id', updateTask)

module.exports = router;