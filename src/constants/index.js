import { backend, carrent, creator, css, docker, figma, git, html, javascript, jobit, meta, mobile, mongodb, nodejs, reactjs, redux, shopify, starbucks, tailwind, tesla, threejs, tripguide, typescript, web } from "../assets";

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
        title: "MongoDB",
        icon: web,
    },
    {
        title: "Express.js",
        icon: mobile,
    },
    {
        title: "React",
        icon: backend,
    },
    {
        title: "Node.js",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
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
        title: "Merchant Marine, Deckhand",
        company_name: "Blue & Gold Fleet",
        icon: reactjs,
        iconBg: "#e5e5e5",
        date: "2009 - 2013",
        points: [
            "Proficiently executed deck operations, including mooring, anchoring, and cargo handling, while strictly adhering to safety protocols and maritime regulations.",
            "Worked seamlessly as part of a team to achieve efficient and effective shipboard operations, including navigation, maintenance, and emergency response.",
            "Communicated effectively with officers, crew members, and superiors to ensure smooth sailing and rapid response to any operational challenges.",
            "Demonstrated the ability to remain calm and take decisive actions during emergencies, such as fire drills, man-overboard situations, and water rescues in adverse weather conditions.",
        ],
    },
    {
        title: "Marine Engineer",
        company_name: "Blue & Gold Fleet",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "2014 - 2016",
        points: [
            "I was responsible for the maintenance of all the boats in the fleet, at the time there was a total of 17 vessels.",
            "Maintenance included electrical systems, plumbing systems, interior, exterior, engines, generators, and all safety and emergency equipment.",
            "We always worked in groups of 2-4 people, depending on the size of the job. Working well and getting along with others was paramount to the job.",
            "Selected by supervisor for engine rebuild project, successfully leading a smooth and on-time completion, demonstrating strong problem-solving skills and ability to handle high-pressure situations.",
        ],
    },
    {
        title: "School Custodian",
        company_name: "Elk Grove Unified School District",
        icon: shopify,
        iconBg: "#383E56",
        date: "2016 - 2018",
        points: [
            "Consistently strived to ensure both the school and grounds were meticulously maintained according to the state and federal guidelines.",
            "Focused on keeping an open line of communication with coworkers, staff, and students, this collaboration allowed for a productive workflow.",
            "Contribute to the safety and security of the school by promptly reporting any safety hazards, damaged property, or suspicious activities to the appropriate authorities.",
            "Flexibility in work hours, to accommodate school schedules, evening events, or weekly sporting events.",
        ],
    },
    {
        title: "Coding Bootcamp",
        company_name: "U.C. Berkeley Extension, San Francisco",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "2019 - Present",
        points: [
            "Completed a 24-Week intensive program focused on gaining technical programming skills. Course includes: HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, and ReactJS.",
            "Collaborating with other developers to create high-quality projects.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Continuously adapting to rapid technological advancements, I maintain a perpetual commitment to learning, embracing the mindset of a lifelong student.",
        ],
    },
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
        name: "Article Summarizer",
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
        name: "Space Travel",
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
        name: "Solar Planetary",
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