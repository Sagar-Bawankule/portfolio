import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [{ type: String }],
    githubUrl: { type: String },
    liveUrl: { type: String },
    image: { type: String },
    featured: { type: Boolean, default: false },
    status: { type: String },
    icon: { type: String },
    color: { type: String },
    order: { type: Number, default: 0 }
}, {
    timestamps: true
})

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema)
