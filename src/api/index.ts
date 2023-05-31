import express from 'express';

import todos from './todos/todos.routes';
import users from './users/users.routes';

const router = express.Router();

router.use('/todos', todos);
router.use('/users', users);

export default router;
