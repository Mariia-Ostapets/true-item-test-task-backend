import { model, Schema } from 'mongoose';

const tasksSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const TasksCollection = model('tasks', tasksSchema);
