import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ChevronRight, Dumbbell, Flame, Play, Star, Trophy, Users } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF3300] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <section className="py-24 px-6 bg-black text-center">
    <h2 className="text-5xl font-display mb-10">
      Watch Our Workout Video
    </h2>

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
        <button className="bg-[#FF3300] hover:bg-[#CC2900] text-white px-6 py-3 font-display tracking-widest text-sm transition-colors uppercase skew-x-[-10deg]">
          <span className="block skew-x-[10deg]">Start Now</span>
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2940&auto=format&fit=crop" 
          alt="Fitness Training" 
          className="w-full h-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-[#FF3300] mb-6">
            <Flame size={14} />
            <span>Elite Fitness Transformation</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[120px] leading-[0.85] font-display mb-6 text-balance">
            BUILD YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3300] to-[#FF8800]">ULTIMATE</span> BODY.
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl font-medium leading-relaxed">
            Stop guessing. Start transforming. Dr Fit provides the exact blueprint, accountability, and coaching you need to shatter your limits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#FF3300] hover:bg-[#CC2900] text-white px-8 py-5 font-display tracking-widest text-lg transition-all uppercase skew-x-[-10deg] flex items-center justify-center gap-2 group">
              <span className="block skew-x-[10deg] flex items-center gap-2">
                Claim Your Spot <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-5 font-display tracking-widest text-lg transition-all uppercase skew-x-[-10deg] flex items-center justify-center gap-2">
              <span className="block skew-x-[10deg] flex items-center gap-2">
                <Play size={20} className="fill-white" /> Watch Video
              </span>
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-4 text-sm font-semibold uppercase tracking-wider text-white/50">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Member" className="w-10 h-10 rounded-full border-2 border-[#050505]" />
              ))}
            </div>
            <div>
              <span className="text-white">500+</span> Transformations
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TransformationHook() {
  const hooks = [
    {
      icon: <Trophy className="text-[#FF3300]" size={32} />,
      title: "Science-Backed Methods",
      desc: "No fads. Just proven protocols designed for maximum muscle growth and fat loss."
    },
    {
      icon: <Flame className="text-[#FF3300]" size={32} />,
      title: "Relentless Accountability",
      desc: "We don't let you fail. Daily check-ins and community support keep you locked in."
    },
    {
      icon: <Dumbbell className="text-[#FF3300]" size={32} />,
      title: "Guaranteed Results",
      desc: "Follow the blueprint, put in the work, and your transformation is inevitable."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#111111] relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {hooks.map((hook, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1A1A1A] p-8 border border-white/5 hover:border-[#FF3300]/50 transition-colors group"
            >
              <div className="mb-6 p-4 bg-black/50 inline-block rounded-lg group-hover:scale-110 transition-transform">
                {hook.icon}
              </div>
              <h3 className="text-2xl font-display mb-3">{hook.title}</h3>
              <p className="text-white/60 leading-relaxed">{hook.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const programs = [
    {
      title: "Shred Protocol",
      tag: "Fat Loss",
      desc: "An aggressive 8-week fat loss phase designed to reveal your abs while maintaining hard-earned muscle.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Mass Builder",
      tag: "Hypertrophy",
      desc: "12 weeks of high-volume, progressive overload training to pack on serious size and strength.",
      image: "https://images.unsplash.com/photo-1534304370112-0f6c4c162765?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "1-on-1 Elite",
      tag: "Coaching",
      desc: "Direct access to Dr Fit. Custom nutrition, daily form checks, and personalized programming.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="programs" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-display mb-4">CHOOSE YOUR <br/><span className="text-[#FF3300]">WEAPON</span></h2>
            <p className="text-xl text-white/60 max-w-xl">Elite programs engineered for specific goals. Pick your path and let's get to work.</p>
          </div>
          <button className="flex items-center gap-2 text-[#FF3300] font-bold uppercase tracking-widest hover:text-white transition-colors">
            View All Plans <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((prog, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden bg-[#111111] aspect-[4/5] flex flex-col justify-end p-8 cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <img src={prog.image} alt={prog.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
              </div>
              
              <div className="relative z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[#FF3300] font-bold tracking-widest uppercase text-xs mb-3 block">{prog.tag}</span>
                <h3 className="text-4xl font-display mb-3">{prog.title}</h3>
                <p className="text-white/70 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{prog.desc}</p>
                
                <button className="bg-white text-black px-6 py-3 font-display tracking-widest text-sm uppercase skew-x-[-10deg] hover:bg-[#FF3300] hover:text-white transition-colors">
                  <span className="block skew-x-[10deg]">Join Program</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="py-32 bg-[#111111] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display mb-6">REAL WORK. <br/><span className="text-[#FF3300]">REAL RESULTS.</span></h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">We don't sell hope. We sell a proven system. Look at what happens when you commit to the process.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-[#1A1A1A] relative overflow-hidden">
              {/* Split Before/After Concept */}
              <div className="absolute inset-0 w-1/2 border-r-4 border-[#FF3300] z-10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1573401498144-84639962a7b8?q=80&w=1000&auto=format&fit=crop" alt="Before" className="h-full w-[200%] max-w-none object-cover grayscale opacity-70" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs font-bold uppercase tracking-widest">Day 1</div>
              </div>
              <div className="absolute inset-0 w-full">
                <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop" alt="After" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-[#FF3300] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">Day 90</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF3300]/20 blur-3xl rounded-full" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/10 blur-3xl rounded-full" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-display mb-6">"I THOUGHT I HAD BAD GENETICS. I JUST HAD BAD ADVICE."</h3>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              "Before Dr Fit, I spent 3 years spinning my wheels. Doing random workouts, eating 'healthy' but seeing zero changes in the mirror. In 12 weeks on the Shred Protocol, I dropped 18lbs of fat and finally saw my abs. The system works if you do."
            </p>
            
            <div className="flex items-center gap-4 mb-10">
              <img src="https://i.pravatar.cc/150?img=33" alt="Marcus" className="w-16 h-16 rounded-full border-2 border-[#FF3300]" />
              <div>
                <div className="font-bold text-xl uppercase tracking-wider">Marcus T.</div>
                <div className="text-[#FF3300] text-sm font-bold uppercase tracking-widest">Lost 18 lbs in 12 weeks</div>
              </div>
            </div>

            <div className="space-y-4">
              {['Custom Macros & Meal Plans', 'Weekly Form Checks', '24/7 Community Access'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80 font-medium">
                  <CheckCircle2 className="text-[#FF3300]" size={20} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrainerAuthority() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display mb-6">MEET <span className="text-[#FF3300]">DR FIT</span></h2>
            <p className="text-xl text-white/80 font-medium mb-6 leading-relaxed">
              Former pro athlete turned elite transformation specialist. I've spent the last decade decoding the science of human performance.
            </p>
            <p className="text-white/60 mb-10 leading-relaxed">
              The fitness industry is full of BS. Quick fixes, magic pills, and cookie-cutter plans that leave you frustrated. I built this platform to provide the exact, science-backed protocols I use with elite athletes and high-performers. No fluff. Just results.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-5xl font-display text-[#FF3300] mb-2">10+</div>
                <div className="text-sm font-bold uppercase tracking-widest text-white/50">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-display text-[#FF3300] mb-2">5K+</div>
                <div className="text-sm font-bold uppercase tracking-widest text-white/50">Lives Transformed</div>
              </div>
            </div>

            <button className="bg-white text-black px-8 py-4 font-display tracking-widest text-sm uppercase skew-x-[-10deg] hover:bg-[#FF3300] hover:text-white transition-colors">
              <span className="block skew-x-[10deg]">Read Full Story</span>
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-[#111111] relative z-10 p-4 border border-white/10">
              <img src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1000&auto=format&fit=crop" alt="Dr Fit" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </div>
            {/* Brutalist accent block */}
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-[#FF3300] z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      text: "The most intense but rewarding 8 weeks of my life. The programming is flawless.",
      name: "Sarah J.",
      role: "Shred Protocol"
    },
    {
      text: "Finally a coach who explains the 'why' behind the movements. My strength skyrocketed.",
      name: "David M.",
      role: "Mass Builder"
    },
    {
      text: "Worth every penny. The 1-on-1 accountability is what finally got me to stick to a plan.",
      name: "Elena R.",
      role: "1-on-1 Elite"
    }
  ];

  return (
    <section id="testimonials" className="py-32 bg-[#111111] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex gap-1 text-[#FF3300] mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <h2 className="text-5xl md:text-7xl font-display mb-6 uppercase">Don't Just Take <br/>Our Word For It</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1A1A1A] p-10 border border-white/5 relative"
            >
              <div className="text-6xl font-display text-white/10 absolute top-6 left-6 leading-none">"</div>
              <p className="text-lg text-white/80 mb-8 relative z-10 font-medium mt-4">
                {review.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#333] rounded-full flex items-center justify-center font-display text-xl text-white">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold uppercase tracking-wider">{review.name}</div>
                  <div className="text-[#FF3300] text-xs font-bold uppercase tracking-widest">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2000&auto=format&fit=crop" alt="Gym" className="w-full h-full object-cover opacity-20" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-[#FF3300]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-6xl md:text-9xl font-display mb-6 leading-[0.85]">
          TIME TO <br/> LEVEL UP.
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium max-w-2xl mx-auto">
          Tomorrow is a myth. The only time that matters is right now. Are you ready to build the body you deserve?
        </p>
        
        <button className="bg-white text-black px-12 py-6 font-display tracking-widest text-xl transition-all uppercase skew-x-[-10deg] hover:bg-black hover:text-white group">
          <span className="block skew-x-[10deg] flex items-center justify-center gap-3">
            Start Your Transformation <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </span>
        </button>
        
        <p className="mt-8 text-sm font-bold uppercase tracking-widest text-white/60">
          Spots for 1-on-1 coaching are strictly limited.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050505] py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-3xl font-display tracking-wider text-white">
          DR <span className="text-[#FF3300]">FIT</span>
        </div>
        
        <div className="flex gap-6 text-sm font-bold uppercase tracking-widest text-white/50">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
          <a href="#" className="hover:text-white transition-colors">TikTok</a>
        </div>
        
        <div className="text-white/30 text-sm font-medium">
          © {new Date().getFullYear()} Dr Fit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

