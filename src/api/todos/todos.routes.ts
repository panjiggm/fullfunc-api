import { Router } from 'express';
import {
  findAll,
  createOne,
  findOne,
  updateOne,
  deleteOne,
} from './todos.controllers';
import { validateRequest } from '../../middlewares';
import { Todo } from './todos.model';
import { ParamsWithId } from '../../interfaces/ParamsWithId';

const router = Router();

/** GET Request */
router.get('/', findAll);
router.get(
  '/:id',
  validateRequest({ params: ParamsWithId }),
  findOne
);

/** POST Request */
router.post('/', validateRequest({ body: Todo }), createOne);

/** PUT Request */
router.put(
  '/:id',
  validateRequest({ params: ParamsWithId, body: Todo }),
  updateOne
);

/** DELETE Request */
router.delete(
  '/:id',
  validateRequest({ params: ParamsWithId }),
  deleteOne
);

export default router;
