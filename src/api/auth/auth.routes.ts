import { Router } from 'express';

const router = Router();

/** POST Request */
router.post('/register');
router.post('/register-mail');
router.post('/authenticate');
router.post('/login');

/** GET Request */
router.get('/user/:username');
router.get('/generate-otp');
router.get('/verify-otp');
router.get('/reset-session');

/** PUT Request */
router.get('/updateuser');
router.get('/reset-password');

export default router;
