'use client'

import { useEffect, useState } from 'react'
import { Plus, Edit, Trash2, X, Save, Loader2 } from 'lucide-react'

interface SkillItem {
    name: string
    icon: string
    color: string
}

interface SkillCategory {
    _id?: string
    title: string
    icon: string
    description: string
    skills: SkillItem[]
}

const emptyCategory: SkillCategory = {
    title: '',
    icon: 'Code2',
    description: '',
    skills: []
}

export default function SkillsPage() {
    const [categories, setCategories] = useState<SkillCategory[]>([])
    const [loading, setLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [editingCategory, setEditingCategory] = useState<SkillCategory | null>(null)
    const [formData, setFormData] = useState<SkillCategory>(emptyCategory)
    const [skillInput, setSkillInput] = useState({ name: '', icon: '💻', color: 'from-blue-500 to-blue-600' })
    const [saving, setSaving] = useState(false)

    const fetchCategories = async () => {
        try {
            const response = await fetch('/api/skills')
            const data = await response.json()
            if (data.success) {
                setCategories(data.data)
            }
        } catch (err) {
            console.error('Error fetching skills:', err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { fetchCategories() }, [])

    const getToken = () => localStorage.getItem('admin_token')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)

        try {
            const token = getToken()
            const url = editingCategory?._id ? `/api/skills/${editingCategory._id}` : '/api/skills'
            const method = editingCategory?._id ? 'PUT' : 'POST'

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(formData)
            })

            const data = await response.json()
            if (data.success) {
                setShowModal(false)
                setEditingCategory(null)
                setFormData(emptyCategory)
                fetchCategories()
            } else {
                alert(data.error || 'Failed to save')
            }
        } catch (err) {
            alert('Error saving')
        } finally {
            setSaving(false)
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('Delete this skill category?')) return

        try {
            const token = getToken()
            const response = await fetch(`/api/skills/${id}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            })
            if ((await response.json()).success) fetchCategories()
        } catch (err) {
            alert('Error deleting')
        }
    }

    const addSkill = () => {
        if (skillInput.name.trim()) {
            setFormData({
                ...formData,
                skills: [...formData.skills, { ...skillInput, name: skillInput.name.trim() }]
            })
            setSkillInput({ name: '', icon: '💻', color: 'from-blue-500 to-blue-600' })
        }
    }

    const removeSkill = (name: string) => {
        setFormData({
            ...formData,
            skills: formData.skills.filter(s => s.name !== name)
        })
    }

    if (loading) {
        return <div className="animate-pulse"><div className="h-8 bg-gray-200 rounded w-48 mb-8"></div></div>
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Skills</h1>
                    <p className="text-slate-600">Manage your skill categories</p>
                </div>
                <button onClick={() => { setEditingCategory(null); setFormData(emptyCategory); setShowModal(true) }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Plus className="w-5 h-5" /> Add Category
                </button>
            </div>

            <div className="space-y-4">
                {categories.map((cat) => (
                    <div key={cat._id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <h3 className="font-semibold text-slate-900">{cat.title}</h3>
                                <p className="text-slate-600 text-sm">{cat.description}</p>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => { setEditingCategory(cat); setFormData(cat); setShowModal(true) }}
                                    className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                                    <Edit className="w-5 h-5" />
                                </button>
                                <button onClick={() => handleDelete(cat._id!)}
                                    className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg">
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map(skill => (
                                <span key={skill.name} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                                    {skill.icon} {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b flex items-center justify-between">
                            <h2 className="text-xl font-semibold">{editingCategory ? 'Edit Category' : 'Add Category'}</h2>
                            <button onClick={() => setShowModal(false)} className="p-2 text-slate-400 hover:text-slate-600 rounded-lg">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
                                <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                                <input type="text" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Icon</label>
                                <select value={formData.icon} onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg">
                                    <option value="Code2">Code</option>
                                    <option value="Globe">Web</option>
                                    <option value="Brain">AI/ML</option>
                                    <option value="Cloud">Cloud</option>
                                    <option value="Shield">DevOps</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Skills</label>
                                <div className="flex gap-2 mb-2">
                                    <input type="text" value={skillInput.name} onChange={(e) => setSkillInput({ ...skillInput, name: e.target.value })}
                                        placeholder="Skill name" className="flex-1 px-4 py-2 border border-gray-200 rounded-lg" />
                                    <input type="text" value={skillInput.icon} onChange={(e) => setSkillInput({ ...skillInput, icon: e.target.value })}
                                        placeholder="Emoji" className="w-16 px-2 py-2 border border-gray-200 rounded-lg text-center" />
                                    <button type="button" onClick={addSkill} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200">Add</button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {formData.skills.map(skill => (
                                        <span key={skill.name} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-1">
                                            {skill.icon} {skill.name}
                                            <button type="button" onClick={() => removeSkill(skill.name)} className="hover:text-blue-900"><X className="w-3 h-3" /></button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-end gap-3 pt-4">
                                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg">Cancel</button>
                                <button type="submit" disabled={saving} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50">
                                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                    {saving ? 'Saving...' : 'Save'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
