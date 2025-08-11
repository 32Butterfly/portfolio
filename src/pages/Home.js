import TypeWriterAnimation from './TypeWriterAnimation';
import Image from '../Photo.jpg';

function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-mono grid grid-cols-2 gap-2 p-2">
      <div className="border-2 border-red-600 p-2 flex items-center justify-center">
        <img
          src={Image}
          alt="Spider Lily"
          className="w-full max-w-full h-auto object-cover z-20 md:h-screen md:w-auto"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <div className="border-2 border-red-600 p-4 animate-flyIn">
          <h1 className="text-4xl md:text-5xl font-bold select-none">
            Hi, I'm <span className="text-red-500">Evaldas</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl select-none leading-relaxed">
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
    </div>
  );
}


export default Home;