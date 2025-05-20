import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
// import { isValidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = Router();

// router.get('/', ctrlWrapper(getTasksController));

// router.post(
//   '/',
//   validateBody(createTaskSchema),
//   ctrlWrapper(createTaskController),
// );

// router.delete('/:taskId', isValidId, ctrlWrapper(deleteTaskController));

export default router;
