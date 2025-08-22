'use client'

import { Calendar, Award, Building, Users, Trophy } from 'lucide-react'

const internships = [
  {
    id: 1,
    title: "Artificial Intelligence and Data Analytics Intern",
    organizations: ["AICTE", "Shell India Markets Private Limited", "Edunet Foundation"],
    program: "Skills4Future Program",
    duration: "15th July 2025 to 16th August 2025",
    type: "4-week Virtual Internship",
    focus: "AI, Data Analytics & Green Skills",
    studentId: "STU6145a5519ddcb1631954257",
    description: "Focused on Artificial Intelligence and Data Analytics with an emphasis on Green Skills as part of the collaborative Skills4Future program.",
    icon: Building,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Web Development Intern",
    organizations: ["HEAL BHARAT", "CODELEVATE"],
    duration: "Completed: 20th February 2025",
    type: "One-month Internship",
    focus: "Web Development",
    achievement: "Best Achievements Award",
    certificateId: "9N43DMJ1KX",
    studentId: "RT230094",
    description: "One-month intensive web development program where I was recognized as the intern with the best achievements.",
    icon: Trophy,
    color: "from-green-500 to-emerald-500"
  }
]

export default function Internships() {
  return (
    <section 
      className="py-24 section-bg-white"
      id="internships"
    >
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-heading">
              Internships
            </h2>
            <div className="section-divider mx-auto mt-4" />
            <p className="section-subheading mt-6">
              Professional experience through strategic internship programs
            </p>
          </div>

          {/* Internships Grid */}
          <div className="grid gap-8 md:gap-12">
            {internships.map((internship) => {
              const IconComponent = internship.icon
              return (
                <div
                  key={internship.id}
                  className="professional-card rounded-2xl p-8"
                >
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    {/* Icon and Title Section */}
                    <div className="lg:col-span-8">
                      <div className="flex items-start gap-6 mb-6">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${internship.color} flex items-center justify-center`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            {internship.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-3">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm font-medium">{internship.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              <span className="text-sm font-medium">{internship.type}</span>
                            </div>
                          </div>
                          <p className="text-slate-700 leading-relaxed">
                            {internship.description}
                          </p>
                        </div>
                      </div>

                      {/* Organizations */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">
                          Organizations
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.organizations.map((org, orgIndex) => (
                            <span
                              key={orgIndex}
                              className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                            >
                              {org}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        {internship.program && (
                          <div>
                            <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                              Program
                            </h5>
                            <p className="text-slate-700 font-medium">{internship.program}</p>
                          </div>
                        )}
                        {internship.focus && (
                          <div>
                            <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                              Focus Area
                            </h5>
                            <p className="text-slate-700 font-medium">{internship.focus}</p>
                          </div>
                        )}
                        {internship.achievement && (
                          <div>
                            <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                              Achievement
                            </h5>
                            <p className="text-green-700 font-semibold flex items-center gap-2">
                              <Award className="w-4 h-4" />
                              {internship.achievement}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Details Sidebar */}
                    <div className="lg:col-span-4">
                      <div className="bg-slate-50 rounded-xl p-6 space-y-4">
                        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">
                          Details
                        </h4>
                        
                        {internship.studentId && (
                          <div>
                            <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                              Student ID
                            </h5>
                            <p className="text-slate-700 font-mono text-sm">{internship.studentId}</p>
                          </div>
                        )}
                        
                        {internship.certificateId && (
                          <div>
                            <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                              Certificate ID
                            </h5>
                            <p className="text-slate-700 font-mono text-sm">{internship.certificateId}</p>
                          </div>
                        )}

                        {internship.achievement && (
                          <div className="pt-4 border-t border-slate-200">
                            <div className="flex items-center gap-2 text-green-600">
                              <Trophy className="w-5 h-5" />
                              <span className="font-semibold text-sm">Top Performer</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
