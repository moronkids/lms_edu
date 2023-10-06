import React, { useState, createContext } from "react";
export const Hooks = createContext();
const Index = props => {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState(null);
  const [idSession, setIdSession] = useState(null)
  const [idLesson, setIdLesson] = useState(null)
  const [dataSession, setDataSession] = useState([
    {
       id: `dummy`,
      content: `dummy`,
      answers: [`dummy-1`, `dummy-2`],
    }
  ])
  const value = {
    modal,
    setModal,
    type, setType,
    dataSession, setDataSession,
    idSession, setIdSession,
    idLesson, setIdLesson
  };

  return <Hooks.Provider value={value}>{props?.children}</Hooks.Provider>;
};

export default Index;
