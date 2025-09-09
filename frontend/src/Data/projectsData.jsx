// src/data/projectsData.js
import proj1 from "../assets/Dashboard.jpg";
import projimage2 from "../assets/Dashboard1.jpg";
import projimage3 from "../assets/image 1.jpg";
import projimage4 from "../assets/image 2.jpg";
import projimage5 from "../assets/image 3.jpg";
import projimage6 from "../assets/image 4.jpg";
import projimage7 from "../assets/image 5.jpg";

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
  // Add more projects as needed
];

export default projectsData;
