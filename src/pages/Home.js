import TypeWriterAnimation from './TypeWriterAnimation';

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">

        <div className="z-10 text-center px-4 -translate-y-12">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-lg">
            <h1 className="text-4xl md:text-5xl font-bold select-none animate-flyIn">Hi, I'm Evaldas</h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto select-none animate-flyIn">
              <TypeWriterAnimation />
              
              Upcoming 3rd year{' '}
                <a href="https://www.vu.lt/studijos/stojantiesiems/bakalauro-studiju-sarasas/informacines-technologijos"
                className="text-indigo-400 underline hover:text-indigo-300"
                target="_blank" 
                rel="noopener noreferrer">
                Information Technology
                </a> 
              {' '}student at Vilnius University.
              </p>
            <button className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded transition" alt="View my studies">
            View My Work
            </button>
        </div>
      </div>
    </div>
  );
}

export default Home;