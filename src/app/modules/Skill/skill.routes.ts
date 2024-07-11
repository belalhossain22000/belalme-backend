
import express from 'express';

// import auth from '../../middleWares/auth';
import { SkillController } from './skill.controller';






const router = express.Router();


router.post('/add-skill',SkillController.AddSkill);
router.get('/all-skill',SkillController.GetSkill);




export const SkillRoutes = router;
