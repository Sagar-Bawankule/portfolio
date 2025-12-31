import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Experience from '@/models/Experience'
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
        const experience = await Experience.findById(id)
        if (!experience) {
            return NextResponse.json({ error: 'Experience not found' }, { status: 404 })
        }
        return NextResponse.json({ success: true, data: experience })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to fetch experience', details: error.message },
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
        const experience = await Experience.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        if (!experience) {
            return NextResponse.json({ error: 'Experience not found' }, { status: 404 })
        }
        return NextResponse.json({ success: true, data: experience })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to update experience', details: error.message },
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
        const experience = await Experience.findByIdAndDelete(id)
        if (!experience) {
            return NextResponse.json({ error: 'Experience not found' }, { status: 404 })
        }
        return NextResponse.json({ success: true, message: 'Experience deleted' })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to delete experience', details: error.message },
            { status: 500 }
        )
    }
}
