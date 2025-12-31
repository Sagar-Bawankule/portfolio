import mongoose from 'mongoose'

const SkillSchema = new mongoose.Schema({
    title: { type: String, required: true },
    icon: { type: String },
    description: { type: String },
    skills: [{
        name: { type: String, required: true },
        icon: { type: String },
        color: { type: String }
    }],
    order: { type: Number, default: 0 }
}, {
    timestamps: true
})

export default mongoose.models.Skill || mongoose.model('Skill', SkillSchema)
