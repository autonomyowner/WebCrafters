import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                WebCrafters
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-cyan-100 mb-4">
                The team behind the digital transformation of your business.
              </p>
              <p className="text-xl text-cyan-200 mb-8 max-w-4xl mx-auto">
                We design, implement, optimize and enhance digital solutions that drive the e-commerce market 
                and transform businesses into digital powerhouses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  Start Your Project
                </button>
                <button className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Comprehensive Digital Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-700/50 border border-cyan-800/30 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">E-commerce Excellence</h3>
                <p className="text-cyan-200 mb-4">
                  From concept to launch, we build powerful online stores that convert visitors into customers.
                </p>
                <ul className="text-sm text-cyan-300 space-y-1">
                  <li>• Custom store development</li>
                  <li>• Payment integration</li>
                  <li>• Inventory management</li>
                  <li>• Analytics & optimization</li>
                </ul>
              </div>

              <div className="bg-slate-700/50 border border-cyan-800/30 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Web Applications</h3>
                <p className="text-cyan-200 mb-4">
                  Scalable, secure, and user-friendly applications that streamline your business operations.
                </p>
                <ul className="text-sm text-cyan-300 space-y-1">
                  <li>• Custom web apps</li>
                  <li>• API development</li>
                  <li>• Database design</li>
                  <li>• Cloud deployment</li>
                </ul>
              </div>

              <div className="bg-slate-700/50 border border-cyan-800/30 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-cyan-600 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Performance & SEO</h3>
                <p className="text-cyan-200 mb-4">
                  Lightning-fast websites that rank high in search engines and provide exceptional user experience.
                </p>
                <ul className="text-sm text-cyan-300 space-y-1">
                  <li>• Speed optimization</li>
                  <li>• SEO implementation</li>
                  <li>• Mobile-first design</li>
                  <li>• Analytics setup</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Proven Development Process
              </h2>
              <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
                We've refined our approach over 9+ years to deliver exceptional results consistently. 
                Every project follows our proven methodology that ensures quality, transparency, and success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Discovery & Strategy</h3>
                <p className="text-cyan-200">
                  We dive deep into your business needs, goals, and target audience to create a comprehensive strategy.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Design & Prototyping</h3>
                <p className="text-cyan-200">
                  Our designers create stunning, user-friendly interfaces that align with your brand and goals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Development</h3>
                <p className="text-cyan-200">
                  Expert developers bring your vision to life using cutting-edge technologies and best practices.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Testing & QA</h3>
                <p className="text-cyan-200">
                  Rigorous testing ensures your solution works flawlessly across all devices and browsers.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">5</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Launch & Support</h3>
                <p className="text-cyan-200">
                  Smooth deployment followed by ongoing support and optimization to keep your solution performing.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">6</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Growth & Optimization</h3>
                <p className="text-cyan-200">
                  Continuous improvement and feature enhancements to keep your business ahead of the competition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-cyan-200 text-center mb-12 max-w-3xl mx-auto">
              We use carefully selected technologies that allow us to scale effectively and guarantee 
              the flexibility required by our partners.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">PHP</span>
                </div>
                <p className="text-sm text-cyan-200">Powering 78% of websites worldwide</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">Laravel</span>
                </div>
                <p className="text-sm text-cyan-200">Robust PHP framework with enduring popularity</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">React</span>
                </div>
                <p className="text-sm text-cyan-200">Facebook's powerful UI library</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">Vue.js</span>
                </div>
                <p className="text-sm text-cyan-200">High-performance JavaScript framework</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">Angular</span>
                </div>
                <p className="text-sm text-cyan-200">Google's comprehensive framework</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-sm">Symfony</span>
                </div>
                <p className="text-sm text-cyan-200">Flexible and fast PHP framework</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900 to-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-200 mb-8">
              Let's discuss how we can help you achieve your digital goals. 
              Get a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Start Free Consultation
              </button>
              <button className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View Our Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  };

  export default Home; 