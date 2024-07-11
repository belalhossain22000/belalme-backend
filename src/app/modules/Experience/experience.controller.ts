import catchAsync from '../../../utils/catchAsync'
import sendResponse from '../../../utils/sendResponse'
import { ExperienceService } from './experience.service'







const GetExperience = catchAsync(async (req, res) => {
  const result = await ExperienceService.GetAllExperiences()

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Experience retrieved Successfully',
    data: result,
  })
})
const AddExperience = catchAsync(async (req, res) => {
  const result = await ExperienceService.AddExperienceIntoDB(req.body)

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Experience retrieved Successfully',
    data: result,
  })
})
const UpdateExperience = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await ExperienceService.UpdateExperienceIntoDB(id, req.body)

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Experience Updated Successfully',
    data: result,
  })
})

export const ExperienceController = {
  AddExperience,
  UpdateExperience,
  GetExperience
}
