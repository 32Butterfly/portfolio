import { FaJsSquare, FaLaravel, FaDatabase, FaGit } from 'react-icons/fa';

function AboutMe() {

 return (
    <div className="min-h-screen border-red-600 bg-black flex flex-col">
      <div className="flex justify-between items-center bg-black text-white px-2 py-1 border-2 border-red-600">
        <span className="select-none font-staatliches">tech_stack.png</span>
        <button className="bg-black px-2 text-white font-staatliches">X</button>
      </div>

      <div className="border-2 border-red-600 flex">
        <div className="flex-1 flex flex-col gap-2 border-r-2 border-red-600">
          <h3 className="text-red-500 font-staatliches text-center">Languages</h3>
          <div className="flex items-center justify-center gap-2 text-white">
            <FaJsSquare className="text-yellow-400 w-6 h-6" />
            <span>JavaScript</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-red-500 font-semibold text-center">Frameworks</h3>
          <div className="flex items-center justify-center gap-2 text-white">
            <FaLaravel className="text-red-600 w-6 h-6" />
            <span>Laravel</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-red-500 font-semibold text-center">Databases</h3>
          <div className="flex items-center justify-center gap-2 text-white">
            <FaDatabase className="text-blue-500 w-6 h-6" />
            <span>MySQL</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <h3 className="text-red-500 font-semibold text-center">Other</h3>
          <div className="flex items-center justify-center gap-2 text-white">
            <FaGit className="text-orange-500 w-6 h-6" />
            <span>Git</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;