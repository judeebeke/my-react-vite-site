import { useState } from "react";
import portfolioContext from "./AppContext";
import PropTypes from 'prop-types';


const PortfolioContextProvider = ({children}) => {

    const [darkMode, setDarkMode] = useState(false);

    const setDarkModeHandler = () => {
        setDarkMode(prev => !prev)
    }

    const appContext = {
        darkMode,
        changeDisplay: setDarkModeHandler,
    }

  return (
    <portfolioContext.Provider value={appContext}>{children}</portfolioContext.Provider>
  );
};

PortfolioContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}


export default PortfolioContextProvider;