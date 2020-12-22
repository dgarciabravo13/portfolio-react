import React, {createContext, useState} from 'react';
import {resumeJson} from './../resumeJson';

export const PortfolioContext = createContext();

const PortfolioContextProvider = (props) => {
  const [resume, setResume] = useState(resumeJson);



  return(
    <PortfolioContext.Provider value={{resume,setResume}}>
      {props.children}
    </PortfolioContext.Provider>
  );
}

export default PortfolioContextProvider;

