import Experience from '../components/Experience';
import TechStack from '../components/TechStack';

function AboutMe() {
 return (
    <div className="min-h-screen border-red-600 bg-black flex flex-col">
      <div className="flex justify-between items-center bg-black text-white px-2 py-1 border-2 border-red-600">
        <span className="select-none font-staatliches">tech_stack.png</span>
        <button className="bg-black px-2 text-white font-staatliches">X</button>
      </div>
      <TechStack />
      <Experience />
    </div> 
  );
}

export default AboutMe;