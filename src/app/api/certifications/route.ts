import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Certification from '@/models/Certification'
import { verifyToken, getTokenFromRequest } from '@/lib/auth'

export async function GET() {
    try {
        await dbConnect()
        const certifications = await Certification.find({}).sort({ order: 1, createdAt: -1 })
        return NextResponse.json({ success: true, data: certifications })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to fetch certifications', details: error.message },
            { status: 500 }
        )
    }
}

export async function POST(request: Request) {
    try {
        const token = getTokenFromRequest(request)
        if (!token || !verifyToken(token)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        await dbConnect()
        const certification = await Certification.create(body)
        return NextResponse.json({ success: true, data: certification }, { status: 201 })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to create certification', details: error.message },
            { status: 500 }
        )
    }
}
