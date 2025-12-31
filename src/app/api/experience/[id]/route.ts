import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Experience from '@/models/Experience'
import { verifyToken, getTokenFromRequest } from '@/lib/auth'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect()
        const experience = await Experience.findById(params.id)
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
    { params }: { params: { id: string } }
) {
    try {
        const token = getTokenFromRequest(request)
        if (!token || !verifyToken(token)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        await dbConnect()
        const experience = await Experience.findByIdAndUpdate(params.id, body, { new: true, runValidators: true })
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
    { params }: { params: { id: string } }
) {
    try {
        const token = getTokenFromRequest(request)
        if (!token || !verifyToken(token)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        await dbConnect()
        const experience = await Experience.findByIdAndDelete(params.id)
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
