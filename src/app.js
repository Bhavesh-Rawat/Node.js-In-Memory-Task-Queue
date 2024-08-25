const express = require('express');
const { addTask, getTask, getQueueLength } = require('./queue');

const app = express();
app.use(express.json());

function logWithTimestamp(message) {
    const timestamp = new Date().toLocaleString();  // Get human-readable timestamp
    console.log(`[${timestamp}] ${message}`);
}

// Add task to the queue
app.post('/add-task', (req, res) => {
    const task = req.body.task;
    addTask(task);
    logWithTimestamp(`Task added to the queue. Current queue length: ${getQueueLength()}`);
    res.send(`Task added to the queue. Current queue length: ${getQueueLength()}`);
});

// Process tasks from the queue
app.get('/process-tasks', (req, res) => {
    const task = getTask();

    if (!task) {
        logWithTimestamp('No tasks in the queue');
        return res.send('No tasks in the queue');
    }

    // Simulate task processing
    logWithTimestamp(`Processing task: ${task}`);
    res.send(`Processed task: ${task}. Current queue length: ${getQueueLength()}`);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    logWithTimestamp(`Server is running on port ${port}`);
});
