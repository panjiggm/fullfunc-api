import { Router } from 'express';
import {
  generateOtp,
  getUser,
  login,
  register,
  resetPassword,
  resetSession,
  updateUser,
  verifyOtp,
} from './users.controllers';
import { verifyUser } from '../../middlewares';

const router = Router();

/** POST Request */
router.post('/register', register);
// router.post('/register-mail');
// router.post('/authenticate');
router.post('/login', verifyUser, login);

/** GET Request */
router.get('/:username', getUser);
router.get('/generate-otp', generateOtp);
router.get('/verify-otp', verifyOtp);
router.get('/reset-session', resetSession);

/** PUT Request */
router.put('/updateuser', updateUser);
router.put('/reset-password', resetPassword);

export default router;
