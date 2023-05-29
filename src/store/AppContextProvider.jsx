import { useState } from "react";
import portfolioContext from "./AppContext";
import PropTypes from 'prop-types';


const PortfolioContextProvider = ({children}) => {

  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);


    const closeMobileActiveHandler = () => {
      setIsMobileMenuActive(false)
    }

    const openMobileActiveHandler = () => {
      setIsMobileMenuActive(true)
    }

    const appContext = {
      isMobileMenuActive,
      closeMobileActiveHandler,
      openMobileActiveHandler
    }

  return (
    <portfolioContext.Provider value={appContext}>{children}</portfolioContext.Provider>
  );
};

PortfolioContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}


export default PortfolioContextProvider;