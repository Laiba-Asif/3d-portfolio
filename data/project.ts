
export const projects = [
 


   {
    title: "FYP - Job Portal With AI Resume Ranking",
    description: "AI-Powered job portal with resume ranking and job matching features",
    fullDescription:
      `Job Portal with AI Resume Ranking is an AI-driven recruitment web application designed to automate resume screening and improve job-to-candidate matching using Artificial Intelligence (AI) and Natural Language Processing (NLP).

The platform allows job seekers to register, upload resumes (PDF/DOC), apply for jobs, and track application status, while recruiters can post detailed job listings and receive an automatically AI-ranked list of candidates based on relevance. An admin module manages users, job postings, and system performance.

The core feature is AI-based resume ranking. Resumes are parsed using PyMuPDF to extract text, followed by NLP processing with SpaCy for Named Entity Recognition to identify skills, experience, education, and certifications. Job descriptions and resumes are matched using a BERT-based semantic similarity model, enabling contextual understanding beyond keyword matching.

The system supports skill-based and experience-based filtering, advanced job search, personalized recommendations, and an Applicant Tracking System (ATS) that enables recruiters to shortlist, accept, or reject candidates efficiently.

The application follows a microservices-based architecture, with AI processing handled by Python FastAPI services, while the main backend is built using Node.js and Express. The frontend is developed using Next.js, and MongoDB is used for scalable data storage.

This project reduces manual resume screening, improves hiring accuracy, and demonstrates the practical application of AI in real-world recruitment systems.

Tech Stack: Next.js, Node.js, Express, Python, FastAPI, Microservices, MongoDB
AI & NLP: PyMuPDF, SpaCy, BERT-based semantic similarity model`,
    imageUrl: "/projects/fyp.jpeg",
    techStack: ["Next.js", "Node.js", "Express", "Python", "FastAPI", "Microservices", "MongoDB", "Netlify", "OpenAI", "Claude", "Perplexity"],
    githubUrl: "https://github.com/Laiba-Asif/Job-Portal-with-AI-FYP",
    deployedUrl: "",
    category: "ai",
   motivation:"",
   lessonLearnt:""
  },
  {
    title: "Instagram Clone",
    description: "Instagram clone built with React ,PostgreSQL and Tanstack Query.",
    fullDescription:
      `An Instagram clone built with React, PostgreSQL, and Tanstack Query. The application features user authentication, photos and videos sharing via cloudinary, liking and commenting on posts and editing your own comments , following and unfollowing other users, and a responsive design. The backend is powered by Node.js and Express, with PostgreSQL for data storage and TypeOrm for object-relational mapping. Tanstack Query is used for efficient data fetching and state management on the frontend.
      Redis BullMQ is used for handling background jobs such as sending notifications and scheduling posts and for stories to be removed after 24 hours. Cloudinary is used for processing media uploads, ensuring a smooth user experience. This project demonstrates my ability to build a full-stack social media application with real-time features and efficient data management.`,
    imageUrl: "/projects/instagram-clone.png",
    techStack: ["React", "TypeScript", "TailwindCSS", "Next.js", "PostgreSQL", "Tanstack Query","TypeScript", "Node.js", "Express", "Redis BullMQ", "Cloudinary"],
    githubUrl: "https://github.com/Laiba-Asif/instagram-Clone",
    deployedUrl: "",
    category: "web",
   motivation:"This project gave me the opportunity to build a complex social media application with real-time features and efficient data management. It allowed me to work with a variety of technologies and gain experience in building scalable web applications.",
   lessonLearnt:"At first i was so comfortble with MongoDB and mongoose but this project forced me to learn SQL and relational databases and i really enjoyed working with PostgreSQL and TypeOrm. I also learned how to use Redis BullMQ for handling background jobs and scheduling tasks, which was a new experience for me."
  },
  {
    title: "Black Beauty ",
    description: "E-Commerce Web Application for Women’s Fashion & Apparel",
    fullDescription:
      "Black Beauty Apparel is an e-commerce platform project I developed, which involves building a seamless online shopping experience. The website is deployed using Next.js and MongoDB, providing users with an intuitive interface for browsing and purchasing products. Since deployment, the site has attracted over 1,500 visitors, demonstrating its functionality and reach",
    imageUrl: "/projects/black-beauty.jpeg",
    techStack: ["React", "TypeScript", "TailwindCSS", "Next.js", "MongoDB"],
    githubUrl: "https://github.com/Laiba-Asif/Black-Beauty",
    deployedUrl: "",
    category: "web",
  },
  
  {
    title: "Locible ",
    description:
      "AI-Powered Business Review Management Platform with Google Business Profile Integration",
    fullDescription: `Locible is a full-stack web application I built to help businesses monitor, analyze, and respond to customer reviews at scale using artificial intelligence and real-time integrations with Google Business Profile (GBP).

In today’s digital landscape, online reviews are one of the most influential factors in how customers perceive a business. A single negative review can impact trust, while consistent and timely engagement with customers can significantly improve brand reputation. Locible was designed to address this exact challenge by combining automation, AI, and secure system design into one cohesive platform.

The platform is specifically built for businesses that want to protect their online reputation, save operational time, and make data-driven decisions based on customer feedback rather than intuition.
The Problem It Solves

As businesses grow, managing Google reviews manually becomes increasingly difficult. What starts as a simple task quickly turns into a bottleneck when review volume increases. During research and real-world observation, I identified several recurring problems faced by business owners:

Missed reviews due to lack of real-time monitoring

Delayed or inconsistent responses, damaging customer trust

Generic or rushed replies that don’t align with brand tone

No clear understanding of customer sentiment at scale

Difficulty identifying patterns, strengths, and pain points from reviews

Most businesses either ignore reviews entirely or respond reactively without a structured approach. Existing tools often focus on analytics alone or require heavy manual input.

Locible automates and enhances the entire review management workflow using AI, secure background processing, and structured data pipelines — allowing businesses to focus on growth instead of manual monitoring.`,
    imageUrl: "/projects/locible.jpeg",
    techStack: ["Next.js", "TypeScript", "Nodemailer","stripe", "TailwindCSS", "MongoDB", "Google Business Profile API", "OpenAI API"],
    githubUrl: "",
    deployedUrl: "https://locible.com/",
    category: "web",
  },
  {

  title: "Loyalty Hub ",
  description: "Digital Loyalty Program Platform for Restaurants & Local Businesses",
  fullDescription:
    `Loyalty Hub is a full-stack web application designed to help restaurants, cafés, salons, and local businesses build and manage digital loyalty programs without relying on traditional paper loyalty cards.

Paper-based loyalty cards are easily lost, duplicated, or misused, making them inefficient and insecure. Loyalty Hub replaces this manual system with a secure, QR-based digital loyalty experience that works seamlessly with Apple Wallet.
Problem It Solves

Many small and medium businesses struggle to retain customers due to:

Misuse and duplication of paper loyalty cards

Lack of visibility into customer visits

No centralized system to manage loyalty rewards

Loyalty Hub digitizes the entire loyalty process while giving businesses real-time visibility into customer engagement.
Key Features

Business Loyalty Program Management

Business owners can register and create custom loyalty programs (e.g., “Visit 5 times, get a free meal/service”)

Define visit counts, rewards, and program rules

Manage customer participation through a centralized dashboard

QR Code-Based Check-In System

Each business is assigned a unique QR code

Customers scan the QR code during each visit

Each scan securely records a visit in the system

Apple Wallet Integration

Customer visits are stored digitally using Apple Wallet (pkpass)

Each loyalty pass is secured with a unique token to prevent fraud or reuse

Eliminates the need for physical cards while improving user convenience

Role-Based Dashboards

Admin Dashboard: system monitoring, business management, analytics

Business Owner Dashboard: customer visits, loyalty progress, reward tracking

Security & Fraud Prevention

Token-based validation for Apple Wallet passes

Ensures only valid scans increment visit counts

Prevents unauthorized or repeated misuse`,
  imageUrl: "/projects/loyalty.jpeg",
  techStack: ["Next.js", "TailwindCSS", "TypeScript", "Supabase"], 
  githubUrl: "https://github.com/Laiba-Asif/apple-wallet-loyalty-cards",         // not publicly shared
  deployedUrl: "",
  category: "web"
}
,
{
  title: "Zoom Clone",
  description: "A web-based video conferencing application",
  fullDescription: `A web-based video conferencing application built with Next.js and styled with Tailwind CSS and Shadcn, featuring secure user authentication through Clerk and powered by Stream for video calls. It includes essential conferencing features such as screen sharing, meeting recording, scheduled meetings, and the ability to download recorded sessions, offering a versatile tool for seamless remote collaboration.
`,
  imageUrl: "/projects/zoom.jpeg",
  techStack: ["Nextjs", "TailwindCSS", "Shadcn", "Clerk",  "Stream","video calling", "conference call", "screen sharing", "meeting recording", "download recorded sessions"],
  githubUrl: "https://github.com/Laiba-Asif/Next.Js_zoom-clone",
  deployedUrl: "https://zoom-by-laiba.vercel.app/",
  category: "web"
}
,
  {
    title: "Real Estate Website - MERN Stack",
    description: "MERN Stack Real Estate Website with Property Listings, Search, and User Authentication",
    fullDescription:
      `I developed a full-fledged real estate web application using the MERN stack (MongoDB, Express.js, React, Node.js) to streamline property management, exploration, and communication between buyers and sellers.

-> Frontend: Built using React and SCSS for responsive, dynamic UI, with Context API and Zustand to manage state efficiently, eliminating prop drilling. Integrated Axios for handling API requests and displaying JSON responses dynamically.

-> Backend: Designed and implemented robust RESTful APIs with Node.js and Express.js, leveraging MongoDB (NoSQL) for data storage. Used Prisma for database querying and schema management, and tested all routes with Postman for seamless API functionality.

-> Image Handling: Integrated Cloudinary to efficiently upload and manage property images, ensuring fast and secure media delivery.

-> Authentication & Security: Implemented secure user authentication with JWT (JSON Web Tokens), allowing users to remain logged in for a week with persistent cookie tokens, ensuring a smooth user experience. Added CORS configuration for cross-origin request management.

-> Search & Filters: Incorporated advanced filtering using search query parameters, allowing users to efficiently search for properties based on location, price, and other attributes.

-> Real-time Chat: Developed an interactive real-time chat feature using Socket.io, enabling users to communicate instantly with property owners or builders without any delay, enhancing user engagement.

This project showcases my ability to design, develop, and deploy scalable web applications with a strong focus on real-time interactions, user experience, and performance optimization.`,
    imageUrl: "/projects/real-estate.jpeg",
    techStack: ["React", "TypeScript", "TailwindCSS", "Next.js", "REST Api", "Realtime Messaging", "Socket.io"],
    githubUrl: "https://github.com/Laiba-Asif/Real-Estate-Frontend",
    category: "web",
  },
  {
  title: "Netflix clone",
  description: "Movies TV shows streaming platform with Next.js, Tailwind CSS, and Shadcn UI",
  fullDescription: `Developed a MERN Stack Netflix clone with React and Node.js, integrating Tailwind CSS for styling, Zustand for state management, and JWT with CORS for secure backend operations. Utilized Axios to fetch and display data from TMDB, enabling users to search for movies, TV shows, and actors. This project strengthened my skills in full-stack development, API integration, and user-centered design with streamlined UI/UX`,
  imageUrl: "/projects/netflix.jpeg",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
  githubUrl: "https://github.com/Laiba-Asif/mern-netflix-clone",
  deployedUrl: "",
  "category": "web"
}
,
  {
  title: "SignTaps ",
  description: "Custom Print & Packaging E-Commerce Platform",
  fullDescription:
    `SignTaps, vistaprint Clone is a full-stack web application built for printing and packaging businesses that offer customized products such as visiting cards, flyers, booklets, T-shirts, business cards, marketing materials, and branded packaging.

The platform enables businesses to sell highly customizable print products through a modern, scalable e-commerce experience. Customers can select product types, choose sizes, materials, quantities, and upload or customize designs before placing orders, making the system suitable for both individuals and corporate clients.

The application focuses on product personalization at scale, which is one of the biggest challenges in the printing industry. Each product supports dynamic pricing based on configuration options such as print type, paper quality, color mode, and order volume. This ensures accurate pricing while maintaining flexibility for a wide range of products.

A responsive and intuitive user interface was built using Next.js and Tailwind CSS, ensuring fast load times, SEO-friendly pages, and a smooth customization experience across devices. The backend, powered by Node.js, handles product management, order processing, file uploads, and customer order tracking.

The platform includes an admin dashboard that allows printing companies to manage products, pricing rules, incoming orders, and customer details efficiently. Order data is structured to support real-world print workflows, enabling businesses to process, fulfill, and track customized print jobs effectively.

This project demonstrates the ability to build production-ready e-commerce systems with complex customization logic, scalable architecture, and real-world business use cases in the printing and packaging industry.`,
  imageUrl: "/projects/vistaprint.jpeg",
  techStack: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Cloudinary", "packaging", "custom printing", "dynamic pricing", "real-time order tracking"],
  githubUrl: "https://github.com/Laiba-Asif/signtaps",
  deployedUrl: "https://signtaps.vercel.app/",
  category: "web",
},
{
  title: "3d Car Show",
  description: "A 3D car showroom website built with Three.js and React",
  fullDescription:
    "Three.js and React canvas to show a 3D car model with interactive controls.",
  imageUrl: "/projects/3d-car-show.jpg",
  techStack: ["React", "Three.js", "TypeScript"],
  githubUrl: "https://github.com/Laiba-Asif/3d-Car-Show",
  deployedUrl: "https://3d-car-show-mu.vercel.app/",
  category: "web",
}
,
{
  title: "Starbucks Slider",
  description: "Starbucks menu slider built with React and Tailwind CSS",
  fullDescription:
    "A responsive and interactive slider for the Starbucks menu, built with React and Tailwind CSS.",
  imageUrl: "/projects/starbucks.png",
  techStack: [
    "React",
    "Tailwind CSS",
  ],
  githubUrl: "https://github.com/Laiba-Asif/Starbucks-animated-slider",
  deployedUrl: "https://starbucks-animated-slider.vercel.app/",
  category: "web",
  
}
,
   {
    title: "Weather Forecasting App",
    description: "A responsive weather forecasting application built with JavaScript, Next.js and Tailwind CSS",
    fullDescription:
      "A responsive and interactive weather forecasting application built with Next.js and Tailwind CSS. Features include real-time weather data, 5-day forecasts, location-based search, and a clean, modern UI.",
    imageUrl: "/projects/forecst.png",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Weather API"],
    githubUrl: "https://github.com/Laiba-Asif/Weather-Forcasting-App",
    deployedUrl: "https://weather-forcasting-app-six.vercel.app/",
    category: "web",
  },
  {
    title: "PlayPiano",
    description: "play piano online with React and Tone.js",
    fullDescription:
      "An interactive piano application built with React and Tone.js that allows users to play piano notes and chords in real-time.",
    imageUrl: "/projects/playpiano.png",
    techStack: ["React", "Tone.js", "JavaScript"],
    githubUrl: "https://github.com/Laiba-Asif/Piano-Game",
    deployedUrl: "https://pianoplay.vercel.app/",
    category: "javascript",
  },
  {
  "title": "Student Management System",
  "description": "A web application for managing student records and academic data",
  "fullDescription": "The Student Management System is a comprehensive web application built with Next.js and TypeScript. It allows administrators to manage student records, track academic progress, and generate reports. Features include user authentication, CRUD operations for students, grade tracking, and a responsive UI built with Tailwind CSS.",
  "imageUrl": "/projects/LMS.png",
  "techStack": ["Next.js", "TypeScript", "Tailwind CSS", "React", "MongoDB"],
  "githubUrl": "http://github.com/Laiba-Asif/Student-Management-System",
  "deployedUrl": "https://student-management-system-laibae.vercel.app/",
  "category": "web"
},
  {
    title: "Typing Game",
    description: "An interactive typing game built with React and TypeScript",
    fullDescription:
      "A responsive and engaging typing game built with React and TypeScript. Features include real-time typing speed tracking, accuracy measurement, difficulty levels, and a clean, modern UI.",
    imageUrl: "/projects/typing.png",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Laiba-Asif/Typing-speed-test",
    deployedUrl: "https://typing-speed-test-psi-one.vercel.app/",
    category: "web",
  },
  {
    title: "React Quiz App",
    description: "React Quiz App with Tailwind CSS and JavaScript",
    fullDescription:
      "A responsive and interactive quiz application built with React and Tailwind CSS. Features include multiple-choice questions, score tracking, and a clean, modern UI.",
    imageUrl: "/projects/quiz-app.png",
    techStack: ["React", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Laiba-Asif/React-Quiz",
    deployedUrl: "https://react-quiz-six-opal.vercel.app/",
    category: "web",
  },
  {

  title: "Ochi Designs Clone",
  description: "Ochi Designs Clone using Next.js, Vercel and TypeScript",
  fullDescription:
    "A responsive and engaging clone of the Ochi Designs website built with Next.js, Vercel, and TypeScript. Features include a modern UI, smooth animations, and responsive design.",
  imageUrl: "/projects/ochi.png",
  techStack: ["Next.js", "Vercel", "Tailwind CSS", "TypeScript"],
  githubUrl: "https://github.com/Laiba-Asif/ochi-designs",
  deployedUrl: "https://ochi-designs-rouge.vercel.app/",
  category: "frontend"
},

  {
    title: "Spylt Clone",
    description: "Spylt Clone using Next.js, Vercel and TypeScript",
    fullDescription:
      "A responsive and engaging clone of the Spylt website built with Next.js, GSAP, and TypeScript. Features include a modern UI, smooth animations, and responsive design.",
    imageUrl: "/projects/spylt.png",
    techStack: ["Next.js", "GSAP", "TypeScript"],
    githubUrl: "https://github.com/Laiba-Asif/Spylt-Clone",
    deployedUrl: "https://dev-gsap.vercel.app/",
    category: "frontend",
  },


  
]