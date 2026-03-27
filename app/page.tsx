export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold">Hi, I'm Junaid 👋</h1>
        <p className="mt-4 text-xl">Full Stack & AI Developer</p>
        <a href="#projects" className="mt-6 px-6 py-3 bg-white text-black rounded">
          View Projects
        </a>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p>
          I build scalable web apps and AI-powered tools using .NET, FastAPI,
          and modern frontend technologies. Passionate about automation,
          APIs, and real-world problem solving.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Next.js", "React", ".NET", "FastAPI", "Python", "AI", "LangChain"].map(skill => (
            <span key={skill} className="px-4 py-2 border rounded">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border p-6 rounded">
            <h3 className="text-xl font-bold">AI Chatbot</h3>
            <p className="mt-2">Chatbot using OpenAI + RAG system</p>
            <a href="#" className="text-blue-400 mt-2 block">Live Demo</a>
          </div>

          <div className="border p-6 rounded">
            <h3 className="text-xl font-bold">E-commerce API</h3>
            <p className="mt-2">Built with .NET Web API + JWT Auth</p>
            <a href="#" className="text-blue-400 mt-2 block">GitHub</a>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4">junaid@email.com</p>
      </section>

    </main>
  );
}