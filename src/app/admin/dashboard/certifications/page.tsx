'use client'

import { useEffect, useState } from 'react'
import { Plus, Edit, Trash2, X, Save, Loader2 } from 'lucide-react'

interface Certification {
    _id?: string
    title: string
    issuer: string
    date: string
    skills: string[]
    description: string
    certificateUrl: string
}

const emptyCert: Certification = { title: '', issuer: '', date: '', skills: [], description: '', certificateUrl: '' }

export default function CertificationsPage() {
    const [certs, setCerts] = useState<Certification[]>([])
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [editing, setEditing] = useState<Certification | null>(null)
    const [formData, setFormData] = useState<Certification>(emptyCert)
    const [skillInput, setSkillInput] = useState('')
    const [saving, setSaving] = useState(false)

    const fetchData = async () => {
        try {
            const data = await (await fetch('/api/certifications')).json()
            if (data.success) setCerts(data.data)
        } catch (err) { console.error(err) }
        finally { setLoading(false) }
    }

    useEffect(() => { fetchData() }, [])

    const getToken = () => localStorage.getItem('admin_token')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)
        try {
            const token = getToken()
            const url = editing?._id ? `/api/certifications/${editing._id}` : '/api/certifications'
            const method = editing?._id ? 'PUT' : 'POST'
            const response = await fetch(url, { method, headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }, body: JSON.stringify(formData) })
            if ((await response.json()).success) { setShowModal(false); setEditing(null); setFormData(emptyCert); fetchData() }
        } catch (err) { alert('Error saving') }
        finally { setSaving(false) }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Delete this certification?')) return
        try {
            const token = getToken()
            if ((await (await fetch(`/api/certifications/${id}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } })).json()).success) fetchData()
        } catch (err) { alert('Error deleting') }
    }

    const addSkill = () => { if (skillInput.trim()) { setFormData({ ...formData, skills: [...formData.skills, skillInput.trim()] }); setSkillInput('') } }

    if (loading) return <div className="animate-pulse"><div className="h-8 bg-gray-200 rounded w-48 mb-8"></div></div>

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div><h1 className="text-2xl font-bold text-slate-900">Certifications</h1><p className="text-slate-600">Manage your certifications</p></div>
                <button onClick={() => { setEditing(null); setFormData(emptyCert); setShowModal(true) }} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"><Plus className="w-5 h-5" /> Add Certification</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certs.map((cert) => (
                    <div key={cert._id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="font-semibold text-slate-900">{cert.title}</h3>
                                <p className="text-slate-600 text-sm">{cert.issuer} • {cert.date}</p>
                            </div>
                            <div className="flex gap-1">
                                <button onClick={() => { setEditing(cert); setFormData(cert); setShowModal(true) }} className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"><Edit className="w-4 h-4" /></button>
                                <button onClick={() => handleDelete(cert._id!)} className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm mb-2 line-clamp-2">{cert.description}</p>
                        <div className="flex flex-wrap gap-1">
                            {cert.skills.map(s => <span key={s} className="px-2 py-0.5 bg-cyan-100 text-cyan-700 text-xs rounded-full">{s}</span>)}
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b flex items-center justify-between">
                            <h2 className="text-xl font-semibold">{editing ? 'Edit Certification' : 'Add Certification'}</h2>
                            <button onClick={() => setShowModal(false)} className="p-2 text-slate-400 hover:text-slate-600 rounded-lg"><X className="w-5 h-5" /></button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Title</label><input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg" required /></div>
                            <div className="grid grid-cols-2 gap-4">
                                <div><label className="block text-sm font-medium text-slate-700 mb-1">Issuer</label><input type="text" value={formData.issuer} onChange={(e) => setFormData({ ...formData, issuer: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg" required /></div>
                                <div><label className="block text-sm font-medium text-slate-700 mb-1">Date</label><input type="text" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg" placeholder="e.g., January 2025" /></div>
                            </div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Description</label><textarea value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg" rows={2} /></div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Certificate URL</label><input type="text" value={formData.certificateUrl} onChange={(e) => setFormData({ ...formData, certificateUrl: e.target.value })} className="w-full px-4 py-2 border border-gray-200 rounded-lg" placeholder="/certificate.pdf or https://..." /></div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Skills</label>
                                <div className="flex gap-2 mb-2">
                                    <input type="text" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())} className="flex-1 px-4 py-2 border border-gray-200 rounded-lg" placeholder="Add skill..." />
                                    <button type="button" onClick={addSkill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200">Add</button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {formData.skills.map((s, i) => (
                                        <span key={i} className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm flex items-center gap-1">
                                            {s}<button type="button" onClick={() => setFormData({ ...formData, skills: formData.skills.filter((_, j) => j !== i) })} className="hover:text-cyan-900"><X className="w-3 h-3" /></button>
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-end gap-3 pt-4">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">Cancel</button>
                                <button type="submit" disabled={saving} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50">
                                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}{saving ? 'Saving...' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
