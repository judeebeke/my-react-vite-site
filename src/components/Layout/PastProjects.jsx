import  { useState } from 'react';
import Heading from '../UI/Heading';
import { sectionParaStyles, hoverLinkTransition } from '../../style';
import GraphicsDesignProjects from '../projects/GraphicsDesignProjects';
import WebDevProjects from '../projects/WebDevProjects';

const PastProjects = () => {
  const [activeProjectView, setActiveProjectView] = useState('web');

    const projectStyles = `font-semibold text-lg hover:text-main`;
  return (
    <section className='section dark:bg-dark dark:text-white' id="project" data-aos="flip-left" data-aos-duration="2000" data-aos-easing="ease-out-cubic">
      <Heading headingTitle="PORTFOLIO" />
        <p className={sectionParaStyles}>Welcome to my portfolio section! Here, you&apos;ll find a collection of my finest work that showcases my skills as a frontend web developer and graphics designer. Each project reflects my passion for creating exceptional user experiences and visually stunning designs. Explore the gallery to see how I blend creativity and technology to bring ideas to life. I&apos;m excited to share my journey with you and discuss how we can collaborate on your next project. Let&apos;s make something amazing together!</p>
        <div className='flex flex-row gap-x-4 pt-8'>
            <button className={`p-2 rounded-full border border-main ${projectStyles} ${hoverLinkTransition} ${activeProjectView === 'web' ? "text-white bg-main hover:text-main hover:bg-white dark:hover:bg-dark" : "text-lowDark dark:text-white hover:text-white hover:bg-main dark:hover:bg-main"}`} onClick={()=> {setActiveProjectView("web")}}>WEB DEV</button>
            <button className={`p-2 rounded-full border border-main ${projectStyles} ${hoverLinkTransition} ${activeProjectView === 'graphics' ? "bg-main text-white hover:text-main hover:bg-white dark:hover:bg-dark" : "text-lowDark dark:text-white hover:text-white hover:bg-main dark:hover:bg-main"}`} onClick={()=> {setActiveProjectView("graphics")}}>GRAPHICS DESIGN</button>
        </div>
        <section>
        {activeProjectView === 'web' && <WebDevProjects />}
        {activeProjectView === 'graphics' && <GraphicsDesignProjects />}
        </section>
    </section>
  )
}

export default PastProjects;
