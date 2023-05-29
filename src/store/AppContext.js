import { createContext } from "react";

const portfolioContext = createContext({
    isMobileMenuActive: null,
    closeMobileActiveHandler: ()=>{},
      openMobileActiveHandler: ()=>{}
});

export default portfolioContext;