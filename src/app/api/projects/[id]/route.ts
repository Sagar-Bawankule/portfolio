import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Project from '@/models/Project'
import { verifyToken, getTokenFromRequest } from '@/lib/auth'

type Props = {
    params: Promise<{ id: string }>
}

// GET single project
export async function GET(
    request: Request,
    { params }: Props
) {
    try {
        const { id } = await params
        await dbConnect()
        const project = await Project.findById(id)

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

        const project = await Project.findByIdAndUpdate(
            id,
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
    { params }: Props
) {
    try {
        const token = getTokenFromRequest(request)
        if (!token || !verifyToken(token)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { id } = await params
        await dbConnect()
        const project = await Project.findByIdAndDelete(id)

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
