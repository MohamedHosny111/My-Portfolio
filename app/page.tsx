'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  BarChart3, 
  GraduationCap, 
  Award, 
  MessageSquare, 
  Send 
} from 'lucide-react';

const portfolioData = {
  personalInfo: {
    name: "Mohamed Hosny",
    title: "Junior Data Analyst",
    bio: "Passionate Data Analyst skilled in Excel, Power Query, Power BI, and SQL. Transforming complex data into actionable business insights and interactive dashboards.",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/mohamed-hosny-data/",
      email: "mohamed.hosny.fawzy06@gmail.com",
      phone: "01098384483",
      location: "10th of Ramadan, Egypt",
      cv: "https://drive.google.com/file/d/1lJrq5xCMkltDbnAx-lh6NPxEVcYS4YPq/view?usp=sharing"
    }
  },
  skills: [
    "Data Cleaning & Preprocessing",
    "Microsoft Excel & Pivot Tables",
    "Power Query & Data Transformation",
    "Power BI & DAX Modeling",
    "SQL Database Querying",
    "Python Basics for Data Analysis"
  ],
  education: [
    {
      degree: "Bachelor's Degree in Commerce",
      institution: "Ain Shams University (جامعة عين شمس)",
      period: "Second-Year Student"
    }
  ],
  certifications: [
    {
      title: "Junior Data Analyst Training Program",
      issuer: "Digital Egypt Pioneers Initiative (DEPI - مبادرة رواد مصر الرقمية)",
      description: "Comprehensive hands-on training track focused on data analysis methodologies, tools, and business intelligence."
    },
    {
      title: "AI for You Certification",
      issuer: "Oracle MyLearn",
      description: "Completed professional assessment covering core artificial intelligence concepts and modern applications."
    }
  ],
  projects: [
    {
      title: "Superstore Sales & Profit Performance Dashboard",
      category: "Excel, Power Query, Dynamic Pivot Tables",
      description: "Cleaned and transformed multi-year sales data using Power Query. Designed an interactive executive dashboard that allows stakeholders to filter performance by region, customer segment, and product category. Key result: Identified low-margin product categories and highlighted top-performing sales regions.",
      image: "/images/superstore-dashboard.png",
      link: "https://docs.google.com/spreadsheets/d/1Z39m5s7_MLrv2H4MHCUN3DYWwsXY4XN7/edit?usp=drive_link&ouid=106832592273789903882&rtpof=true&sd=true"
    }
  ],
  testimonial: {
    quote: "Mohamed transformed our raw sales spreadsheet into a very clear and easy-to-read Excel dashboard. It helped us immediately see which products were most profitable.",
    author: "— E-commerce Store Owner (Freelance Practice Case)"
  }
};

export default function Home() {
  const { personalInfo, skills, education, certifications, projects, testimonial } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.socialLinks.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans px-6 py-12 md:px-20 selection:bg-cyan-500 selection:text-slate-950">
      {/* Header Section */}
      <section className="max-w-4xl mx-auto py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Data Analyst Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 text-white">{personalInfo.name}</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-400 mt-2">{personalInfo.title}</h2>
          <p className="mt-6 text-slate-300 text-lg leading-relaxed max-w-2xl">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 transition text-sm flex items-center gap-2">
              🌐 LinkedIn
            </a>
            <a href={`mailto:${personalInfo.socialLinks.email}`} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 transition text-sm flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" /> Email
            </a>
            <a href={`tel:${personalInfo.socialLinks.phone}`} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 transition text-sm flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" /> {personalInfo.socialLinks.phone}
            </a>
            <a href={personalInfo.socialLinks.cv} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-white transition text-sm flex items-center gap-2 font-medium">
              <FileText className="w-4 h-4" /> View CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto py-12 border-t border-slate-800">
        <h3 className="text-2xl font-bold mb-6 text-cyan-400">Skills & Toolset</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-slate-300 font-medium flex items-center gap-3 hover:border-cyan-500/50 transition"
            >
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="max-w-4xl mx-auto py-12 border-t border-slate-800">
        <h3 className="text-2xl font-bold mb-6 text-cyan-400">Selected Project</h3>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition flex flex-col md:flex-row group"
            >
              {project.image && (
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden bg-slate-800">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
              )}
              <div className={`p-6 ${project.image ? 'md:w-2/3' : 'w-full'} flex flex-col justify-between`}>
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
                      {project.category}
                    </span>
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition p-1 bg-slate-800 rounded-lg">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <h4 className="text-xl font-bold text-white mt-3 group-hover:text-cyan-300 transition">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 mt-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                {project.link !== "#" && (
                  <div className="mt-6">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition">
                      View Project <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications & Training Section */}
      <section className="max-w-4xl mx-auto py-12 border-t border-slate-800">
        <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
          <Award className="w-6 h-6" /> Certifications & Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition flex flex-col justify-between"
            >
              <div>
                <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                <p className="text-cyan-400 text-sm font-medium mt-1">{cert.issuer}</p>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-4xl mx-auto py-12 border-t border-slate-800">
        <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
          <MessageSquare className="w-6 h-6" /> Practice Case Feedback
        </h3>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative">
          <p className="text-slate-300 italic text-base leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <p className="text-cyan-400 text-sm font-semibold mt-4">
            {testimonial.author}
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-4xl mx-auto py-12 border-t border-slate-800">
        <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
          <GraduationCap className="w-6 h-6" /> Education
        </h3>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
              </div>
              <span className="mt-2 sm:mt-0 text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto py-16 border-t border-slate-800">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white">Let&apos;s <span className="text-cyan-400">Connect</span></h3>
          <p className="text-slate-400 mt-2 text-sm md:text-base">Have a question, dashboard request, or data project in mind? Reach out anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold text-white">Let&apos;s talk data.</h4>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                I am open to entry-level Data Analyst roles, internships, freelance dashboard projects, and collaboration.
              </p>

              <div className="mt-8 space-y-4">
                <div className="bg-slate-950/60 border border-slate-800/60 p-4 rounded-xl">
                  <span className="text-xs text-slate-500 uppercase tracking-wider block font-mono">Email Address</span>
                  <a href={`mailto:${personalInfo.socialLinks.email}`} className="text-slate-200 text-sm font-medium hover:text-cyan-400 transition mt-1 block">
                    {personalInfo.socialLinks.email}
                  </a>
                </div>

                <div className="bg-slate-950/60 border border-slate-800/60 p-4 rounded-xl">
                  <span className="text-xs text-slate-500 uppercase tracking-wider block font-mono">LinkedIn Profile</span>
                  <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-200 text-sm font-medium hover:text-cyan-400 transition mt-1 block truncate">
                    {personalInfo.socialLinks.linkedin}
                  </a>
                </div>

                <div className="bg-slate-950/60 border border-slate-800/60 p-4 rounded-xl">
                  <span className="text-xs text-slate-500 uppercase tracking-wider block font-mono">Location</span>
                  <span className="text-slate-200 text-sm font-medium mt-1 block flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" /> {personalInfo.socialLinks.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. John Doe" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. name@company.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Subject</label>
                <input 
                  type="text" 
                  required
                  placeholder="Data Analysis / Dashboard Project" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Tell me about your dataset or project requirements..." 
                  value={formData.message}
                  onChange={(e) => setformData({...formData, message: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Mohamed Hosny. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
