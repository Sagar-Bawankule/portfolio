import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Project from '@/models/Project'
import { verifyToken, getTokenFromRequest } from '@/lib/auth'

// GET all projects (public)
export async function GET() {
    try {
        await dbConnect()
        const projects = await Project.find({}).sort({ order: 1, createdAt: -1 })
        return NextResponse.json({ success: true, data: projects })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to fetch projects', details: error.message },
            { status: 500 }
        )
    }
}

// POST create new project (protected)
export async function POST(request: Request) {
    try {
        const token = getTokenFromRequest(request)
        if (!token || !verifyToken(token)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const body = await request.json()
        await dbConnect()

        const project = await Project.create(body)
        return NextResponse.json({ success: true, data: project }, { status: 201 })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to create project', details: error.message },
            { status: 500 }
        )
    }
}
