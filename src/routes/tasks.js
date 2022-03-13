import express from "express";
import Task from "../models/Task.js"


const router = express.Router();

// GET /tasks
router.get('/', async (req, res) => {
    try {
        const query = Task.find({});
        const tasks = await query.exec();
        res.json(tasks);
    } catch(e) {
        res.json({message: 'Whoops, there was a error'});
    }
});

// POST / tasks
router.post('/', async (req, res) => {
    try {
        const newTaskData = {
            title: req.body.title,
            message: req.body.message,
        }
        const task = new Task(newTaskData);
        const newTask = await task.save();
        res.json(newTask);
    } catch(e) {
        res.json({message: 'Whoops, there was a error'});
    }
});


// DELETE /tasks/{id}
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const query = Task.deleteOne({
            _id: id
        });
        await query.exec();
        
        res.json({success: true});
    } catch(e) {
        res.json({message: 'Whoops, there was a error'});
    }
});

export default router;