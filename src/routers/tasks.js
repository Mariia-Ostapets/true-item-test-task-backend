import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createTaskSchema, updateTaskSchema } from '../validation/tasks.js';
import {
  createTaskController,
  deleteTaskController,
  getTasksController,
  updateTaskController,
} from '../controllers/tasks.js';

const router = Router();

router.get('/', ctrlWrapper(getTasksController));

router.post(
  '/',
  validateBody(createTaskSchema),
  ctrlWrapper(createTaskController),
);

router.delete('/:id', isValidId, ctrlWrapper(deleteTaskController));

router.patch(
  '/:id',
  isValidId,
  validateBody(updateTaskSchema),
  ctrlWrapper(updateTaskController),
);

export default router;
