import mongoose from 'mongoose'

const HeroSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tagline: { type: String },
    description: { type: String },
    resumeUrl: { type: String },
    skills: [{ type: String }],
    profileImage: { type: String }
}, {
    timestamps: true
})

export default mongoose.models.Hero || mongoose.model('Hero', HeroSchema)
