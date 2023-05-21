import { BiHomeAlt, BiUser, BiBookContent, BiEnvelope,  } from "react-icons/bi";
import { AiOutlineFile, AiFillHtml5, AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineFacebook } from "react-icons/ai";
import { SiTailwindcss, SiCss3, SiJavascript, SiFirebase, SiAdobephotoshop  } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { MdDraw } from "react-icons/md";

import project1 from "../assets/graphicsproject/project1.jpg";
import project2 from "../assets/graphicsproject/project2.jpg";
import project3 from "../assets/graphicsproject/project3.jpg";
import project4 from "../assets/graphicsproject/project4.jpg";
import project5 from "../assets/graphicsproject/project5.jpg";
import project6 from "../assets/graphicsproject/project6.jpg";
import project7 from "../assets/graphicsproject/project7.jpg";
import project8 from "../assets/graphicsproject/project8.jpg";
import project9 from "../assets/graphicsproject/project9.jpg";
import project10 from "../assets/graphicsproject/project10.jpg";
import project11 from "../assets/graphicsproject/project11.jpg";
import project12 from "../assets/graphicsproject/project12.jpg";

import bandsite from "../assets/webproject/band-site.PNG";
import contact from "../assets/webproject/contact-app.PNG";
import dispezo from "../assets/webproject/dispezo.PNG";


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
    navLinksIcons: <AiOutlineFile  />,
    navLinksRef: "resume",
  },
  {
    navLinkText: "Projects",
    navLinksIcons:  <BiBookContent />,
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
  { type: "Website", value: "  www.example.com", id: "d4" },
  { type: "Email", value: "  judeebekes67@gmail.com", id: "d5" },
  { type: "City", value: "  New York, USA", id: "d6" },
  { type: "Freelance", value: "  Available", id: "d7" },
];

export const skillSet = [
  { id: "s1", icon: <AiFillHtml5 />, name: "HTML5", color: "text-html", hovercolor: "hover:text-html", link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5" },
  { id: "s2", icon:<SiCss3 />, name: "CSS3", color: "text-css", hovercolor: "hover:text-css", link: "https://developer.mozilla.org/en-US/docs/Web/CSS"},
  { id: "s3", icon: <SiJavascript />, name: "JavaScript", color: "text-js", hovercolor: "hover:text-js", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
  { id: "s4", icon: <RiReactjsFill />, name: "Reactjs", color: "text-react", hovercolor: "hover:text-react", link: "https://react.dev/" },
  { id: "s5", icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-tail", hovercolor: "hover:text-tail", link: "https://v2.tailwindcss.com/docs"},
  { id: "s6", icon: <SiFirebase />, name: "Firebase", color: "text-fire", hovercolor: "hover:text-fire", link: "https://firebase.google.com/docs"},
  { id: "s7", icon: <MdDraw />, name: "CorelDraw", color: "text-corel", hovercolor: "hover:text-corel", link: "https://learn.corel.com/tutorials/coreldraw-document-setup/"},
  { id: "s8", icon: <SiAdobephotoshop />, name: "Photoshop", color: "text-photo", hovercolor: "hover:text-photo", link: "https://helpx.adobe.com/photoshop/user-guide.html"},
];

export const graphicsProjectImage = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
];

export const webProjectImage = [
  {
    id: 'web2',
    image: contact,
    title: "Organisation Contact App",
    description: "Organisation Contact App was built with ReactJS and Tailwind CSS, the app allows users to create a contact card which includes name, age and position. A filter system was added to the app, users details can be edited, and contact cards can also be deleted. To store and retrieve users info, Firebase Realtime database was used.",
    url: "https://org-member-info-app.vercel.app/",
    github: "https://github.com/judeebeke/a_react_contact_app",
  },
  {
    id: 'web1',
  image: bandsite,
  title: "Z-Band",
  description: "Z-Band is a fictional Band Website built with HTML, CSS, JS, and Bootstrap. In order to understand and practice responsiveness in web development, this project was taken.",
  improvement: "In the future, better design can be made for the website with better frontend development tools. And all the site page will be completely built.",
  url: "https://z-bandsite.netlify.app/",
  github: "https://github.com/judeebeks/MusicBandSite",
},
{
  id: 'web3',
  image: dispezo,
  title: "Dispezo Chat App",
  description: "This is a mini chat app (unstable version) built with interesting features, such as, create room, join existing room (if room id and passcode are provided to user by room creator), room creators can delete rooms they created (this core feature is yet to be implemented), and interesting user experience. This app is been built with ReactJS, Tailwind CSS, and Firebase services was leveraged for the backend, such as authentication, authorisation, user's chats storage.",
  improvement: "Improvements can be made on the app, such as, authentication and authorisation, and improved user interface.",
  url: "https://despezo.netlify.app/",
  github: "https://github.com/judeebeke/dispezo-app",
}
];
