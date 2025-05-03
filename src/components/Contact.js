export default function Contact() {
  const IMG = process.env.PUBLIC_URL; // base path

  return (
    <footer
      id="contact"
      className="bg-slate-900 text-slate-100 py-16 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-8 text-3xl font-bold">Let’s connect</h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {/* phone */}
          <div className="flex items-center gap-3">
            <img src={`${IMG}/phone.png`} alt="Phone" className="h-6 w-6" />
            (206) 787‑2774
          </div>

          {/* email */}
          <a
            href="mailto:arjunvaish22@gmail.com"
            className="flex items-center gap-3 hover:text-purple-300"
          >
            <img src={`${IMG}/gmail.png`} alt="Gmail" className="h-6 w-6" />
            arjunvaish22@gmail.com
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/arjun-vaish"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-purple-300"
          >
            <img
              src={`${IMG}/linkedin.png`}
              alt="LinkedIn"
              className="h-6 w-6"
            />
            LinkedIn
          </a>
        </div>

        <p className="mt-10 text-xs text-slate-400">
          © {new Date().getFullYear()} Arjun Vaish
        </p>
      </div>
    </footer>
  );
}
