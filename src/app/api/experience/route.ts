import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Experience from '@/models/Experience'
import { verifyToken, getTokenFromRequest } from '@/lib/auth'

export async function GET() {
    try {
        await dbConnect()
        const experiences = await Experience.find({}).sort({ order: 1 })
        return NextResponse.json({ success: true, data: experiences })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to fetch experiences', details: error.message },
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
        const experience = await Experience.create(body)
        return NextResponse.json({ success: true, data: experience }, { status: 201 })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to create experience', details: error.message },
            { status: 500 }
        )
    }
}
