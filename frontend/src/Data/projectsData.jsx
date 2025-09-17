// src/data/projectsData.js
import proj1 from "../assets/Dashboard.jpg";
import projimage2 from "../assets/Dashboard1.jpg";
import projimage3 from "../assets/image 1.jpg";
import projimage4 from "../assets/image 2.jpg";
import projimage5 from "../assets/image 3.jpg";
import projimage6 from "../assets/image 4.jpg";
import projimage7 from "../assets/image 5.jpg";
import proj2 from "../assets/dev_tool.ai_image.jpeg";
import proj2image1 from "../assets/dev_tool.ai_image1.jpeg";
import proj2image2 from "../assets/dev_tool.ai_image2.jpeg";
import proj2image3 from "../assets/dev_tool.ai_image3.jpeg";
import proj2image4 from "../assets/dev_tool.ai_image4.jpeg";
import proj2image5 from "../assets/dev_tool.ai_image5.jpeg";
import proj2image6 from "../assets/dev_tool.ai_image6.jpeg";
import proj3 from "../assets/LOGO Image.png";
import proj3image1 from "../assets/patshala_guru.png";
import proj3image2 from "../assets/patshala_guru1.png";
import proj3image3 from "../assets/patshala_guru2.png";
import proj3image4 from "../assets/patshala_guru3.png";
import proj3image5 from "../assets/patshala_guru4.png";
import proj3image6 from "../assets/patshala_guru5.png";
import proj3image7 from "../assets/patshala_guru6.png";
import proj3image8 from "../assets/patshala_guru7.png";


const projectsData = [
  {
    id: 1,
    title: "College Placement Services",
    heroImg: proj1,
    heroImgType: "landscape",
    heroSubtitle:
      "A next-gen ERP solution transforming how colleges and companies connect, recruit, and grow.",
    about: [
      "After months of hard work and dedication, we’re thrilled to announce the launch of our first product – College Placement Services.",
      "This ERP solution empowers colleges to streamline placements and students to access better opportunities.",
    ],
    features: [
      "End-to-end placement management system",
      "Student & company portal integration",
      "Automated workflow processes",
      "Advanced reporting & analytics",
      "Secure & scalable architecture",
    ],
    gallery: [
      { img: proj1, type: "landscape" },
      { img: projimage2, type: "landscape" },
      { img: projimage3, type: "landscape" },
      { img: projimage4, type: "landscape" },
      { img: projimage5, type: "landscape" },
      { img: projimage6, type: "landscape" },
      { img: projimage7, type: "landscape" }
    ],
    contact: {
      site: "https://lnkd.in/gh83Y5eH",
      emails: ["Placementhub9@gmail.com", "vysoftware@gmail.com"],
    },
  },

 {
  id: 2,
  title: "Dev Tool AI",
  heroImg: proj2,
  heroImgType: "landscape",
  heroSubtitle:
    "AI-powered platform for instant GitHub repository analysis, interactive project insights, database schemas, and auto-generated documentation.",
  about: [
    "Introducing RepoAnalyzer AI: your comprehensive solution for analyzing GitHub repositories with speed and precision.",
    "Leveraging AI, RepoAnalyzer provides in-depth analysis of project structure, auto-detects database schemas, generates detailed documentation, and presents interactive visual insights.",
    "Built for developers and teams to understand, document, and optimize their projects more efficiently.",
  ],
  features: [
    "Automated GitHub repository analysis powered by AI",
    "Project structure visualization with file types, sizes, and organization",
    "Database schema detection with entity and relationship mapping",
    "AI-generated smart documentation including setup guides and API reference",
    "Exportable reports and instant ER diagrams",
    "Secure, scalable, and easy-to-integrate with modern developer workflows",
  ],
  gallery: [
    { img: proj2image1, type: "landscape" },
    { img: proj2image2, type: "landscape" },
    { img: proj2image3, type: "landscape" },
    { img: proj2image4, type: "landscape" },
    { img: proj2image5, type: "landscape" },
    { img: proj2image6, type: "landscape" }
  ],
  contact: {
    site: "https://lnkd.in/gh83Y5eH",
    emails: ["vysoftware@gmail.com"],
  },
},

{
  id: 3,
  title: "Patshala Guru",
  heroImg: proj3,
  heroImgType: "portrait",
  heroSubtitle:
    "A modern mobile platform to create, organize, and track courses—empowering students with smart learning, progress insights, quizzes, flashcards, and interactive content.",
  about: [
    "Patshala Guru is your personalized study companion, enabling seamless course management for learners at every stage.",
    "Easily create new courses, generate topics, and select and organize learning modules tailored to your needs.",
    "Stay engaged with interactive quizzes, flashcards, and practice tools, track your progress, and get motivated with an intuitive UI that makes learning enjoyable.",
    "Designed for an effortless experience: intuitive navigation, profile management, course progress tracking, and actionable feedback—everything crafted for students to grow smarter."
  ],
  features: [
    "Create and manage custom courses step-by-step",
    "Smart topic and module generation for chosen subjects",
    "Interactive quizzes with instant feedback and score tracking",
    "Progress bars and completion analytics for every course",
    "Flashcards, practice modules, and question & answer sections for hands-on learning",
    "User-friendly mobile UI with profile and subscription management",
    "Personalized summaries and AI-assisted suggestions for continuous improvement"
  ],
  gallery: [
  { img: proj3image1, type: "portrait" }, 
  { img: proj3image3, type: "portrait" }, 
  { img: proj3image2, type: "portrait" },
  { img: proj3image8, type: "portrait" },
  { img: proj3image4, type: "portrait" },
  { img: proj3image7, type: "portrait" },
  { img: proj3image5, type: "portrait" },
  { img: proj3image6, type: "portrait" }
],
  contact: {
    site: "https://lnkd.in/gh83Y5eH",
    emails: ["vysoftware@gmail.com"],
  },
}

];

export default projectsData;
