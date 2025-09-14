import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden text-gray-800">
      {/* Background Image */}
      <Image
        src="/bridge-bg.jpg" // replace with your uploaded image in /public
        alt="Bridge background"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-6 z-20">
        <h1 className="text-2xl font-semibold">BridgeAI™</h1>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="font-medium">
            Mission
          </a>
          <a href="#">How it Works</a>
          <a href="#">Pricing</a>
          <button className="bg-black text-white rounded-full px-5 py-2">
            Book a Demo
          </button>
          <a href="#" className="ml-6">
            New Account
          </a>
          <a href="#">Login</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800 max-w-4xl">
          Bridge the gap <span className="text-green-700">between</span> <br />
          data and decisions
        </h2>
        <p className="mt-6 text-lg text-gray-700 max-w-xl">
          Turn disconnected data into actionable insights with AI-powered
          automation.
        </p>

        {/* CTA buttons */}
        <div className="mt-8 flex gap-4">
          <button className="bg-black text-white rounded-full px-6 py-3">
            Book a Demo
          </button>
          <button className="bg-white text-black border rounded-full px-6 py-3">
            Learn More
          </button>
        </div>

        {/* Bottom-right video link */}
        <div className="absolute bottom-8 right-8 flex items-center gap-2 cursor-pointer">
          <div className="w-14 h-20 bg-green-700 rounded shadow flex items-center justify-center">
            <span className="text-white text-xl">▶</span>
          </div>
          <span className="text-sm">How it works? 1:35</span>
        </div>
      </section>
    </main>
  );
}
