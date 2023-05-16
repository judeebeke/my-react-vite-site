import {  Fragment } from "react";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Layout/desktop/Hero";
// import { ScaleLoader } from "react-spinners";

import DesktopNav from "./components/navigation/DesktopNav";
import About from "./components/Layout/About";
import Facts from "./components/Layout/Facts";
import Resume from "./components/Layout/Resume";
import PastProjects from "./components/Layout/PastProjects";
import MobileNav from "./components/navigation/MobileNav";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   window.addEventListener("load", () => {
  //     return setLoading(false);
  //   });

  //   return () => {
  //     window.removeEventListener("load", () => {
  //       return setLoading(false);
  //     });
  //   };
  // }, []);

  return (
    
        <Fragment>
          <DesktopNav />
          <MobileNav />
          <Layout>
            <Hero />
            <About />
            <Facts />
            <Resume />
            <PastProjects />
          </Layout>
        </Fragment>  
  );
}

export default App;
