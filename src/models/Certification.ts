import mongoose from 'mongoose'

const CertificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    date: { type: String },
    skills: [{ type: String }],
    description: { type: String },
    certificateUrl: { type: String },
    order: { type: Number, default: 0 }
}, {
    timestamps: true
})

export default mongoose.models.Certification || mongoose.model('Certification', CertificationSchema)
