function Home() {
  return (
    <section className="w-full min-h-screen flex items-center pt-10 justify-center bg-linear-to-r from-indigo-900/90 to-emerald-700/90 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-emerald-400">Echakara Tevin Okemer</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            A Passionate Web Developer
          </h2>

          <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-gray-200 mb-8">
            I build fast, responsive, and user-friendly web applications using modern
            technologies — transforming ideas into elegant digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
              View My Work
            </button>
            <button className="w-full sm:w-auto border border-emerald-400 hover:bg-emerald-400 hover:text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
