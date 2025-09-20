import { useInView } from 'react-intersection-observer';

function AboutMeExperience() {

    // Create intersection observers for each timeline item
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true, // Only trigger once when it comes into view
        threshold: 0.5,    // Trigger when 50% of the element is visible
        rootMargin: '30px' // Start loading 30px before it's actually visible
    });

    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.5,
        rootMargin: '30px'
    });

    const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: true,
        threshold: 0.5,
        rootMargin: '30px'
    });

    const { ref: ref4, inView: inView4 } = useInView({
        triggerOnce: true,
        threshold: 0.5,
        rootMargin: '30px'
    });

    return (
    <div className="flex flex-col items-center mt-8">
        <div className="w-10/12 border-2 border-red-600 bg-black">
          <div className="flex justify-between items-center bg-black text-white px-2 py-1 border-b-2 border-red-600">
            <span className="select-none font-staatliches">experience.png</span>
            <button className="bg-black px-2 text-white font-staatliches">X</button>
          </div>
          
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-red-600 rounded-full"></div>
                
                <div className="space-y-12">
                    <div 
                        ref={ref1}
                        className={`flex items-center flex-row transition-all duration-700 ${
                            inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ 
                            transitionDelay: inView1 ? '200ms' : '0ms'
                        }}
                    >
                    <div className="w-5/12 text-right ">
                      <div className="bg-gray-900/80 hover:bg-gray-800/90 rounded-lg p-6 shadow-xl hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-red-500/50">
                        <div className="mb-4">
                          <time className="text-xs font-medium text-red-400 bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30">2023 September-2024 June</time>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">Information Technology 1st year</h3>
                        <h4 className="text-red-500 font-medium mb-3">Vilnius University</h4>
                        <p className="text-gray-300 text-sm leading-relaxed text-left">
                          The start of university where I studied the following subjects:
                          <ul className="list-disc list-inside mt-2">
                            <li>Programming Fundamentals</li>
                            <li>Mathematics</li>
                            <li>Computer Architecture RISC</li>
                            <li>Data structures</li>
                            <li>Object-oriented programming</li>
                            <li>UNIX operating systems: learning to work with linux and bash scripting</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-black shadow-lg transform transition-all duration-300 hover:scale-125 hover:bg-red-500"></div>
                    </div>
                  </div>

                  <div                         
                    ref={ref2}
                    className={`flex items-center flex-row-reverse transition-all duration-700 ${
                        inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ 
                        transitionDelay: inView2 ? '200ms' : '0ms'
                    }}
                  >
                    <div className="w-5/12 text-right">
                      <div className="bg-gray-900/80 hover:bg-gray-800/90 rounded-lg p-6 shadow-xl hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-red-500/50">
                        <div className="mb-4">
                          <time className="text-xs font-medium text-red-400 bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30">2024 June - 2025 March</time>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">Working as Information Technology Services Specialist</h3>
                        <h4 className="text-red-500 font-medium mb-3">AB "ORLEN Lietuva"</h4>
                        <p className="text-gray-300 text-sm leading-relaxed text-left">
                          I was trusted with managing a large-scale data migration project involving over 200,000 files. I
                          transferred data from an outdated database to a new SharePoint 2010 system, ensuring accurate
                          organization, data integrity, and resolving inconsistencies. I configured data views using filters,
                          validated internal links, and set user permissions to maintain appropriate access levels.
                          <br/><br/> Additionally, I wrote detailed internal documentation for a company internal website, creating
                          a step-by-step guide to help onboard new staff. This improved the site's usability and served as a
                          long-term resource for employee training and support.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs border border-green-500/30">Data Migration</span>
                          <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs border border-blue-500/30">SharePoint</span>
                          <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs border border-purple-500/30">Documentation</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-black shadow-lg transform transition-all duration-300 hover:scale-125 hover:bg-red-500"></div>
                    </div>
                  </div>

                  <div
                    ref={ref3}
                    className={`flex items-center flex-row transition-all duration-700 ${
                        inView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ 
                        transitionDelay: inView3 ? '200ms' : '0ms'
                    }}
                  >
                    <div className="w-5/12 text-right">
                      <div className="bg-gray-900/80 hover:bg-gray-800/90 rounded-lg p-6 shadow-xl hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-red-500/50">
                        <div className="mb-4">
                          <time className="text-xs font-medium text-red-400 bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30">2024 September - 2025 June</time>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">Information Technology 2nd year</h3>
                        <h4 className="text-red-500 font-medium mb-3">Vilnius University</h4>
                        <p className="text-gray-300 text-sm leading-relaxed text-left">
                          Second year where I studied the following subjects:
                          <ul className="list-disc list-inside mt-2">
                            <li>Database management systems</li>
                            <li>Software Systems Engineering</li>
                            <li>Virtualization Basics</li>
                            <li>Web Technologies</li>
                            <li>Data analysis, data networks and visualization</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-black shadow-lg transform transition-all duration-300 hover:scale-125 hover:bg-red-500"></div>
                    </div>
                  </div>

                  <div
                    ref={ref4}
                    className={`flex items-center flex-row-reverse transition-all duration-700 ${
                        inView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ 
                        transitionDelay: inView4 ? '200ms' : '0ms'
                    }}
                  >
                    <div className="w-5/12 text-right">
                      <div className="bg-gray-900/80 hover:bg-gray-800/90 rounded-lg p-6 shadow-xl hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-red-500/50">
                        <div className="mb-4">
                          <time className="text-xs font-medium text-red-400 bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30">2025 September - Currently</time>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">Information Technology 3rd year</h3>
                        <h4 className="text-red-500 font-medium mb-3">Vilnius University</h4>
                        <p className="text-gray-300 text-sm leading-relaxed text-left">
                          Currently am studying:
                          <ul className="list-disc list-inside mt-2">
                            <li>Cisco Networking</li>
                            <li>Blockchain programming</li>
                            <li>Cyber Security and Data Protection</li>
                            <li>React on my own :)</li>
                          </ul>
                        </p>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-black shadow-lg transform transition-all duration-300 hover:scale-125 hover:bg-red-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutMeExperience;