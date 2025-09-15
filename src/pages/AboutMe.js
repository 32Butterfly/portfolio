import { SiJavascript, SiPhp, SiCplusplus, SiMysql, SiPostgresql, SiLaravel, SiAnsible, SiReact, SiGit, SiDocker, SiCisco } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

function AboutMe() {

 return (
    <div className="min-h-screen border-red-600 bg-black flex flex-col">
      <div className="flex justify-between items-center bg-black text-white px-2 py-1 border-2 border-red-600">
        <span className="select-none font-staatliches">tech_stack.png</span>
        <button className="bg-black px-2 text-white font-staatliches">X</button>
      </div>

      <div className="border-2 border-red-600 flex select-none overflow-hidden">
        <div className="flex-1 flex flex-col gap-2 border-red-600  hover:bg-gray-950 transition-colors duration-300 animate-float [animation-delay:0s]">
          <div className="flex flex-col space-y-8">
          <h3 className="text-red-500 font-staatliches text-center text-3xl mt-4">Languages</h3>
          <div className="flex items-center justify-center gap-4 text-white font-staatliches ">
            <SiJavascript className="text-yellow-400" size={58} />
            <span className="w-20 text-left">JavaScript</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-white font-staatliches">
            <SiPhp className="text-blue-500" size={58} />
            <span className="w-20 text-left">PHP</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-white font-staatliches">
            <FaJava className="text-red-500" size={58} />
            <span className="w-20 text-left">Java</span>
          </div>

          <div className="flex items-center justify-center gap-4 text-white font-staatliches">
            <SiCplusplus className="text-blue-600 mb-4" size={58} />
            <span className="w-20 text-left mb-4">C++</span>
          </div>
        </div>
      </div>

        <div className="flex-1 flex flex-col gap-2 hover:bg-gray-950 transition-colors duration-300">
          <div className="flex flex-col space-y-8 animate-float [animation-delay:1s] ">
          <h3 className="text-red-500 font-staatliches text-center text-3xl mt-4">Frameworks/Libraries</h3>
          <div className="flex items-center justify-center gap-2 text-white font-staatliches">
            <SiAnsible className='text-gray-600' size={58} />
            <span className='w-20 text-left'>Ansible</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-white font-staatliches">
            <SiLaravel className='text-red-600' size={58} />
            <span className='w-20 text-left'>Laravel</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-white font-staatliches">
            <SiReact className='text-blue-400' size={58} />
            <span className='w-20 text-left'>React</span>
          </div>
        </div>
      </div>

        <div className="flex-1 flex flex-col gap-2 hover:bg-gray-950 transition-colors duration-300 ">
          <div className='flex flex-col space-y-8 animate-float [animation-delay:2s]'>
            <h3 className="text-red-500 font-staatliches text-center text-3xl mt-4 mb-4">Databases</h3>
            <div className="flex items-center justify-center gap-2 text-white font-staatliches">
              <SiMysql className='text-blue-500' size={58} />
              <span className='w-20 text-left'>MySQL</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white font-staatliches mt-4">
              <SiPostgresql className='text-blue-600' size={58} />
              <span className='w-20 text-left'>Postgresql</span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2 hover:bg-gray-950 transition-colors duration-300">
          <div className='flex flex-col space-y-8 animate-float [animation-delay:3s]'>
            <h3 className="text-red-500 font-staatliches text-center text-3xl mt-4 mb-4">Other</h3>
            <div className="flex items-center justify-center gap-2 text-white font-staatliches">
              <SiGit className='text-red-500' size={58} />
              <span className='w-20 text-left'>Git</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-white font-staatliches">
              <SiDocker className='text-blue-500' size={58} />
              <span className='w-20 text-left'>Docker</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-white font-staatliches">
              <SiCisco className='text-blue-500' size={58} />
              <span className='w-20 text-left'>Cisco Networking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;