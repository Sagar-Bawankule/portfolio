import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import About from '@/models/About'
import { verifyToken, getTokenFromRequest } from '@/lib/auth'

export async function GET() {
    try {
        await dbConnect()
        const about = await About.findOne()
        return NextResponse.json({ success: true, data: about })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to fetch about', details: error.message },
            { status: 500 }
        )
    }
}

export async function PUT(request: Request) {
    try {
        const token = getTokenFromRequest(request)
        if (!token || !verifyToken(token)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        await dbConnect()

        let about = await About.findOne()
        if (!about) {
            about = await About.create(body)
        } else {
            about = await About.findByIdAndUpdate(about._id, body, { new: true, runValidators: true })
        }

        return NextResponse.json({ success: true, data: about })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to update about', details: error.message },
            { status: 500 }
        )
    }
}
