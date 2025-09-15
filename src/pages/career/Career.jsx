import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const jobOpenings = [
    {
      id: 1,
      title: "CNC Machine Operator",
      department: "Production",
      type: "Full-time",
      location: "Detroit, MI",
      experience: "Mid-level",
      description: "Operate and maintain CNC router machines, ensuring precision manufacturing of components."
    },
    {
      id: 2,
      title: "Mechanical Engineer",
      department: "Engineering",
      type: "Full-time",
      location: "Chicago, IL",
      experience: "Senior",
      description: "Design and improve CNC router systems, working on mechanical components and systems."
    },
    {
      id: 3,
      title: "Software Developer",
      department: "R&D",
      type: "Full-time",
      location: "Remote",
      experience: "Mid-level",
      description: "Develop control software for our CNC router machines and interface applications."
    },
    {
      id: 4,
      title: "Technical Support Specialist",
      department: "Customer Service",
      type: "Full-time",
      location: "Cleveland, OH",
      experience: "Entry-level",
      description: "Provide technical support to customers using our CNC router machines."
    },
    {
      id: 5,
      title: "Sales Representative",
      department: "Sales",
      type: "Full-time",
      location: "Multiple Locations",
      experience: "Mid-level",
      description: "Sell our CNC router machines to businesses in manufacturing and woodworking industries."
    },
    {
      id: 6,
      title: "Production Intern",
      department: "Production",
      type: "Internship",
      location: "Detroit, MI",
      experience: "Intern",
      description: "Learn about CNC machining processes and assist our production team."
    }
  ];

  const filteredJobs = activeTab === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const jobCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
    hover: {
      scale: 1.02,
      y: -5,
      rotateZ: 0.5,
      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 5px 10px -5px rgba(0,0,0,0.04)",
      transition: { type: "spring", stiffness: 400, damping: 17 }
    }
  };

  const filterButtonVariants = {
    rest: { scale: 1, backgroundColor: "#e5e7eb", color: "#374151" },
    active: { scale: 1.05, backgroundColor: "#2563eb", color: "#fff" },
    hover: { scale: 1.03, backgroundColor: "#d1d5db" }
  };

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
    // Form submission logic here
    console.log('Form submitted:', formData);
    setSelectedJob(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-gray-900 text-white py-20">
        
      </section>

      {/* Benefits Section */}
      <section className="py-6" style={{ backgroundImage:"url('/assets/image/bg themes/IMG-20250725-WA0014.jpg')" }}>
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Why Work With Us
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { title: "Competitive Salary", desc: "We offer industry-leading compensation packages", icon: "💵" },
              { title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision insurance", icon: "❤️" },
              { title: "Career Growth", desc: "Opportunities for professional development and advancement", icon: "📈" },
              { title: "Modern Tools", desc: "Work with state-of-the-art equipment and technology", icon: "🔧" }
            ].map((benefit, i) => (
              <motion.div 
                key={i} 
                className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -10 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-6" style={{ backgroundImage:"url('/assets/image/bg themes/IMG-20250725-WA0014.jpg')" }}>
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl font-bold text-center mb-4">
            Open Positions
          </motion.h2>

          {/* Department Filter */}
          <motion.div className="flex flex-wrap justify-center mb-10 gap-2">
            {['all', 'Production', 'Engineering', 'R&D', 'Sales', 'Customer Service'].map(dept => (
              <motion.button
                key={dept}
                className={`px-4 py-2 rounded-full ${activeTab === dept ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setActiveTab(dept)}
                variants={filterButtonVariants}
                initial="rest"
                animate={activeTab === dept ? "active" : "rest"}
                whileHover="hover"
              >
                {dept === 'all' ? 'All Departments' : dept}
              </motion.button>
            ))}
          </motion.div>

          {/* Jobs List */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {filteredJobs.map(job => (
                <motion.div 
                  key={job.id} 
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 relative"
                  variants={jobCardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  exit="hidden"
                >
                  <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">{job.department}</span>
                    <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">{job.type}</span>
                    <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full">{job.location}</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">{job.experience}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <motion.button 
                    className="text-blue-600 font-semibold flex items-center gap-1"
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedJob(job)}
                  >
                    Apply Now →
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
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
              className="bg-white rounded-xl w-full max-w-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-5 text-white">
                <h2 className="text-xl font-bold">Apply for {selectedJob.title}</h2>
                <p className="text-blue-100 text-sm mt-1">{selectedJob.department} • {selectedJob.location}</p>
              </div>
              
              {/* Form */}
              <form className="p-5 space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      required 
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      required 
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume *</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition">
                      <div className="flex flex-col items-center justify-center pt-4 pb-5">
                        <svg className="w-6 h-6 mb-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                        <p className="mb-1 text-xs text-gray-500">
                          <span className="font-medium">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-400">PDF, DOC, DOCX (MAX. 5MB)</p>
                      </div>
                      <input 
                        type="file" 
                        name="resume"
                        onChange={handleInputChange}
                        className="hidden" 
                        accept=".pdf,.doc,.docx"
                        required
                      />
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                  <textarea 
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    rows="3" 
                    placeholder="Tell us why you're interested in this position..."
                  ></textarea>
                </div>
                
                <div className="flex justify-end gap-3 pt-2">
                  <motion.button 
                    type="button" 
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button 
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
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