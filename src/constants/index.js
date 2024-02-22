import { backend, carrent, creator, css, docker, figma, git, html, javascript, jobit, meta, mobile, mongodb, nodejs, reactjs, redux, shopify, starbucks, tailwind, tesla, threejs, tripguide, typescript, web, xillow } from "../assets";

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
        iconBg: "#00ffff",
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
        iconBg: "#56ccf2",
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
        iconBg: "#2f80ed",
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
        iconBg: "#003A99",
        date: "2019 - Present",
        points: [
            "Completed a 24-Week intensive program focused on gaining technical programming skills. Course includes: HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, and ReactJS.",
            "Collaborating with other developers to create high-quality projects.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Continuously adapting to rapid technological advancements, I maintain a perpetual commitment to learning, and embracing the mindset of a lifelong student.",
        ],
    },
];

    const projects = [
    {
        name: "xillow",
        description:
            "The AI Summarizer app. Go to any article webpage of your choosing and copy the URL and enter it into the app and the bot will summarize and return the article to you in a shorter and more concise version of the article.",
        tags: [
        {
            name: "react",
            color: "blue-text-gradient",
        },
        {
            name: "OpenAI",
            color: "green-text-gradient",
        },
        {
            name: "tailwind",
            color: "pink-text-gradient",
        },
        ],
        image: xillow,
        source_code_link: "https://mern-xillow.onrender.com/",
    },
    {
        name: "Article Summarizer",
        description:
            "A real Estate app that lets you search for homes on the market and you can also list your home.",
        tags: [
        {
            name: "react",
            color: "blue-text-gradient",
        },
        {
            name: "OpenAI",
            color: "green-text-gradient",
        },
        {
            name: "tailwind",
            color: "pink-text-gradient",
        },
        ],
        image: carrent,
        source_code_link: "https://github.com/ngumartin/AI-Article-Summarizer",
    },
    {
        name: "Space Tour",
        description:
            "The space tour website shows the different tour options the space agency offers. It shows the different crew members, certain planets you can traverse to, and the rockets and spaceships that are used for the journey.",
        tags: [
        {
            name: "HTML",
            color: "blue-text-gradient",
        },
        {
            name: "CSS",
            color: "green-text-gradient",
        },
        {
            name: "Javascript",
            color: "pink-text-gradient",
        },
        ],
        image: jobit,
        source_code_link: "https://github.com/ngumartin/Space-Tour-Agency",
    },
    {
        name: "Solar Planetary",
        description:
            "I built this to showcase some of my CSS skills and because of my wonder and curiosity for the universe we occupy. This webpage was built with HTML, CSS, and Visual Studio Code. As you can observe three planets orbiting the sun within the immense expanse of the galaxy among the stars.",
        tags: [
        {
            name: "HTML",
            color: "blue-text-gradient",
        },
        {
            name: "CSS",
            color: "green-text-gradient",
        },
        {
            name: "VSCode",
            color: "pink-text-gradient",
        },
        ],
        image: tripguide,
        source_code_link: "https://github.com/ngumartin/Solar-Planetary",
    },
];

export { services, technologies, experiences, projects };