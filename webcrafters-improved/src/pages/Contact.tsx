import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-50 to-purple-100 bg-clip-text text-transparent mb-6">
              Let's Build Something Amazing
            </h1>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge digital solutions? 
              Get in touch for a free consultation and project estimate.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-purple-800/30 rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Start Your Project
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-purple-800/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-purple-800/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-purple-200 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-purple-800/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-purple-200 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-purple-800/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                                          <label htmlFor="projectType" className="block text-sm font-medium text-purple-200 mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-purple-800/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      >
                        <option value="">Select project type</option>
                        <option value="ecommerce">E-commerce Website</option>
                        <option value="webapp">Web Application</option>
                        <option value="corporate">Corporate Website</option>
                        <option value="mobile">Mobile App</option>
                        <option value="api">API Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-purple-200 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-purple-800/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                      >
                        <option value="">Select budget range</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k+">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-purple-200 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-purple-800/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="1-3months">1-3 months</option>
                      <option value="3-6months">3-6 months</option>
                      <option value="6-12months">6-12 months</option>
                      <option value="12months+">12+ months</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-purple-200 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700 border border-purple-800/30 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-purple-300"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg text-lg font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-purple-200 mb-8">
                    Ready to discuss your project? We're here to help you bring your vision to life. 
                    Contact us for a free consultation and project estimate.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                      <p className="text-purple-200">+48 668 354 779</p>
                      <p className="text-sm text-purple-300">Available Mon-Fri, 9AM-6PM CET</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-purple-200">contact@webcrafters.pl</p>
                      <p className="text-sm text-purple-300">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Office</h3>
                      <p className="text-purple-200">ul. Niedźwiedzia 19/1</p>
                      <p className="text-purple-200">02-737 Warszawa, Poland</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700/50 border border-purple-800/30 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-white mb-4">Why Choose WebCrafters?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-purple-200">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      9+ years of experience in web development
                    </li>
                    <li className="flex items-center text-sm text-purple-200">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      500+ successful projects delivered
                    </li>
                    <li className="flex items-center text-sm text-purple-200">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Free consultation and project estimate
                    </li>
                    <li className="flex items-center text-sm text-purple-200">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Ongoing support and maintenance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div className="border-b border-purple-800/30 pb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  How long does a typical project take?
                </h3>
                <p className="text-purple-200">
                  Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, 
                  while complex web applications can take 3-6 months. We'll provide a detailed timeline during our consultation.
                </p>
              </div>

              <div className="border-b border-purple-800/30 pb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What is your development process?
                </h3>
                <p className="text-purple-200">
                  We follow a proven 6-step process: Discovery & Strategy, Design & Prototyping, Development, 
                  Testing & QA, Launch & Support, and Growth & Optimization. Each phase includes regular communication and feedback.
                </p>
              </div>

              <div className="border-b border-purple-800/30 pb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Do you provide ongoing support?
                </h3>
                <p className="text-purple-200">
                  Yes, we offer comprehensive ongoing support including maintenance, updates, security audits, 
                  hosting management, and feature enhancements to keep your solution performing optimally.
                </p>
              </div>

              <div className="border-b border-purple-800/30 pb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What technologies do you use?
                </h3>
                <p className="text-purple-200">
                  We use cutting-edge technologies including PHP, Laravel, React, Vue.js, Angular, Symfony, 
                  and more. We choose the best technology stack for each project based on requirements and goals.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  How do you ensure project quality?
                </h3>
                <p className="text-purple-200">
                  We maintain high quality through rigorous testing, code reviews, performance optimization, 
                  security best practices, and continuous communication with clients throughout the development process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default Contact; 