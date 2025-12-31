'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
    FolderKanban,
    Code2,
    GraduationCap,
    Award,
    User,
    Home,
    TrendingUp,
    Eye,
    Edit
} from 'lucide-react'

interface Stats {
    projects: number
    skills: number
    experience: number
    certifications: number
}

export default function AdminDashboard() {
    const [stats, setStats] = useState<Stats>({
        projects: 0,
        skills: 0,
        experience: 0,
        certifications: 0
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [projectsRes, skillsRes, experienceRes, certificationsRes] = await Promise.all([
                    fetch('/api/projects'),
                    fetch('/api/skills'),
                    fetch('/api/experience'),
                    fetch('/api/certifications')
                ])

                const [projects, skills, experience, certifications] = await Promise.all([
                    projectsRes.json(),
                    skillsRes.json(),
                    experienceRes.json(),
                    certificationsRes.json()
                ])

                setStats({
                    projects: projects.data?.length || 0,
                    skills: skills.data?.length || 0,
                    experience: experience.data?.length || 0,
                    certifications: certifications.data?.length || 0
                })
            } catch (err) {
                console.error('Error fetching stats:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchStats()
    }, [])

    const statsCards = [
        { label: 'Projects', value: stats.projects, icon: FolderKanban, color: 'from-blue-500 to-blue-600', href: '/admin/dashboard/projects' },
        { label: 'Skill Categories', value: stats.skills, icon: Code2, color: 'from-purple-500 to-purple-600', href: '/admin/dashboard/skills' },
        { label: 'Experience', value: stats.experience, icon: GraduationCap, color: 'from-green-500 to-green-600', href: '/admin/dashboard/experience' },
        { label: 'Certifications', value: stats.certifications, icon: Award, color: 'from-orange-500 to-orange-600', href: '/admin/dashboard/certifications' },
    ]

    const quickActions = [
        { label: 'Edit About Section', icon: User, href: '/admin/dashboard/about' },
        { label: 'Edit Hero Section', icon: Home, href: '/admin/dashboard/hero' },
        { label: 'View Portfolio', icon: Eye, href: '/', external: true },
    ]

    if (loading) {
        return (
            <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-48 mb-8"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-32 bg-gray-200 rounded-xl"></div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
                <p className="text-slate-600">Manage your portfolio content</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statsCards.map((card) => {
                    const Icon = card.icon
                    return (
                        <Link
                            key={card.label}
                            href={card.href}
                            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <TrendingUp className="w-5 h-5 text-green-500" />
                            </div>
                            <div className="text-3xl font-bold text-slate-900 mb-1">{card.value}</div>
                            <div className="text-slate-600 text-sm">{card.label}</div>
                        </Link>
                    )
                })}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {quickActions.map((action) => {
                        const Icon = action.icon
                        return (
                            <Link
                                key={action.label}
                                href={action.href}
                                target={action.external ? '_blank' : undefined}
                                className="flex items-center gap-3 p-4 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors"
                            >
                                <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-slate-600" />
                                </div>
                                <span className="text-slate-700 font-medium">{action.label}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>

            {/* Recent Activity Note */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Edit className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Getting Started</h3>
                        <p className="text-slate-600 text-sm">
                            Use the sidebar to navigate between different sections. You can add, edit, or delete
                            projects, skills, experience entries, certifications, and update your about/hero sections.
                            Changes are saved to MongoDB Atlas and reflected immediately on your portfolio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
