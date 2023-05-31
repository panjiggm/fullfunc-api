import express from 'express';

import todos from './todos/todos.routes';
import auth from './auth/auth.routes';

const router = express.Router();

router.use('/todos', todos);
router.use('/auth', auth);

export default router;
