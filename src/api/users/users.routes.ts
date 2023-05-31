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

const router = Router();

/** POST Request */
router.post('/register', register);
// router.post('/register-mail');
// router.post('/authenticate');
router.post('/login', login);

/** GET Request */
router.get('/:userid', getUser);
router.get('/generate-otp', generateOtp);
router.get('/verify-otp', verifyOtp);
router.get('/reset-session', resetSession);

/** PUT Request */
router.get('/updateuser', updateUser);
router.get('/reset-password', resetPassword);

export default router;
