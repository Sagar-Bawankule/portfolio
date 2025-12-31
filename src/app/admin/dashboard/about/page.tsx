'use client'

import { useEffect, useState } from 'react'
import { Save, Loader2, X } from 'lucide-react'

interface AboutData {
    name: string
    title: string
    introduction: string
    quote: string
    coreTechnologies: string[]
    profileImage: string
}

const emptyAbout: AboutData = { name: '', title: '', introduction: '', quote: '', coreTechnologies: [], profileImage: '/profilephoto.webp' }

export default function AboutPage() {
    const [formData, setFormData] = useState<AboutData>(emptyAbout)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [techInput, setTechInput] = useState('')
    const [saved, setSaved] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await (await fetch('/api/about')).json()
                if (data.success && data.data) setFormData(data.data)
            } catch (err) { console.error(err) }
            finally { setLoading(false) }
        }
        fetchData()
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)
        setSaved(false)
        try {
            const token = localStorage.getItem('admin_token')
            const response = await fetch('/api/about', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(formData)
            })
            if ((await response.json()).success) setSaved(true)
        } catch (err) { alert('Error saving') }
        finally { setSaving(false) }
    }

    const addTech = () => {
        if (techInput.trim() && !formData.coreTechnologies.includes(techInput.trim())) {
            setFormData({ ...formData, coreTechnologies: [...formData.coreTechnologies, techInput.trim()] })
            setTechInput('')
        }
    }

    if (loading) return <div className="animate-pulse"><div className="h-8 bg-gray-200 rounded w-48 mb-8"></div></div>

    return (
        <div className="max-w-3xl">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900">About Section</h1>
                <p className="text-slate-600">Edit your about section content</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-slate-700 mb-1">Name</label><input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg" required /></div>
                    <div><label className="block text-sm font-medium text-slate-700 mb-1">Title</label><input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg" required /></div>
                </div>

                <div><label className="block text-sm font-medium text-slate-700 mb-1">Introduction</label><textarea value={formData.introduction} onChange={(e) => setFormData({ ...formData, introduction: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg" rows={4} required /></div>

                <div><label className="block text-sm font-medium text-slate-700 mb-1">Quote</label><input type="text" value={formData.quote} onChange={(e) => setFormData({ ...formData, quote: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg" /></div>

                <div><label className="block text-sm font-medium text-slate-700 mb-1">Profile Image URL</label><input type="text" value={formData.profileImage} onChange={(e) => setFormData({ ...formData, profileImage: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg" placeholder="/profilephoto.webp" /></div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Core Technologies</label>
                    <div className="flex gap-2 mb-2">
                        <input type="text" value={techInput} onChange={(e) => setTechInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTech())} className="flex-1 px-4 py-2 border border-gray-200 rounded-lg" placeholder="Add technology..." />
                        <button type="button" onClick={addTech} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200">Add</button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {formData.coreTechnologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-1">
                                {tech}<button type="button" onClick={() => setFormData({ ...formData, coreTechnologies: formData.coreTechnologies.filter((_, j) => j !== i) })} className="hover:text-blue-900"><X className="w-3 h-3" /></button>
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4 pt-4">
                    <button type="submit" disabled={saving} className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50">
                        {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                        {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                    {saved && <span className="text-green-600 text-sm">Changes saved successfully!</span>}
                </div>
            </form>
        </div>
    )
}
