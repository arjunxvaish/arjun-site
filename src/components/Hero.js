export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-gradient-to-r from-teal-500 via-purple-600 to-amber-400 px-6 text-center"
    >
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg">
        Hi, I’m Arjun
      </h1>

      <a
        href="https://arjunxvaish.github.io/my-dark-blog-main"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block px-6 py-3 bg-white text-black font-semibold text-lg rounded-full shadow-md hover:bg-black hover:text-white transition-colors duration-300"
      >
        Dive into My Trading Strategies & Blog
      </a>
    </section>
  );
}
