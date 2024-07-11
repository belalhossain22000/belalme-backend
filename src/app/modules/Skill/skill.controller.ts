import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { SkillService } from "./skill.service";

const AddSkill = catchAsync(async (req, res) => {
    const result = await SkillService.AddSkillIntodb(req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Skill Added Successfully',
        data: result
    })
})

const GetSkill = catchAsync(async (req, res) => {
    
    const result = await SkillService.GetAllSkillFromDb();

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Skill retrieved Successfully',
        data: result
    })
})


export const SkillController = {
    AddSkill,
    GetSkill
}