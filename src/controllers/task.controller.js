const Task = require("../models/task.model");

exports.createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    userId: req.user.userId
  });
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const tasks = await Task.find({ userId: req.user.userId })
    .skip(skip)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  res.json(tasks);
};

exports.getTask = async (req, res) => {
  const task = await Task.findOne({
    _id: req.params.id,
    userId: req.user.userId
  });
  if (!task) return res.status(404).json({ message: "Not found" });
  res.json(task);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.userId },
    req.body,
    { new: true }
  );
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.userId
  });
  res.status(204).end();
};
