import { useState, useEffect, Fragment, useContext } from "react";
import { ScaleLoader } from "react-spinners";
import {BsMoonStars, BsSun} from 'react-icons/bs';
import AOS from "aos";

import Layout from "./components/Layout/Layout";
import Hero from "./components/Layout/desktop/Hero";
import DesktopNav from "./components/navigation/DesktopNav";
import About from "./components/Layout/About";
import Facts from "./components/Layout/Facts";
import Resume from "./components/Layout/Resume";
import PastProjects from "./components/Layout/PastProjects";
import MobileNav from "./components/navigation/MobileNav";
import Testimonial from "./components/Layout/Testimonial";
import Contact from "./components/Layout/Contact";
import Footer from "./components/Layout/Footer";
import ScrollToTopButton from "./components/UI/ScrollToTopButton";
import portfolioContext from "./store/AppContext";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const htmlEl = document.getElementById('htmlElement') 
  const bodyEl = document.getElementById('bodyElement') 

  const {isMobileMenuActive} = useContext(portfolioContext)

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });

   let loaderSetTimeout =setTimeout(() =>{
      setLoading(false)
    }, 1500)

    const dark_Mode = JSON.parse(localStorage.getItem('dark-mode'))

    if(dark_Mode !== null) {
      setDarkMode(dark_Mode.dark)
    }



    return (() => {
      clearTimeout(loaderSetTimeout)
    })
  }, []);

  const darkModeHandler = () => {
    setDarkMode(true)
    htmlEl.classList.add('dark');
    bodyEl.classList.add('darkMode');
    localStorage.setItem('dark-mode', JSON.stringify({dark: true}))
  }

  const lightModeHandler = () => {
    setDarkMode(false)
    htmlEl.classList.remove('dark')
    bodyEl.classList.remove('darkMode');
    localStorage.setItem('dark-mode', JSON.stringify({dark: false})) 
  }

  return (
      <>
       {loading ? <div className="flex h-screen justify-center items-center">
          <ScaleLoader color="#0678E3" size={100} />
        </div> :
        <Fragment>
          {darkMode ? <button className={`fixed cursor-pointer z-40 ${isMobileMenuActive ? "top-20" : "top-8"} lg:top-8 right-5 text-2xl font-extrabold text-white`}onClick={lightModeHandler}><BsSun /></button> : <button className={`fixed cursor-pointer z-40 ${isMobileMenuActive ? "top-20" : "top-8"} lg:top-8  right-5 text-2xl font-extrabold`} onClick={darkModeHandler}><BsMoonStars /></button>}
          <DesktopNav />
          <MobileNav />
          <Layout>
            <Hero />
            <About />
            <Facts />
            <Resume />
            <PastProjects />
            <Testimonial />
            <Contact />
            <Footer />
            <ScrollToTopButton />
          </Layout>
        </Fragment>}
      </>
      )
}

export default App;
