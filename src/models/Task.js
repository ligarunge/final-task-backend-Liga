import mongoose from "mongoose";

// [{"title": "Buy milk", "isCompleted": true, "createdAt": "2022-01-01 21:00:00"}]
const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
   
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const task = mongoose.model('Tasks', taskSchema);

export default task;