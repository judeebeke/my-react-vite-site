import { BiHomeAlt, BiUser, BiBookContent, BiEnvelope } from "react-icons/bi";
import {
  AiOutlineFile,
  AiFillHtml5,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from "react-icons/ai";
import {
  SiTailwindcss,
  SiCss3,
  SiJavascript,
  SiFirebase,
  SiAdobephotoshop,
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { MdDraw } from "react-icons/md";
import {TbBrandNextjs} from "react-icons/tb";

import project1 from "../assets/graphicsproject/project1.jpg";
import project2 from "../assets/graphicsproject/project2.jpg";
import project3 from "../assets/graphicsproject/project3.jpg";
import project4 from "../assets/graphicsproject/project4.jpg";
import project5 from "../assets/graphicsproject/project5.jpg";
import project6 from "../assets/graphicsproject/project6.jpg";
import project7 from "../assets/graphicsproject/project7.jpg";
import project8 from "../assets/graphicsproject/project8.jpg";
import project9 from "../assets/graphicsproject/project9.jpg";
import project11 from "../assets/graphicsproject/project11.jpg";
import project12 from "../assets/graphicsproject/project12.jpg";
import project13 from "../assets/graphicsproject/project13.jpg";
import project14 from "../assets/graphicsproject/project14.jpg";

import cert1 from "../assets/resume/certificate.png";
import cert2 from "../assets/resume/certificate2.png";
import cert3 from "../assets/resume/certificate3.jpg";

import foodOrderApp from "../assets/webproject/food-order-app.PNG";
import contact from "../assets/webproject/contact-app.PNG";
import dispezo from "../assets/webproject/dispezo.PNG";
import sammy from "../assets/webproject/sammy-store.PNG";
import todo from "../assets/webproject/todo-app.PNG";
import openFashion from "../assets/webproject/open-fashion.PNG";

export const certificates = [
  {
    id: "cert1",
    cert: cert1,
    title: "GDSC - Web Animations Using JavaScript 7-Days Bootcamp Certificate",
  },
  {
    id: "cert2",
    cert: cert2,
    title:
      "DEVTOWN - Web Animations Using JavaScript 7-Days Bootcamp Certificate",
  },
  {
    id: "cert3",
    cert: cert3,
    title: "SDE Arts - Git, Github and Markdown Crash Course",
  },
];

export const socialLinks = [
  {
    id: "git",
    socialNetwork: "https://github.com/judeebeke",
    socialIcons: <AiOutlineGithub />,
  },
  {
    id: "linkIn",
    socialNetwork: "https://www.linkedin.com/in/jude-ebeke-b67813223",
    socialIcons: <AiOutlineLinkedin />,
  },
  {
    id: "twit",
    socialNetwork: "https://twitter.com/techie_genie",
    socialIcons: <AiOutlineTwitter />,
  },
  {
    id: "facebook",
    socialNetwork: "https://www.facebook.com/profile.php?id=100070522303715",
    socialIcons: <AiOutlineFacebook />,
  },
];

export const navLinks = [
  {
    navLinkText: "Home",
    navLinksIcons: <BiHomeAlt />,
    navLinksRef: "home",
  },
  {
    navLinkText: "About",
    navLinksIcons: <BiUser />,
    navLinksRef: "about",
  },
  {
    navLinkText: "Resume",
    navLinksIcons: <AiOutlineFile />,
    navLinksRef: "resume",
  },
  {
    navLinkText: "Projects",
    navLinksIcons: <BiBookContent />,
    navLinksRef: "project",
  },
  {
    navLinkText: "Contacts",
    navLinksIcons: <BiEnvelope />,
    navLinksRef: "contact",
  },
];

export const personalData = [
  { type: "Phone", value: "  +234 902 3176 326", id: "d3" },
  { type: "Website", value: "  https://ebekesjude.vercel.app", id: "d4" },
  { type: "Email", value: "  judeebekes67@gmail.com", id: "d5" },
  { type: "City", value: "  Abuja, Nigeria", id: "d6" },
  { type: "Freelance", value: "  Available", id: "d7" },
];

export const skillSet = [
  {
    id: "s1",
    icon: <AiFillHtml5 />,
    name: "HTML5",
    color: "text-html",
    hovercolor: "text-html",
    link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
  },
  {
    id: "s2",
    icon: <SiCss3 />,
    name: "CSS3",
    color: "text-css",
    hovercolor: "text-css",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: "s3",
    icon: <SiJavascript />,
    name: "JavaScript",
    color: "text-js",
    hovercolor: "text-js",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "s4",
    icon: <RiReactjsFill />,
    name: "Reactjs",
    color: "text-react",
    hovercolor: "text-react",
    link: "https://react.dev/",
  },
  {
    id: "s5",
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
    color: "text-tail",
    hovercolor: "text-tail",
    link: "https://v2.tailwindcss.com/docs",
  },
  {
    id: "s6",
    icon: <SiFirebase />,
    name: "Firebase",
    color: "text-fire",
    hovercolor: "text-fire",
    link: "https://firebase.google.com/docs",
  },
  {
    id: "s7",
    icon: <MdDraw />,
    name: "CorelDraw",
    color: "text-corel",
    hovercolor: "text-corel",
    link: "https://learn.corel.com/tutorials/coreldraw-document-setup/",
  },
  {
    id: "s8",
    icon: <SiAdobephotoshop />,
    name: "Photoshop",
    color: "text-photo",
    hovercolor: "text-photo",
    link: "https://helpx.adobe.com/photoshop/user-guide.html",
  },
  {
    id: "s9",
    icon: <TbBrandNextjs />,
    name: "NextJS",
    color: "text-next",
    hovercolor: "text-next",
    link: "https://nextjs.org/docs",
  },
];

export const graphicsProjectImage = [
  {
    original: project1,
  },
  {
    original: project2,
  },
  {
    original: project3,
  },
  {
    original: project4,
  },
  {
    original: project5,
  },
  {
    original: project6,
  },
  {
    original: project7,
  },
  {
    original: project8,
  },
  {
    original: project9,
  },
  {
    original: project11,
  },
  {
    original: project12,
  },
  {
    original: project13,
  },
  {
    original: project14,
  },
];

export const webProjectImage = [
  // {
  //   id: "web4",
  //   image: contact,
  //   title: "Organisation Contact App",
  //   description:
  //     "Organisation Contact App was built with ReactJS and Tailwind CSS, the app allows users to create a contact card which includes name, age and position. A filter system was added to the app, users details can be edited, and contact cards can also be deleted. To store and retrieve users info, Firebase Realtime database was used.",
  //   improvement:
  //     "Improvements can be made on the app, such as, authentication and authorisation, and improved user interface.",
  //   url: "https://org-member-info-app.vercel.app/",
  //   github: "https://github.com/judeebeke/a_react_contact_app",
  // },
  {
    id: "web3",
    image: sammy,
    title: "Sammy Store",
    description:
      "Sammy Store a website built for Sammy Store to showcase the store's Products and all a visitor needs to know about Sammy Store. The website was built with HTML, CSS & Bootstrap, and JavaScript",
    improvement:
      "Improvements can be made on the websites backend to accept orders and contact request from site visitors",
    url: "https://sammy-store.vercel.app/",
    github: "https://github.com/judeebeke/Sammy-Store",
  },
  // {
  //   id: "web2",
  //   image: dispezo,
  //   title: "Dispezo Chat App",
  //   description:
  //     "This is a mini chat app (version 1.1) built with interesting features, such as, create room, join existing room (if room id and passcode are provided to user by room creator), room creators can delete room chats, and interesting user experience. This app is been built with ReactJS, Tailwind CSS, and Firebase services was leveraged for the backend, such as authentication, authorisation, user's chats storage.",
  //   improvement: "nil",
  //   url: "https://despezo.netlify.app/",
  //   github: "https://github.com/judeebeke/dispezo-app",
  // },
  {
    id: "web5",
    image: todo,
    title: "Todo App",
    description:
      "This is a mini Todo app built with ReactJS, the full CRUD functionality was applied in the app where users are able to create, read, update and delete todos. Localstorage was use as alternative of database.",
    improvement:
      "Improvements can be made on the backend, Firebase Realtime Database can be used instead of Browser's Localstorage, this means authentication and authorization should be implemented to give authorized and authenticated users access to their data.",
    url: "https://megatodoapp.vercel.app/",
    github: "https://github.com/judeebeke/todo-app",
  },
  {
    id: "web1",
    image: openFashion,
    title: "Open Fashion ",
    description:
      "An E-commerce Application (Mobile First & Frontend Only) built with React Js, Tailwind CSS for UI, Redux for state management, React Router for routing and other libraries for smooth and interactive user experience.",
    improvement: "nil",
    url: "https://open-fashion.netlify.app/",
    github: "https://github.com/judeebeke/open-fashion-store",
  },
  {
    id: "web6",
    image: foodOrderApp,
    title: "Mini Food Order App",
    description:
      "A Basic Food Order Application developed with React, HTML, CSS, React Reducer and Context API, and Firebase.",
    improvement:
      "Authentication and Authorization feature can be added.",
    url: "https://demo-food-order-app.netlify.app/",
    github: "https://github.com/judeebeke/food-order-app",
  },
];
