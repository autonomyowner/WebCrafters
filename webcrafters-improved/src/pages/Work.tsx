import React from 'react';

const Work: React.FC = () => {
  // NOTE: sample projects removed (unused in this view)

  const categories = ["All", "Web Application", "E-commerce", "Enterprise Application"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-green-200 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence with innovative 
              solutions that drive growth and deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 text-green-300 hover:text-white rounded-lg font-medium transition-colors border border-green-800/30"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Video Showcase Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                See Our Work in Action
              </h2>
              <p className="text-xl text-green-200 max-w-3xl mx-auto">
                Watch how we transformed Aux-the-Barber's digital presence with a stunning, 
                high-performance website that drives real business results.
              </p>
            </div>
            
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-green-500 rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-400 rounded-full opacity-30"></div>
              <div className="absolute top-1/4 -right-6 w-6 h-6 bg-green-300 rounded-full opacity-20"></div>
              
              {/* Video Background Card */}
              <div className="relative max-w-5xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* Background Video */}
                  <div className="relative h-96 md:h-[500px] overflow-hidden">
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/1.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white z-10">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to action below video */}
              <div className="text-center mt-12">
                <p className="text-lg text-green-200 mb-6">
                  This is just one example of our work. Every project we create is crafted with the same 
                  attention to detail and commitment to excellence.
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SylvesterMkali Video Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Premium Digital Solutions
              </h2>
              <p className="text-xl text-green-200 max-w-3xl mx-auto">
                Experience the transformation of SylvesterMkali's digital presence with our 
                cutting-edge web development expertise.
              </p>
            </div>
            
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400 rounded-full opacity-30"></div>
              <div className="absolute top-1/4 -right-6 w-6 h-6 bg-blue-300 rounded-full opacity-20"></div>
              
              {/* Video Background Card */}
              <div className="relative max-w-5xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* Background Video */}
                  <div className="relative h-96 md:h-[500px] overflow-hidden">
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white z-10">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to action below video */}
              <div className="text-center mt-12">
                <p className="text-lg text-green-200 mb-6">
                  SylvesterMkali's project showcases our ability to create powerful, 
                  scalable solutions that drive business growth and user engagement.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PKatzDesign Video Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Creative Excellence
              </h2>
              <p className="text-xl text-green-200 max-w-3xl mx-auto">
                Discover how we brought PKatzDesign's creative vision to life with a 
                stunning, high-performance website that captivates and converts.
              </p>
            </div>
            
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500 rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-400 rounded-full opacity-30"></div>
              <div className="absolute top-1/4 -right-6 w-6 h-6 bg-purple-300 rounded-full opacity-20"></div>
              
              {/* Video Background Card */}
              <div className="relative max-w-5xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* Background Video */}
                  <div className="relative h-96 md:h-[500px] overflow-hidden">
                    <video
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src="/3.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white z-10">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to action below video */}
              <div className="text-center mt-12">
                <p className="text-lg text-green-200 mb-6">
                  PKatzDesign's project demonstrates our expertise in creating visually stunning 
                  and highly functional websites that elevate brand presence and drive results.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-green-200 max-w-3xl mx-auto">
                Over 9 years of delivering exceptional results for businesses worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-green-200">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-green-200">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99%</div>
                <div className="text-green-200">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-green-200">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900 to-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-green-200 mb-8">
              Let's discuss how we can help you achieve your digital goals. 
              Get a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Start Free Consultation
              </button>
              <button className="border-2 border-green-500 text-green-400 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Contact Our Team
              </button>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Work; 