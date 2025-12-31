import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Skill from '@/models/Skill'
import { verifyToken, getTokenFromRequest } from '@/lib/auth'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect()
        const skill = await Skill.findById(params.id)
        if (!skill) {
            return NextResponse.json({ error: 'Skill not found' }, { status: 404 })
        }
        return NextResponse.json({ success: true, data: skill })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to fetch skill', details: error.message },
            { status: 500 }
        )
    }
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const token = getTokenFromRequest(request)
        if (!token || !verifyToken(token)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        await dbConnect()
        const skill = await Skill.findByIdAndUpdate(params.id, body, { new: true, runValidators: true })
        if (!skill) {
            return NextResponse.json({ error: 'Skill not found' }, { status: 404 })
        }
        return NextResponse.json({ success: true, data: skill })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to update skill', details: error.message },
            { status: 500 }
        )
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const token = getTokenFromRequest(request)
        if (!token || !verifyToken(token)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        await dbConnect()
        const skill = await Skill.findByIdAndDelete(params.id)
        if (!skill) {
            return NextResponse.json({ error: 'Skill not found' }, { status: 404 })
        }
        return NextResponse.json({ success: true, message: 'Skill deleted' })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to delete skill', details: error.message },
            { status: 500 }
        )
    }
}
