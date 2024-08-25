// src/queue.js
let queue = [];

function addTask(task) {
    queue.push(task);
}

function getTask() {
    return queue.shift();
}

function getQueueLength() {
    return queue.length;
}

module.exports = { addTask, getTask, getQueueLength };
