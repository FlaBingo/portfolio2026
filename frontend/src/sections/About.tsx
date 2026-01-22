// frontend\src\sections\About.tsx

import { highlights } from "@/data/highlights";

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8 ">
            <div className="animate-fade-in">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-primary">
              Precision Systems,{" "}
              <span className="font-serif italic font-normal text-white">
                Scalable Software.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a Mechanical Engineering student pursuing a Minor in AI/ML, driven by the goal of making physical systems smarter. My expertise bridges the gap between high-performance software and mechanical precision, specializing in the Next.js and MERN stack for digital platforms and Python-driven machine learning for system optimization.
              </p>
              <p>
                Leveraging MATLAB/Simulink and PostgreSQL, I build end-to-end solutions that handle everything from system modeling to large-scale data persistence. My experience at Tara Tools provided me with a practical understanding of industrial workflows, which I now aim to revolutionize through predictive maintenance and AI-driven automation.
              </p>
              <p>
                Whether I am solving DSA challenges or architecting a Digital Twin, I am focused on building the scalable infrastructure required for the next generation of engineering.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300" style={{borderRadius: ".5rem"}}>
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build digital tools that don't just process data, but organize knowledge—creating a seamless synergy between engineering precision and software scalability."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl group animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms`, borderRadius: ".5rem" }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20" style={{borderRadius: ".5rem"}}>
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
