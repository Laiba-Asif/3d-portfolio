export interface Project {
  name: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  date: string
  imageUrl: string
  skills: string[]
  type: "course" | "hackathon" | "competition"
  project?: Project
}

export const certificates: Certificate[] = [
  {
    id: "1",
    title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
    issuer: "Maximillian Udemy",
    date: "Apr-2025",
    imageUrl: "/cert/reactudemy.jpeg",
    skills: [ "React", "Redux","Context API", "Next.js", "Frontend Development", "State Management", "Performance Optimization", "Testing"],
    type: "course",
  },
  {
    id: "2",
    title: "React Basics",
    issuer: "Meta",
    date: "Aug-2023",
    imageUrl: "/cert/reactbasics.jpeg",
    skills:[ "React", "Redux","Context API", "Next.js", "Frontend Development", "State Management", "Performance Optimization", "Testing"],
    type: "course",
    
  },
  {
    id: "4",
    title: "Programming with JavaScript",
    issuer: "Meta",
    date: "June 2023",
    imageUrl: "/cert/javaScript.jpeg",
    skills: ["JavaScript", "ES6+", "DOM Manipulation", "Asynchronous Programming", "Web APIs"],
    type: "course",
    project: {
      name: "scientific calculator with stack DSA implementation",
    }
  },
  {
    id: "3",
    title: "Introduction to Back-End Development",
    issuer: "Meta",
    date: "Jul-2025",
    imageUrl: "/cert/backend.jpeg",
    skills: ["Node.js", "Express.js", "MongoDB", "API Development", "Authentication", "Database Management"],
    type: "course",
  },
  {
    id: "5",
    title: "Advance React",
    issuer: "Meta",
    date: "Jul-2025",
    imageUrl: "/cert/advanceReact.jpeg",
    skills: ["State Management", "Performance Optimization", "Testing", "React Patterns", "Next.js"],
    type: "course",
    
  },
  
]
