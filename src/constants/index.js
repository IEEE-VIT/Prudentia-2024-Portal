import { useHref } from "react-router-dom";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Tracks",
  },
  {
    id: "work",
    title: "Rounds",
  },
  {
    id: "contact",
    title: "Portal",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "AI/ML",
    icon: mobile,
  },
  {
    title: "Cybersecurity",
    icon: backend,
  },
  {
    title: "Open Innovative",
    icon: creator,
  },
];

const technologies = [
  //{
    //name: "HTML 5",
    //icon: html,
  //},
  //{
    //name: "CSS 3",
    //icon: css,
  //},
  {
    name: "JavaScript",
    icon: javascript,
  },
  //{
    //name: "TypeScript",
    //icon: typescript,
  //},
  {
    name: "React JS",
    icon: reactjs,
  },
  //{
    //name: "Redux Toolkit",
    //icon: redux,
  //},
  //{
    //name: "Tailwind CSS",
    //icon: tailwind,
  //},
  {
    name: "Node JS",
    icon: nodejs,
  },
  //{
    //name: "MongoDB",
    //icon: mongodb,
  //},
  //{
  //  name: "Three JS",
    //icon: threejs,
  //},
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Round 0",
    company_name: "Points:0",
    icon: git,
    iconBg: "#383E56",
    date: "March 24 - via Portal",
    points: [
      "Teams must submit product ideas aligned with one of the 17 SDG goals prior to the event, or face elimination.",
      "Ideas must align with specified SDG goals to qualify, ensuring contributions toward global sustainability.",
      "Collaboration and innovation drive SDG-focused ideation.",
      "The pursuit of SDG-focused ideation thrives on collaboration and innovation.",
    ],
  },
  {
    title: "Round 1",
    company_name: "Points:10",
    icon: git,
    iconBg: "#E6DEDD",
    date: "March 30 - 3:30 PM Onwards",
    points: [
      "In this twist-based round, teams face unexpected challenges injected into their project development process.",
      "From sudden technology constraints to thematic pivots, participants must adapt swiftly to navigate the curveballs thrown their way. ",
      "Creativity and problem-solving skills are put to the test as teams race against the clock to innovate amidst uncertainty.",
      "Teams encounter surprise challenges, like sudden tech constraints or thematic shifts, injecting dynamism into the round. ",
    ],
  },
  {
    title: "Round 2",
    company_name: "Points:20",
    icon: git,
    iconBg: "#383E56",
    date: "March 31- 12:00 AM Onwards",
    points: [
      "Teams engage in a 1v1 round, scrutinizing each other's ideas while defending their own.",
      "Pairings are determined by track selection and hackathon experience.",
      "A 15-minute questioning session accommodates multiple pairs concurrently, facilitated by judge teams. ",
      "Judges evaluate question quality and defense efficacy, and the round concludes with elimination based on points earned.",
    ],
  },
  {
    title: "Round 3",
    company_name: "Points:40",
    icon: git,
    iconBg: "#E6DEDD",
    date: "March 31 - 9:30 PM Onwards",
    points: [
      "Teams are evaluated based on their performance in round 1 along with the complexity and relevance of the problem statement submitted earlier.",
      "Judges assess the depth of work accomplished during the session and how well it aligns with the initial challenge. ",
      "The criteria emphasize both the progress made during the hackathon and the alignment with the overarching problem statement.",
      "Innovation and strategic problem-solving shall be rewarded.",
    ],
  },
  {
    title: "Final Round",
    company_name: "Points:30",
    icon: git,
    iconBg: "#383E56",
    date: "March 31- 12:00 AM Onwards",
    points: [
      "In the climactic final presentation round of the hackathon, teams deliver polished pitches, presenting their fully realized solutions to a panel of judges and peers.",
      "Each presentation encapsulates months of innovation, problem-solving, and collaboration, highlighting the journey from ideation to execution.",
      "Judges evaluate projects based on creativity, feasibility, and impact, determining the ultimate winners who have demonstrated excellence in addressing the hackathon's challenges. ",
      "The final presentation round is a celebration of ingenuity and perseverance, marking the culmination of intense competition and collective achievement.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "The Winners of the First Prize get a chance to pitch their project to the sponsors for further development and funding",
    name: "25,000",
    designation: "Grand Prize",
    company: "Prudentia 2024",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "The Winners of the Second Prize get a chance to work on an exclusive 3-Month project with IEEE-VIT.",
    name: "10,000",
    designation: "1st Runner-up ",
    company: "Prudentia 2024",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "The Winners of the Third prize get exclusive mentorship by IEEE-VIT on optimizing their project",
    name: "5,000",
    designation: "2nd Runner-up",
    company: "Prudentia 2024",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
