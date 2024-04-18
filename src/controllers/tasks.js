const { getToken } = require("../utils/token/getToken");
const { saveTask } = require("../utils/tasks/saveTask");
const { deleteTask } = require("../utils/tasks/deleteTask");

// Create new task
async function POST(req, res) {
  const { content, done, id } = req.body;
  if (!content) {
    return res.status(400).json({ message: "Content is required" });
  }
  const token = getToken(req.headers);
  const task = { id, content, done };
  await saveTask(token, task);
  return res.status(201).json({ task });
}

async function DELETE(req, res) {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: "Task id is required" });
  }
  const token = getToken(req.headers);
  await deleteTask(token, id);
  return res.status(200).json({ message: "Task deleted" });
}

module.exports = { POST, DELETE };
