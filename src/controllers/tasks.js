import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from '../services/tasks.js';

export const getTasksController = async (req, res) => {
  const tasks = await getAllTasks();

  res.json(tasks);
};

export const createTaskController = async (req, res) => {
  const task = await createTask(req.body);

  res.status(201).json(task);
};

export const deleteTaskController = async (req, res) => {
  const { id } = req.params;
  const deletedTask = await deleteTask(id);

  res.status(200).json(deletedTask);
};

export const updateTaskController = async (req, res) => {
  const { id } = req.params;

  const updatedtTask = await updateTask(id, req.body);

  res.status(200).json(updatedtTask);
};
