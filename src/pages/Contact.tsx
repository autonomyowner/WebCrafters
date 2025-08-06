import { useState } from 'react'
import { 
  Phone, 
  MapPin, 
  Send,
  Clock,
  Award,
  Facebook
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectDescription: '',
    budget: '',
    timeline: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Azeedine Zellag',
      value: '0797339451',
      link: 'tel:+213797339451'
    },
    {
      icon: Phone,
      title: 'Belkasm Islam',
      value: '0676610457',
      link: 'tel:+213676610457'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Ben Aknoun, Algeria',
      link: '#'
    },
    {
      icon: Facebook,
      title: 'Facebook',
      value: 'WebCrafters Algeria',
      link: 'https://www.facebook.com/profile.php?id=61578739567649'
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="min-h-screen py-32 lg:py-40 relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/55.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100%'
          }}
        />
        
        <div className="container relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gray-600/20 text-gray-400 text-sm font-medium tracking-wider uppercase mb-8">
                Get In Touch
              </span>
            </div>
            

            <p className="text-lead max-w-3xl mx-auto text-gray-100">
              Ready to transform your digital presence? Get in touch and let's discuss your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-12">
                Tell Us About Your Project
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-800/30 rounded-lg text-white placeholder-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-800/30 rounded-lg text-white placeholder-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-3">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-800/30 rounded-lg text-white placeholder-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-200 mb-3">
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-800/30 rounded-lg text-white placeholder-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
                    placeholder="Brief description of your project"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-200 mb-3">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-800/30 rounded-lg text-white focus:border-gray-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-200 mb-3">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-800/30 rounded-lg text-white focus:border-gray-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-months">1-2 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-months-plus">6+ months</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-3">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-800/30 rounded-lg text-white placeholder-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
                    placeholder="Any additional information about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl border-2 border-gray-500/30 shadow-lg mx-auto"
                >
                  <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-16">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Ready to start your project? We'd love to hear from you. 
                  Send us a message and we'll respond within 24 hours.
                </p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center space-x-6 p-6 bg-slate-800/50 border border-gray-800/30 rounded-2xl hover:bg-slate-800/70 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gray-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-8 h-8 text-gray-400" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-white mb-2 text-lg">{info.title}</h3>
                      <p className="text-gray-200 break-all">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mx-8 my-16"></div>

      {/* Additional Info Section */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-24">
            <h2 className="mb-12 text-white">
              Why Choose WebCrafters?
            </h2>
            <p className="text-lead max-w-3xl mx-auto text-gray-100">
              We combine cutting-edge technology with proven strategies to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Award className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Free Consultation
              </h3>
              <p className="text-gray-200 leading-relaxed">
                Get a comprehensive consultation to discuss your project requirements and receive a detailed proposal.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Clock className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Quick Response
              </h3>
              <p className="text-gray-200 leading-relaxed">
                We respond to all inquiries within 24 hours and provide regular updates throughout the project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <MapPin className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-6">
                Ongoing Support
              </h3>
              <p className="text-gray-200 leading-relaxed">
                We provide comprehensive support and maintenance to ensure your website continues to perform optimally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact 