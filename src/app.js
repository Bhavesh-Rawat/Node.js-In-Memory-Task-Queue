// src/app.js
const express = require('express');
const { addTask, getTask, getQueueLength } = require('./queue');

const app = express();
app.use(express.json());

// Add task to the queue
app.post('/add-task', (req, res) => {
    const { task } = req.body;
    addTask(task);
    console.log(`Task added to the queue. Current queue length: ${getQueueLength()}`);
    res.send(`Task added to the queue. Current queue length: ${getQueueLength()}`);
});

// Process tasks from the queue
app.get('/process-tasks', (req, res) => {
    const task = getTask();

    if (!task) {
        return res.send('No tasks in the queue');
    }

    // Simulate task processing
    console.log(`Processing task: ${task}`);
    res.send(`Processed task: ${task}. Current queue length: ${getQueueLength()}`);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
