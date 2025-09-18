import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Users, Lightbulb, BarChart, DollarSign, Heart, TrendingUp,  LightbulbIcon, ToolCase, MessageSquare } from 'lucide-react';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  });

  // --- DATA ---
  const jobOpenings = [
    { id: 1, title: "CNC Machine Operator", department: "Production", type: "Full-time", location: "Detroit, MI", experience: "Mid-level", description: "Operate and maintain CNC router machines, ensuring precision manufacturing of components." },
    { id: 2, title: "Mechanical Engineer", department: "Engineering", type: "Full-time", location: "Chicago, IL", experience: "Senior", description: "Design and improve CNC router systems, working on mechanical components and systems." },
    { id: 3, title: "Software Developer", department: "R&D", type: "Full-time", location: "Remote", experience: "Mid-level", description: "Develop control software for our CNC router machines and interface applications." },
    { id: 4, title: "Technical Support Specialist", department: "Customer Service", type: "Full-time", location: "Cleveland, OH", experience: "Entry-level", description: "Provide technical support to customers using our CNC router machines." },
    { id: 5, title: "Sales Representative", department: "Sales", type: "Full-time", location: "Multiple Locations", experience: "Mid-level", description: "Sell our CNC router machines to businesses in manufacturing and woodworking industries." },
    { id: 6, title: "Production Intern", department: "Production", type: "Internship", location: "Detroit, MI", experience: "Intern", description: "Learn about CNC machining processes and assist our production team." }
  ];

  const benefits = [
    { title: "Competitive Salary", desc: "We offer industry-leading compensation packages", icon: <DollarSign className="w-8 h-8 mx-auto text-blue-500" /> },
    { title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision insurance", icon: <Heart className="w-8 h-8 mx-auto text-red-500" /> },
    { title: "Career Growth", desc: "Opportunities for professional development and advancement", icon: <TrendingUp className="w-8 h-8 mx-auto text-green-500" /> },
    { title: "Modern Tools", desc: "Work with state-of-the-art equipment and technology", icon: <ToolCase className="w-8 h-8 mx-auto text-gray-500" /> }
  ];

  const culturePoints = [
      { title: "Innovation at our Core", desc: "We are relentless in our pursuit of new ideas that drive the industry forward.", icon: <LightbulbIcon className="w-8 h-8 mx-auto text-yellow-500" /> },
      { title: "Collaboration is Key", desc: "We believe the best solutions come from diverse minds working together.", icon: <Users className="w-8 h-8 mx-auto text-purple-500" /> },
      { title: "Meaningful Impact", desc: "The work you do here directly contributes to the success of businesses worldwide.", icon: <BarChart className="w-8 h-8 mx-auto text-indigo-500" /> },
  ];

  const testimonials = [
      { name: "Jessica M.", role: "Senior Engineer", quote: "This is the first place I've worked where my ideas are not only heard but actively encouraged and implemented. The sense of ownership is incredible.", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
      { name: "David L.", role: "CNC Operator", quote: "The training and support are top-notch. I came in with some experience, but I've grown my skills tenfold here. It's a great team environment.", avatar: "https://randomuser.me/api/portraits/men/32.jpg" }
  ];

  // --- LOGIC ---
  const filteredJobs = activeTab === 'all'
    ? jobOpenings
    : jobOpenings.filter(job => job.department === activeTab);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle file upload and API submission here.
    console.log('Form submitted:', formData);
    alert(`Thank you, ${formData.name}! Your application for ${selectedJob.title} has been submitted.`);
    setSelectedJob(null);
    setFormData({ name: '', email: '', phone: '', resume: null, coverLetter: '' });
  };

  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  const jobCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } },
    hover: { scale: 1.03, y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 5px 10px -5px rgba(0,0,0,0.04)", transition: { type: "spring", stiffness: 400, damping: 17 } }
  };

  return (
    <div className="min-h-screen py-2">
      {/* Hero Section */}
      <section className="h-96 max-w-7xl bg-gray-600">
        <img src="https://aavonsteels.jaikvik.in/images/bg%20themes/Career.jpg" className="w-full h-full object-fit"></img>
      </section>

      {/* Benefits Section */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why You'll Love Working With Us
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-blue-500"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Briefcase className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture & Values</h2>
            <p className="max-w-3xl mx-auto text-gray-600 mb-12">
              We're building more than just machines; we're building a community where every member is empowered to do their best work.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {culturePoints.map((point, i) => (
              <motion.div
                key={i}
                className="p-8 text-center"
                variants={itemVariants}
              >
                <div className="mb-4">{point.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-8" style={{ backgroundImage:"url('/assets/image/bg themes/IMG-20250725-WA0014.jpg')" }}>
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Current Openings
          </motion.h2>

          <div className="flex flex-wrap justify-center mb-12 gap-3">
            {['all', 'Production', 'Engineering', 'R&D', 'Sales', 'Customer Service'].map(dept => (
              <motion.button
                key={dept}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-colors duration-300 ${activeTab === dept ? 'bg-blue-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                onClick={() => setActiveTab(dept)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {dept === 'all' ? 'All Departments' : dept}
              </motion.button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredJobs.map(job => (
                <motion.div
                  layout
                  key={job.id}
                  className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600"
                  variants={jobCardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover="hover"
                >
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">{job.department}</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">{job.location}</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">{job.experience}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{job.description}</p>
                  <motion.button
                    className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    onClick={() => setSelectedJob(job)}
                    whileHover={{ x: 5 }}
                  >
                    Apply Now →
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
     
      {/* Testimonials Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Hear From Our Team
            </motion.h2>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                {testimonials.map((testimonial, i) => (
                    <motion.div key={i} className="bg-gray-50 p-6 rounded-xl" variants={itemVariants}>
                        <div className="flex items-start">
                            <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 border-2 border-blue-500"/>
                            <div>
                                <MessageSquare className="w-8 h-8 text-blue-200 mb-2" />
                                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                                <p className="font-bold">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* Apply Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              className="bg-white rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl max-h-[90vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-5 text-white">
                <h2 className="text-2xl font-bold">Apply for {selectedJob.title}</h2>
                <p className="text-blue-100 text-sm mt-1">{selectedJob.department} • {selectedJob.location}</p>
              </div>
             
              <form className="p-6 space-y-4 overflow-y-auto max-h-[calc(90vh-80px)]" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" required placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" required placeholder="your.email@example.com" />
                  </div>
                </div>
               
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" placeholder="(123) 456-7890" />
                </div>
               
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume *</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      {formData.resume ? (
                        <p className="text-sm text-green-600 font-semibold">
                          ✅ {formData.resume.name} selected!
                        </p>
                      ) : (
                        <>
                          <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          <div className="flex text-sm text-gray-600">
                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                              <span>Upload a file</span>
                              <input id="file-upload" name="resume" type="file" className="sr-only" onChange={handleInputChange} accept=".pdf,.doc,.docx" required />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
               
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                  <textarea name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition" rows="4" placeholder="Tell us why you're a great fit for this role..."></textarea>
                </div>
               
                <div className="flex justify-end gap-3 pt-4">
                  <motion.button type="button" onClick={() => setSelectedJob(null)} className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    Cancel
                  </motion.button>
                  <motion.button type="submit" className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-sm" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    Submit Application
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;
