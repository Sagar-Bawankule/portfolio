import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Skill from '@/models/Skill'
import { verifyToken, getTokenFromRequest } from '@/lib/auth'

type Props = {
    params: Promise<{ id: string }>
}

export async function GET(
    request: Request,
    { params }: Props
) {
    try {
        const { id } = await params
        await dbConnect()
        const skill = await Skill.findById(id)
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
    { params }: Props
) {
    try {
        const token = getTokenFromRequest(request)
        if (!token || !verifyToken(token)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { id } = await params
        const body = await request.json()
        await dbConnect()
        const skill = await Skill.findByIdAndUpdate(id, body, { new: true, runValidators: true })
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
    { params }: Props
) {
    try {
        const token = getTokenFromRequest(request)
        if (!token || !verifyToken(token)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { id } = await params
        await dbConnect()
        const skill = await Skill.findByIdAndDelete(id)
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
