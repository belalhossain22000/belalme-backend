import { TSkill } from "./skill.interface";
import { SkillModel } from "./skill.model";

const AddSkillIntodb = async (payload: TSkill) => {
    const result = await SkillModel.create(payload)
    return result;
  };
const GetAllSkillFromDb = async () => {
    const result = await SkillModel.find()
    return result;
  };

  export const SkillService = {
     AddSkillIntodb,
     GetAllSkillFromDb
  }