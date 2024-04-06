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
  // redux,
  tailwind,
  // nodejs,
  mongodb,
  git,
  next,
  // figma,
  // docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  youtubeclone,
  jobit,
  tripguide,
  threejs,
  niky,
  car,
  python,
  divflow,
  iphone,
  brainwave,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Nextjs Developer",
    icon: web,
  },
  {
    title: "Reactjs Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Strong IT Fundamental",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JS",
    icon: javascript,
  },
  {
    name: "TS",
    icon: typescript,
  },
  {
    name: "React.JS",
    icon: reactjs,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next",
    icon: next,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Game Hub | YouTube Clone | Fitness Exercise ",
    icon: reactjs,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Adhering to best practices for code organization, the application remains scalable and adaptable for future growth.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "Car Hub | Real Estate Application  ",
    icon: reactjs,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Adhering to best practices for code organization, the application remains scalable and adaptable for future growth.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Devflow App ",
    description:
      "Fullstack webApp is a dynamic platform designed to cater to the needs of devs across the globe. Users can engage in a collaborative env, asking and answering questions related to various topics .",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
    ],
    image: divflow,
    source_code_link: "https://dev-dverflow-app-nextjs14.vercel.app/",
  },
  {
    name: "RawgGames App",
    description:
      "Unlock the gaming universe with RawgGames App , the ultimate video game hub offering the largest database, genre-based discovery, platform filtering, and user-friendly interface to stay on real-time trends.",
    tags: [
      {
        name: "Vite",
        color: "blue-text-gradient",
      },
      {
        name: "RawgAPI",
        color: "green-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://frabjous-clafoutis-b2540c.netlify.app/",
  },
  {
    name: "CarHub App",
    description:
      "Revolutionize your car rental experience with a modern web app featuring secure Google Sign-In, advanced search, and complemented by meticulously designed car cards for user-friendly information.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind ",
        color: "pink-text-gradient",
      },
    ],
    image: car,
    source_code_link: "https://car-app-vert.vercel.app/",
  },
  {
    name: "YouTube App",
    description:
      "Crafted a captivating app mirroring YouTube's interface, delivering an immersive video experience with rich content, featuring stunning video sections, custom categories, channel pages, and seamless video playback, Seamlessly responsive across all devices..",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI5",
        color: "pink-text-gradient",
      },
    ],
    image: youtubeclone,
    source_code_link: "https://youtube-clone-app-anoud.netlify.app/",
  },

  {
    name: "iPhone 15 pro UI",
    description:
      "  A completely responsive and high-performance website, With custom animations, a video slider with progress tracking, and animated 3D models, explore the future of mobile technology with seamless performance and captivating visuals.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "THREEJS",
        color: "green-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },

      {
        name: "Tailwind ",
        color: "pink-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://iphone15ui.netlify.app/",
  },
  {
    name: "Brainwave AI UI",
    description:
      " embodies sleek modernity, featuring dynamic parallax effects and innovative bento box layouts. Seamlessly responsive across all devices. Dive into a world where cutting-edge design meets intuitive functionality, providing an unparalleled user experience that's as beautiful as it is efficient.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },

      {
        name: "Tailwind ",
        color: "pink-text-gradient",
      },
    ],
    image: brainwave,
    source_code_link: "https://brainwave-ai-anoud.netlify.app/",
  },
  {
    name: "Fitness Exercises App",
    description:
      "Elevate your fitness journey with a dynamic app showcasing exercise categories, specific muscle groups, pagination, detailed exercise info, YouTube video integration, and personalized recommendations for similar exercises.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "RapidAPI",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI5",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://astonishing-tiramisu-7184f9.netlify.app/",
  },

  {
    name: "Nike UI",
    description:
      "Elevate your shopping experience with a dynamic app, offering a visually appealing interface for product exploration, real-time trends, and upcoming user customization options for a personalized journey,Seamlessly responsive across all devices.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },

      {
        name: "Tailwind ",
        color: "pink-text-gradient",
      },
    ],
    image: niky,
    source_code_link: "https://niky-shoes.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
