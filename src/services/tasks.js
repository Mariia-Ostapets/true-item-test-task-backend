import { TasksCollection } from '../db/models/tasks.js';

export const getAllTasks = async () => {
  const tasks = await TasksCollection.find();
  return tasks;
};

export const createTask = async (payload) => {
  const task = await TasksCollection.create(payload);
  return task;
};

export const deleteTask = async (taskId) => {
  const task = await TasksCollection.findOneAndDelete({
    _id: taskId,
  });
  return task;
};

export const updateTask = async (taskId, payload) => {
  const task = await TasksCollection.findByIdAndUpdate(
    { _id: taskId },
    payload,
    {
      new: true,
    },
  );
  return task;
};
