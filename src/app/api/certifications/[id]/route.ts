import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Certification from '@/models/Certification'
import { verifyToken, getTokenFromRequest } from '@/lib/auth'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect()
        const certification = await Certification.findById(params.id)
        if (!certification) {
            return NextResponse.json({ error: 'Certification not found' }, { status: 404 })
        }
        return NextResponse.json({ success: true, data: certification })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to fetch certification', details: error.message },
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
        const certification = await Certification.findByIdAndUpdate(params.id, body, { new: true, runValidators: true })
        if (!certification) {
            return NextResponse.json({ error: 'Certification not found' }, { status: 404 })
        }
        return NextResponse.json({ success: true, data: certification })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to update certification', details: error.message },
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
        const certification = await Certification.findByIdAndDelete(params.id)
        if (!certification) {
            return NextResponse.json({ error: 'Certification not found' }, { status: 404 })
        }
        return NextResponse.json({ success: true, message: 'Certification deleted' })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to delete certification', details: error.message },
            { status: 500 }
        )
    }
}
