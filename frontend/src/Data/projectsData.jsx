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


const projectsData = [
  {
    id: 1,
    title: "College Placement Services",
    heroImg: proj1,
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
    gallery: [proj1, projimage2, projimage3, projimage4, projimage5, projimage6, projimage7],
    contact: {
      site: "https://lnkd.in/gh83Y5eH",
      emails: ["Placementhub9@gmail.com", "vysoftware@gmail.com"],
    },
  },

 {
  id: 2,
  title: "Dev Tool AI",
  heroImg: proj2,
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
  gallery: [proj2image1, proj2image2, proj2image3, proj2image4, proj2image5, proj2image6],
  contact: {
    site: "https://lnkd.in/gh83Y5eH",
    emails: ["vysoftware@gmail.com"],
  },
}


];

export default projectsData;
