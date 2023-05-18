import {useRef, useEffect} from 'react'
import { socialLinks } from "../../localstore/LocalData";
import { hoverLinkTransition } from "../../../style";
import Typed from 'typed.js';

const Hero = () => {
  const elementTyped = useRef(null);

  useEffect(() => {
    const typed = new Typed(elementTyped.current, {
      strings: ['Frontend Web Developer', 'Graphics Designer'],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1 className="text-7xl text-dark font-bold">Jude Ebeke</h1>
        <p className="text-3xl text-lowDark">I&apos;m a <span className="text-main" ref={elementTyped}></span></p>
        <ul className="flex gap-x-10">
          {socialLinks.map((link) => {
            return <li className={`text-3xl hover:text-main ${hoverLinkTransition}`} key={link.id}><a href={link.socialNetwork} target='_blank' rel="noreferrer">{link.socialIcons}</a></li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
