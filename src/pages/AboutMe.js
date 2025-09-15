import { SiJavascript, SiPhp, SiCplusplus, SiMysql, SiPostgresql, SiLaravel, SiAnsible, SiReact, SiGit, SiDocker, SiCisco } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

function AboutMe() {

  const languages = [
    { icon: <SiJavascript className="text-yellow-400" size={58} />, name: "JavaScript" },
    { icon: <SiPhp className="text-blue-500" size={58} />, name: "PHP" },
    { icon: <FaJava className="text-red-500" size={58} />, name: "Java" },
    { icon: <SiCplusplus className="text-blue-600" size={58} />, name: "C++" },
  ];

  const frameworks = [
    { name: "Ansible", icon: <SiAnsible className="text-gray-600" size={58} /> },
    { name: "Laravel", icon: <SiLaravel className="text-red-600" size={58} /> },
    { name: "React", icon: <SiReact className="text-blue-400" size={58} /> },
  ];

  const databases = [
    { name: "MySQL", icon: <SiMysql className="text-blue-500" size={58} /> },
    { name: "Postgresql", icon: <SiPostgresql className="text-blue-600" size={58} /> },
  ];

  const others = [
    { name: "Git", icon: <SiGit className="text-red-500" size={58} /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" size={58} /> },
    { name: "Cisco Networking", icon: <SiCisco className="text-blue-500" size={58} /> },
  ];

 return (
    <div className="min-h-screen border-red-600 bg-black flex flex-col">
      <div className="flex justify-between items-center bg-black text-white px-2 py-1 border-2 border-red-600">
        <span className="select-none font-staatliches">tech_stack.png</span>
        <button className="bg-black px-2 text-white font-staatliches">X</button>
      </div>

      <div className="border-2 border-red-600 flex select-none overflow-hidden ">
        <div className="flex-1 flex flex-col gap-2 border-red-600 hover:bg-gray-950">
          <div className="flex flex-col space-y-8">
          <h3 className="text-red-500 font-staatliches text-center text-3xl mt-4">Languages</h3>
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center justify-center gap-4 text-white font-staatliches transform transition-transform duration-500 hover:-translate-y-1 hover:scale-105">
                {lang.icon}
                <span className="w-20 text-left">{lang.name}</span>
              </div>
            ))}
        </div>
      </div>

        <div className="flex-1 flex flex-col gap-2 hover:bg-gray-950 transition-colors">
          <div className="flex flex-col space-y-8">
          <h3 className="text-red-500 font-staatliches text-center text-3xl mt-4">Frameworks/Libraries</h3>
          {frameworks.map((fw) => (
            <div key={fw.name} className="flex items-center justify-center gap-2 text-white font-staatliches transform transition-transform duration-500 hover:-translate-y-1 hover:scale-105">
              {fw.icon}
              <span className="w-20 text-left">{fw.name}</span>
            </div>
          ))}
        </div>
      </div>

        <div className="flex-1 flex flex-col gap-2 hover:bg-gray-950 transition-colors">
          <div className='flex flex-col space-y-8'>
            <h3 className="text-red-500 font-staatliches text-center text-3xl mt-4 mb-4">Databases</h3>
            {databases.map((db) => (
              <div key={db.name} className="flex items-center justify-center gap-2 text-white font-staatliches transform transition-transform duration-500 hover:-translate-y-1 hover:scale-105">
                {db.icon}
                <span className="w-20 text-left">{db.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2 hover:bg-gray-950 transition-colors">
          <div className='flex flex-col space-y-8'>
            <h3 className="text-red-500 font-staatliches text-center text-3xl mt-4 mb-4">Other</h3>
              {others.map((item) => (
                <div key={item.name} className="flex items-center justify-center gap-2 text-white font-staatliches transform transition-transform duration-500 hover:-translate-y-1 hover:scale-105">
                  {item.icon}
                  <span className="w-28 text-left">{item.name}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;