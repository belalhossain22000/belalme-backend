
import express from 'express';
import { ExperienceController } from './experience.controller';








const router = express.Router();


router.post('/add-experience',ExperienceController.AddExperience);
router.patch('/update-experience/:id',ExperienceController.UpdateExperience);
router.get('/get-experience',ExperienceController.GetExperience);




export const ExperienceRoutes = router;
