import About from "@/components/About";
import CertificationsSection from "@/components/Certifications/Certification";
import DeveloperSection from "@/components/Contribution/ContributionDisplay";
import EducationSection from "@/components/Education/Education";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import CTASection from "@/components/Gallery/GalleryCTA";
import Hero from "@/components/Home/HeroSection";
import ProjectsSection from "@/components/Projects/Projects";
import SkillsMarquee from "@/components/Skills/SkillsIcon";
import SocialBeamSection from "@/components/Socials/socials";
import TestimonialsSection from "@/components/Testimonials/Testimonials";
import Head from "next/head";

export default function Home() {
  return (
    <>
       <Head>
        <title>Laiba Asif</title>
        <meta name="description" content="Welcome to Laiba Asif's portfolio. Freelancer, full-stack MERN developer. Showcasing projects, skills, and expertise." />
        <meta name="keywords" content="Laiba Asif, developer, programmer, freelancer, Laiba Asif , portfolio" />
        <meta name="author" content="Laiba Asif" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://laibae-awan.vercel.app/" />
        <meta property="og:title" content="Laiba Asif | Developer, Freelancer" />
        <meta property="og:description" content="Portfolio of Laiba Asif: MERN developer, freelancer and tech enthusiast." />
        <meta property="og:image" content="https://laibae-awan.vercel.app/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://laibae-awan.vercel.app/" />
        <meta property="twitter:title" content="Laiba Asif | Developer, Freelancer" />
        <meta property="twitter:description" content="Portfolio of Laiba Asif: MERN developer, freelancer, and tech enthusiast." />
        <meta property="twitter:image" content="https://laibae-awan.vercel.app/og-image.jpg" />
      </Head>  
     <div className="relative w-full overflow-x-hidden ">
       {/* mr peabody */}
     
      <Hero />
      <About />
      <ExperienceSection />
      <ProjectsSection/>
      <SkillsMarquee/>
      <CTASection/>
      <EducationSection/>
      <CertificationsSection/>
      {/* <DeveloperSection/> */}
     {/* <TestimonialsSection/> */}
      <SocialBeamSection/>
      
    </div>
    </>
  );
}
