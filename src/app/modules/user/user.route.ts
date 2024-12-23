import { Router } from 'express';

const router = Router();

router.post('/signin', (req, res) => {
  res.status(201).json({
    data: [],
    message: 'Authentication succeed',
  });
});

export const UserRoute = router;
