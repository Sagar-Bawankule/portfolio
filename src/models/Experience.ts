import mongoose from 'mongoose'

const ExperienceSchema = new mongoose.Schema({
    type: { type: String, required: true },
    title: { type: String, required: true },
    institution: { type: String, required: true },
    location: { type: String },
    duration: { type: String },
    description: { type: String },
    gpa: { type: String },
    highlights: [{ type: String }],
    icon: { type: String },
    color: { type: String },
    order: { type: Number, default: 0 }
}, {
    timestamps: true
})

export default mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema)
