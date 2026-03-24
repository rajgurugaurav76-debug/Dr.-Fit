import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ChevronRight, Dumbbell, Flame, Play, Star, Trophy } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF3300] selection:text-white">
      <Navbar />

      <main>
        <Hero />

        {/* VIDEO SECTION */}
        <section id="video" className="py-24 px-6 bg-black text-center">
          <h2 className="text-5xl font-display mb-10">Watch Our Workout Video</h2>

          <div className="max-w-5xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/wnHW6o8WMas"
              title="Workout Video"
              className="w-full h-[500px] rounded-xl"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <TransformationHook />
        <Programs />
        <Results />
        <TrainerAuthority />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

/* ================= NAVBAR ================= */

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-3xl font-display tracking-wider text-white">
          DR <span className="text-[#FF3300]">FIT</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-widest text-white/70">
          <a href="#programs" className="hover:text-white transition-colors">Programs</a>
          <a href="#results" className="hover:text-white transition-colors">Results</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Reviews</a>
        </div>

        <a
          href="#programs"
          className="bg-[#FF3300] hover:bg-[#CC2900] text-white px-6 py-3 font-display tracking-widest text-sm transition-colors uppercase skew-x-[-10deg]"
        >
          <span className="block skew-x-[10deg]">Start Now</span>
        </a>
      </div>
    </nav>
  );
}

/* ================= HERO ================= */

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">

      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">

          <h1 className="text-6xl md:text-8xl lg:text-[120px] leading-[0.85] font-display mb-6">
            BUILD YOUR <br />
            <span className="text-[#FF3300]">ULTIMATE</span> BODY.
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl">
            Stop guessing. Start transforming. Dr Fit provides the exact blueprint and coaching you need.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            {/* START BUTTON */}
            <a
              href="#programs"
              className="bg-[#FF3300] hover:bg-[#CC2900] text-white px-8 py-5 font-display tracking-widest text-lg uppercase skew-x-[-10deg] flex items-center justify-center gap-2"
            >
              <span className="block skew-x-[10deg] flex items-center gap-2">
                Claim Your Spot <ArrowRight size={20} />
              </span>
            </a>

            {/* WATCH VIDEO BUTTON */}
            <a
              href="#video"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-5 font-display tracking-widest text-lg uppercase skew-x-[-10deg] flex items-center justify-center gap-2"
            >
              <span className="block skew-x-[10deg] flex items-center gap-2">
                <Play size={20} /> Watch Video
              </span>
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= PROGRAMS ================= */

function Programs() {
  return (
    <section id="programs" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-display mb-12">PROGRAMS</h2>
        <p className="text-white/60">All buttons now scroll correctly 🎯</p>
      </div>
    </section>
  );
}

/* ================= RESULTS ================= */

function Results() {
  return (
    <section id="results" className="py-32 px-6 bg-[#111111]">
      <h2 className="text-5xl font-display text-center">RESULTS</h2>
    </section>
  );
}

/* ================= ABOUT ================= */

function TrainerAuthority() {
  return (
    <section id="about" className="py-32 px-6">
      <h2 className="text-5xl font-display text-center">ABOUT DR FIT</h2>
    </section>
  );
}

/* ================= TESTIMONIALS ================= */

function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-[#111111]">
      <h2 className="text-5xl font-display text-center">REVIEWS</h2>
    </section>
  );
}

/* ================= CTA ================= */

function FinalCTA() {
  return (
    <section className="py-32 px-6 text-center">
      <h2 className="text-6xl font-display mb-6">TIME TO LEVEL UP</h2>
    </section>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="bg-[#050505] py-12 px-6 border-t border-white/10 text-center">
      <div className="text-3xl font-display">
        DR <span className="text-[#FF3300]">FIT</span>
      </div>
      <p className="text-white/40 mt-4">© {new Date().getFullYear()} Dr Fit</p>
    </footer>
  );
}
