import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Hero from '@/models/Hero'
import { verifyToken, getTokenFromRequest } from '@/lib/auth'

export async function GET() {
    try {
        await dbConnect()
        const hero = await Hero.findOne()
        return NextResponse.json({ success: true, data: hero })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to fetch hero', details: error.message },
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

        let hero = await Hero.findOne()
        if (!hero) {
            hero = await Hero.create(body)
        } else {
            hero = await Hero.findByIdAndUpdate(hero._id, body, { new: true, runValidators: true })
        }

        return NextResponse.json({ success: true, data: hero })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to update hero', details: error.message },
            { status: 500 }
        )
    }
}
