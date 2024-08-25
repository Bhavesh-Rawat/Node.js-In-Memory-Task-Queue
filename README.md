## Node.js In-Memory Task Queue

This is a simple Node.js project that demonstrates how to implement a basic in-memory task queue using Express.js. The project uses an in-memory queue to add tasks and process them sequentially.



## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/node-task-queue.git
   cd node-task-queue
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

1. **Start the server:**
   ```bash
   node src/app.js
   ```
   The server will run on `http://localhost:3000`.

2. **Add a task to the queue:**

   - Use a tool like [Postman](https://www.postman.com/) or `curl` to send a `POST` request to `http://localhost:3000/add-task` with the following JSON body:
     ```json
     {
         "task": "Task 1"
     }
     ```

   - Example using `curl`:
     ```bash
     curl -X POST http://localhost:3000/add-task -H "Content-Type: application/json" -d '{"task": "Task 1"}'
     ```

3. **Process tasks from the queue:**

   - Send a `GET` request to `http://localhost:3000/process-tasks` to process the next task in the queue.

   - Example using `curl`:
     ```bash
     curl http://localhost:3000/process-tasks
     ```

## How It Works

- **Adding a Task:**
  - The `/add-task` endpoint adds a task to the in-memory queue. The queue is stored as an array in memory.
  - The task is a simple string that you pass in the request body.
  
- **Processing a Task:**
  - The `/process-tasks` endpoint retrieves the first task from the queue, simulates processing it, and then removes it from the queue.
  - The task is logged in the terminal to indicate it is being processed.
