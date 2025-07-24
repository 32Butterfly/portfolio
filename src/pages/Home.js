import TypeWriterAnimation from './TypeWriterAnimation';
import Image from '../Photo.jpg';

function Home() {
  return (
    <div className="min-h-screen flex items-start bg-black text-white overflow-hidden">  
      <div className="flex-1 flex justify-center">
        <img
          src={Image}
          alt="Spider Lily"
          className="h-screen w-auto object-cover z-20"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center items-start z-10 text-start px-6 md:px-12 translate-y-4">
        <h1 className="text-4xl md:text-5xl font-bold select-none animate-flyIn">
          Hi, I'm <span className="text-red-600">Evaldas</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl select-none animate-flyIn leading-relaxed">
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
        </p>
      </div>
    </div>
  );
}


export default Home;