import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Skill from '@/models/Skill'
import { verifyToken, getTokenFromRequest } from '@/lib/auth'

export async function GET() {
    try {
        await dbConnect()
        const skills = await Skill.find({}).sort({ order: 1 })
        return NextResponse.json({ success: true, data: skills })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to fetch skills', details: error.message },
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
        const skill = await Skill.create(body)
        return NextResponse.json({ success: true, data: skill }, { status: 201 })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to create skill', details: error.message },
            { status: 500 }
        )
    }
}
