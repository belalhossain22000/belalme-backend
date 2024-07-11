import { AppError } from '../../errors/AppError'
import { IExperience } from './experience.interface'
import { Experience } from './experience.model'




const GetAllExperiences=async() =>{
  try {
    const result = await Experience.find()
    if(!result){
      throw new AppError(404, 'No experiences found')
    }
    return result
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(`Error in getting all experiences: ${error.message}`)
  }
}

// Function to add a new experience
const AddExperienceIntoDB = async (
  payload: IExperience,
): Promise<IExperience> => {
  try {
    const result = await Experience.create(payload)
    if (!result) {
      throw new AppError(400, 'Experiences not created')
    }
    return result
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(`Error in adding experience: ${error.message}`)
  }
}

// Function to update an existing experience by ID
const UpdateExperienceIntoDB = async (
  id: string,
  payload: Partial<IExperience>
): Promise<IExperience | null> => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(id, payload, {
      new: true, 
      runValidators: true, 
    });

    if (!updatedExperience) {
      return null; 
    }

    return updatedExperience;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:any) {
    throw new Error(`Error in updating experience: ${error.message}`);
  }
};

export const ExperienceService = {
  AddExperienceIntoDB,
 UpdateExperienceIntoDB,
 GetAllExperiences
}
