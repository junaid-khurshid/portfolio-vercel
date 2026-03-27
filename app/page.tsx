export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold">Junaid Khurshid</h1>
        <p className="mt-4 text-xl text-gray-300">
          Senior Full-Stack & .NET Engineer
        </p>
        <p className="mt-2 max-w-xl text-gray-400">
          Building scalable enterprise systems, microservices, and AI-powered applications.
        </p>
      </section>

      {/* ABOUT */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300">
          I’m a Senior Full-Stack Developer with 7+ years of experience building scalable enterprise applications across fintech, eCommerce, and blockchain domains.
          I specialize in .NET, microservices, and cloud platforms like Azure and AWS. I’ve led teams and modernized legacy systems improving efficiency by up to 50%.
        </p>
      </section>

      {/* SKILLS */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            ".NET 8", "C#", "Angular", "Node.js", "Azure", "AWS",
            "Docker", "SQL Server", "MongoDB", "Microservices"
          ].map(skill => (
            <span key={skill} className="border px-4 py-2 rounded text-gray-300">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border p-6 rounded">
            <h3 className="text-xl font-bold">Total Service ERP</h3>
            <p className="mt-2 text-gray-400">
              Enterprise ERP system modernized to .NET 8 with improved performance and scalability.
            </p>
            <a href="https://totalservice.io/" target="_blank" className="text-blue-400 mt-3 block">
              Visit Project
            </a>
          </div>

          <div className="border p-6 rounded">
            <h3 className="text-xl font-bold">Squeezed E-commerce</h3>
            <p className="mt-2 text-gray-400">
              Full-stack ordering platform with Angular, .NET Core, and Azure.
            </p>
          </div>

          <div className="border p-6 rounded">
            <h3 className="text-xl font-bold">KalPay</h3>
            <p className="mt-2 text-gray-400">
              Fintech BNPL platform with secure installment payments.
            </p>
          </div>

          <div className="border p-6 rounded">
            <h3 className="text-xl font-bold">EdCerts</h3>
            <p className="mt-2 text-gray-400">
              Blockchain-based certificate verification system.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4 text-gray-400">junaid381.sj@gmail.com</p>
      </section>

    </main>
  );
}