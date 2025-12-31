import mongoose from 'mongoose'

const AboutSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String },
    introduction: { type: String },
    quote: { type: String },
    coreTechnologies: [{ type: String }],
    profileImage: { type: String }
}, {
    timestamps: true
})

export default mongoose.models.About || mongoose.model('About', AboutSchema)
