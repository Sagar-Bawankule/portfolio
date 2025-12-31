import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Project from '@/models/Project'
import { verifyToken, getTokenFromRequest } from '@/lib/auth'

// GET single project
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect()
        const project = await Project.findById(params.id)

        if (!project) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 })
        }

        return NextResponse.json({ success: true, data: project })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to fetch project', details: error.message },
            { status: 500 }
        )
    }
}

// PUT update project (protected)
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

        const project = await Project.findByIdAndUpdate(
            params.id,
            body,
            { new: true, runValidators: true }
        )

        if (!project) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 })
        }

        return NextResponse.json({ success: true, data: project })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to update project', details: error.message },
            { status: 500 }
        )
    }
}

// DELETE project (protected)
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
        const project = await Project.findByIdAndDelete(params.id)

        if (!project) {
            return NextResponse.json({ error: 'Project not found' }, { status: 404 })
        }

        return NextResponse.json({ success: true, message: 'Project deleted' })
    } catch (error: any) {
        return NextResponse.json(
            { error: 'Failed to delete project', details: error.message },
            { status: 500 }
        )
    }
}
