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

    return (
    <div className="flex flex-col items-center mt-8">
        <div className="w-11/12 border-2 border-red-600 bg-black">
          <div className="flex justify-between items-center bg-black text-white px-2 py-1 border-b-2 border-red-600">
            <span className="select-none font-staatliches">experience.png</span>
            <button className="bg-black px-2 text-white font-staatliches">X</button>
          </div>
          
          <div className="p-8">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-red-600 to-blue-600 rounded-full"></div>
                
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
                    <div className="w-5/12 pr-8 text-right">
                      <div className="bg-gray-900/80 hover:bg-gray-800/90 rounded-lg p-6 shadow-xl hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-red-500/50">
                        <time className="text-xs font-medium text-red-400 mb-2 block">2024 - Present</time>
                        <h3 className="text-xl font-bold text-white mb-1">Information Technology Student</h3>
                        <h4 className="text-red-500 font-medium mb-3">Vilnius University</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Currently studying Information Technology, focusing on web development, programming fundamentals, and network technologies. Exploring full-stack development with modern frameworks.
                        </p>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-black shadow-lg transform transition-all duration-300 hover:scale-125 hover:bg-red-500"></div>
                    </div>
                    <div className="w-5/12"></div>
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
                    <div className="w-5/12 pl-8 text-left">
                      <div className="bg-gray-900/80 hover:bg-gray-800/90 rounded-lg p-6 shadow-xl hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-red-500/50">
                        <time className="text-xs font-medium text-red-400 mb-2 block">2023 - 2024</time>
                        <h3 className="text-xl font-bold text-white mb-1">Frontend Development</h3>
                        <h4 className="text-red-500 font-medium mb-3">Personal Projects</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Built responsive web applications using React, developed portfolio websites, and experimented with modern CSS frameworks and JavaScript libraries.
                        </p>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-black shadow-lg transform transition-all duration-300 hover:scale-125 hover:bg-red-500"></div>
                    </div>
                    <div className="w-5/12"></div>
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
                    <div className="w-5/12 pr-8 text-right">
                      <div className="bg-gray-900/80 hover:bg-gray-800/90 rounded-lg p-6 shadow-xl hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-red-500/50">
                        <time className="text-xs font-medium text-red-400 mb-2 block">2022 - 2023</time>
                        <h3 className="text-xl font-bold text-white mb-1">Programming Foundations</h3>
                        <h4 className="text-red-500 font-medium mb-3">Self-Directed Learning</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Started learning programming with JavaScript, explored backend technologies, and built foundational skills in web development and computer science concepts.
                        </p>
                      </div>
                    </div>
                    <div className="w-2/12 flex justify-center">
                      <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-black shadow-lg transform transition-all duration-300 hover:scale-125 hover:bg-red-500"></div>
                    </div>
                    <div className="w-5/12"></div>
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
