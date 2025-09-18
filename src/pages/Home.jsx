import TypeWriterAnimation from '../components/TypeWriterAnimation';
import Image from '../Photo.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono grid grid-cols-2 gap-2 p-2">
        <div className="border-2 border-red-600 flex flex-col animate-flyInLeft">
          <div className="flex justify-between items-center bg-black text-white px-2 py-1 border-2 border-red-600">
            <span className="select-none font-staatliches">Picture.jpg</span>
            <button className="bg-black px-2 text-white font-staatliches">
              X
            </button>
          </div>

        <div className="border-2 border-red-600 p-2 flex items-center justify-center">
          <img
            src={Image}
            alt="Spider Lily"
            className="w-full max-w-full h-auto object-cover z-20 md:h-screen md:w-auto"
          />
        </div>
      </div>
      
      <div className="flex flex-col gap-2 animate-flyInRight">
        <div className="border-2 border-red-600 flex flex-col">
          <div className="flex justify-between items-center bg-black text-white px-2 py-1 border-2 border-red-600">
            <span className="select-none font-staatliches">Introduction_information.txt</span>
            <button className="bg-black px-2 text-white font-staatliches">
              X
            </button>
          </div>
        <div className="border-2 border-red-600 p-4">
          <h1 className="text-4xl md:text-5xl font-bold select-none">
            Hi, I'm <span className="text-red-500">Evaldas</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl select-none leading-relaxed">
            <TypeWriterAnimation />
            I study in{' '}
            <a
              href="https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/informacines-technologijos"
              className="text-indigo-400 underline hover:text-indigo-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Information Technology
            </a>{' '}at Vilnius University. 
            <p className='mt-4'>
              I’m still exploring and experimenting with different areas in tech, but I’m interested in web programming and enjoy experimenting with how websites are built.
            </p>
            <p className='mt-4'>
              For more details about my skills, experience, and interests, check the <span className="text-indigo-400 font-semibold">About Me</span> section in the navigation bar.
            </p>

            <p className="text-gray-300 select-none text-center mt-8">You can find and contact me on:</p>
            <div className="flex gap-6 text-gray-300 justify-center mt-4">
              <a href="https://github.com/32Butterfly" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors text-4xl">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/evaldasdmi" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors text-4xl">
                <FaLinkedin />
              </a>
            </div>
          </p>
        </div>
      </div>

      <div className="border-2 border-red-600 flex flex-col">
        <div className="flex justify-between items-center bg-black text-white px-2 py-1 border-2 border-red-600">
          <span className="select-none font-staatliches">Personal_info.txt</span>
          <button className="bg-black px-2 text-white font-staatliches">X</button>
        </div>
        <div className="border-2 border-red-600 p-4">
          <ul className="space-y-2 text-gray-300 leading-relaxed select-none">
            <li><span className="font-semibold text-white">From:</span> Lithuania</li>
            <li><span className="font-semibold text-white">Field:</span> Information Technology (IT)</li>
            <li><span className="font-semibold text-white">Year:</span> 3rd-year Student (5th semester)</li>
            <li><span className="font-semibold text-white">Interests:</span> Programming, Web Development, Networking</li>
          </ul>
        </div>
      </div>

      <div className=" mt-4 p-2 flex justify-end bg-black">
        <button onClick={() => window.location.href = "/#aboutme"} className="bg-red-600 hover:bg-red-700 text-white font-staatliches px-12 py-3 text-lg transition-colors">
          Learn More <span className="animate-bounceRight inline-block text-2xl relative will-change-transform">→</span>
        </button>
      </div>

    </div>
  </div>
  );
}

export default Home;