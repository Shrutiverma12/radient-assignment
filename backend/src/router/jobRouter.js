import express from 'express';
import { isAuthenticated } from '../middleware/authMiddleware.js';
import { roleMiddleware } from '../middleware/roleMiddleware.js';
import {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
} from '../controller/jobController.js';

const router = express.Router();

router.post('/', isAuthenticated, roleMiddleware(['emplyer']), createJob);

router.get('/', getAllJobs);

router.put('/:id', isAuthenticated, roleMiddleware(['employer']), updateJob);

router.delete('/:id', isAuthenticated, roleMiddleware(['admin']), deleteJob);

export default router;
