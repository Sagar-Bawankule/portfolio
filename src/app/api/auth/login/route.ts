import { NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Admin from '@/models/Admin'
import { signToken } from '@/lib/auth'

export async function POST(request: Request) {
    try {
        const { username, password } = await request.json()

        if (!username || !password) {
            return NextResponse.json(
                { error: 'Username and password are required' },
                { status: 400 }
            )
        }

        await dbConnect()

        const admin = await Admin.findOne({ username })
        if (!admin) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            )
        }

        const isPasswordValid = await admin.comparePassword(password)
        if (!isPasswordValid) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            )
        }

        const token = signToken({
            userId: admin._id.toString(),
            username: admin.username
        })

        return NextResponse.json({
            success: true,
            token,
            user: {
                id: admin._id,
                username: admin.username,
                email: admin.email
            }
        })
    } catch (error) {
        console.error('Login error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
