import { model, Schema } from "mongoose";
import { IExperience } from "./experience.interface";

// Define Experience schema
const experienceSchema = new Schema<IExperience>({
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    imageLink: {
      type: String,
    },
  });
  
  export const Experience = model<IExperience>('Experience', experienceSchema);