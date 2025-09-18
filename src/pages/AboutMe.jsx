import { SiJavascript, SiPhp, SiCplusplus, SiMysql, SiPostgresql, SiLaravel, SiAnsible, SiReact, SiGit, SiDocker, SiCisco } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import AboutMeExperience from './AboutMeExperience';

function AboutMe() {

  const languages = [
    { icon: <a href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><SiJavascript className="text-yellow-400" size={58} /> </a>, name: "JavaScript" },
    { icon: <a href = "https://www.php.net/" target="_blank" rel="noopener noreferrer"><SiPhp className="text-blue-500" size={58} /> </a>, name: "PHP" },
    { icon: <a href = "https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer"><FaJava className="text-red-500" size={58} /> </a>, name: "Java" },
    { icon: <a href = "https://cplusplus.com/" target="_blank" rel="noopener noreferrer"><SiCplusplus className="text-blue-600" size={58} /> </a>, name: "C++" },
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
        <div className="flex-1 flex flex-col gap-2 border-red-600">
          <div className="flex flex-col space-y-8">
          <h3 className="text-red-500 font-staatliches text-center text-3xl mt-4 animate-slideIn">Languages</h3>
            {languages.map((lang, index) => (
              <div key={lang.name}
                style={{ animationDelay: `${index * 500}ms` }}
                className="opacity-0 animate-slideIn">
                <div
                  className={`flex items-center justify-center gap-4 text-white font-staatliches transform transition-transform 
                    duration-500 hover:-translate-y-1 hover:scale-105 rounded-lg px-3 py-2 shadow-md shadow-red-900/30
                    hover:shadow-red-500/40 bg-gray-900/50 mx-3 ${index === languages.length - 1 ? "mb-8" : ""}`} >
                  {lang.icon}
                  <span className="w-20 text-left">{lang.name}</span>
              </div>
            </div>
            ))}
        </div>
      </div>

        <div className="flex-1 flex flex-col gap-2">
          <div className="flex flex-col space-y-8">
            <h3 className="text-red-500 font-staatliches text-center text-3xl mt-4 animate-slideIn">Frameworks/Libraries</h3>
            {frameworks.map((fw, index) => (
              <div key={fw.name} 
                style={{ animationDelay: `${index * 500}ms` }}
                className="opacity-0 animate-slideIn">
                <div
                  className={`flex items-center justify-center gap-4 text-white font-staatliches transform transition-transform 
                    duration-500 hover:-translate-y-1 hover:scale-105 rounded-lg px-3 py-2 shadow-md shadow-red-900/30
                    hover:shadow-red-500/40 bg-gray-900/50 mx-3 ${index === languages.length - 1 ? "mb-8" : ""}`} >
                {fw.icon}
                <span className="w-20 text-left">{fw.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

        <div className="flex-1 flex flex-col gap-2">
          <div className='flex flex-col space-y-8'>
            <h3 className="text-red-500 font-staatliches text-center text-3xl mt-4 animate-slideInReverse">Databases</h3>
            {databases.map((db, index) => (
              <div key={db.name} 
                style={{ animationDelay: `${index * 500}ms` }}
                className="opacity-0 animate-slideInReverse">
                <div
                  className={`flex items-center justify-center gap-4 text-white font-staatliches transform transition-transform 
                    duration-500 hover:-translate-y-1 hover:scale-105 rounded-lg px-3 py-2 shadow-md shadow-red-900/30
                    hover:shadow-red-500/40 bg-gray-900/50 mx-3 ${index === languages.length - 1 ? "mb-8" : ""}`} >
                {db.icon}
                <span className="w-20 text-left">{db.name}</span>
              </div>
            </div> 
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <div className='flex flex-col space-y-8'>
            <h3 className="text-red-500 font-staatliches text-center text-3xl mt-4 animate-slideInReverse">Other</h3>
              {others.map((item, index) => (
                <div key={item.name} 
                  style={{ animationDelay: `${index * 500}ms` }}
                  className="opacity-0 animate-slideInReverse">
                  <div
                    className={`flex items-center justify-center gap-4 text-white font-staatliches transform transition-transform 
                    duration-500 hover:-translate-y-1 hover:scale-105 rounded-lg px-3 py-2 shadow-md shadow-red-900/30
                    hover:shadow-red-500/40 bg-gray-900/50 mx-3 ${index === languages.length - 1 ? "mb-8" : ""}`} >
                  {item.icon}
                  <span className="w-28 text-left">{item.name}</span>
                </div>
              </div>  
              ))}
          </div>
        </div>
      </div> 
      <AboutMeExperience />
    </div> 
  );
}

export default AboutMe;