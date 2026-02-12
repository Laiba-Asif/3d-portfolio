"use client";

import { Download, ArrowRight, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTASection = () => {
  return (
    <div
      id="resume"
      className="px-4 relative overflow-hidden text-[hsl(var(--foreground))]"
    >
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)/0.1) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary)/0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl animate-float bg-cyan-300/20"  />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float bg-cyan-300/20" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Resume Card */}
          <div className="group relative">
            <div className="absolute inset-0 rounded-3xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                 style={{ background: 'linear-gradient(to right, hsl(var(--primary)/0.2), hsl(var(--primary)/0.05))' }}
            />
            <div className="relative rounded-3xl border p-8 md:p-10 h-full overflow-hidden transition-all duration-500"
                 style={{
                   background: 'linear-gradient(to bottom right, hsl(var(--card)/0.8), hsl(var(--card)/0.4))',
                   borderColor: 'hsl(var(--primary)/0.1)',
                   backdropFilter: 'blur(20px)',
                 }}
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full" style={{ backgroundColor: 'hsl(var(--primary)/0.1)' }} />

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                   style={{ backgroundColor: 'hsl(var(--primary)/0.1)' }}
              >
                <Download className="w-8 h-8" style={{ color: 'hsl(var(--primary))' }} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'hsl(var(--foreground))' }}>
                  Get My Resume
                </h3>
                <p className="mb-8 leading-relaxed text-[hsl(var(--muted-foreground))]">
                  Download my complete resume with detailed experience, skills, and achievements. 
                  See the full picture of what I bring to the table.
                </p>

                <Button className="w-full sm:w-auto" asChild>
                  <a href="/resume/Laiba Asif MERN Resume.pdf" download>
                    <Download className="w-5 h-5 mr-2 animate-bounce" style={{ color: 'hsl(var(--primary))' }} />
                    Download Resume
                    <ArrowRight className="w-4 h-4 ml-2 transition-all opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                  </a>
                </Button>
              </div>

              {/* Decorative Dots */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--primary)/0.3)' }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--primary)/0.5)' }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--primary)/0.7)' }} />
              </div>
            </div>
          </div>

          {/* Gallery Card */}
          <div className="group relative">
            <div className="absolute inset-0 rounded-3xl blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                 style={{ background: 'linear-gradient(to right, hsl(var(--primary)/0.05), hsl(var(--primary)/0.2))' }}
            />
            <div className="relative rounded-3xl border p-8 md:p-10 h-full overflow-hidden transition-all duration-500"
                 style={{
                   background: 'linear-gradient(to bottom right, hsl(var(--card)/0.8), hsl(var(--card)/0.4))',
                   borderColor: 'hsl(var(--primary)/0.1)',
                   backdropFilter: 'blur(20px)',
                 }}
            >
              <div className="absolute top-0 left-0 w-32 h-32 rounded-br-full" style={{ backgroundColor: 'hsl(var(--primary)/0.1)' }} />

              <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                   style={{ backgroundColor: 'hsl(var(--primary)/0.1)' }}
              >
                <Image className="w-8 h-8" style={{ color: 'hsl(var(--primary))' }} />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'hsl(var(--foreground))' }}>
                  Gallery of Trying
                </h3>
                <p className="mb-8 leading-relaxed text-[hsl(var(--muted-foreground))]">
                  Step into a living archive of experiments, flops, happy accidents, and near misses. 
                  Every &quot;failure&quot; here is proof that trying is where the magic starts.
                </p>

                <Button className="w-full sm:w-auto" asChild>
                  <Link href="/gallery-of-trying">
                    <Image className="w-5 h-5 mr-2 animate-bounce" style={{ color: 'hsl(var(--primary))' }} />
                    Explore the Gallery
                    <ArrowRight className="w-4 h-4 ml-2 transition-all opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0" />
                  </Link>
                </Button>
              </div>

              <div className="absolute bottom-4 right-4 flex gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--primary)/0.7)' }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--primary)/0.5)' }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'hsl(var(--primary)/0.3)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
