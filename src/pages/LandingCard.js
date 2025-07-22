 function Card() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">

      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-30 rounded-full blur-3xl animate-slowPulse" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 opacity-20 rounded-full blur-2xl animate-mediumPulse" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-blue-500 via-cyan-500 to-teal-400 opacity-20 rounded-full blur-3xl animate-fastPulse" />

        <div className="z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Evaldas</h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
            Something something
            </p>
            <button className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded transition">
            View My Work
            </button>
        </div>
    </div>
  );
}

export default Card;