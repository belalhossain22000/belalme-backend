import { model, Schema } from "mongoose";
import { TSkill } from "./skill.interface";

const skillSchema = new Schema<TSkill>({
    name: {
        type: String,
        required: true,
    },
    proficiency: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    experienceYears: {
        type: Number,
        required: true,
    }
});
export const SkillModel = model<TSkill>('Skills', skillSchema);