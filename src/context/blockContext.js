import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BlockContext = createContext({});

export const BlockContexProvider = ({ children }) => {
  const [codeBlocks, setCodeBlocks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // await axios.get(`http://localhost:5000/`)
      await axios.get(`https://moveo-mayabyle.onrender.com`)
        .then((res) => setCodeBlocks(res.data))
        .catch((err) => console.log(err))
    };
    fetchData()
  }, [])

  return (
    <BlockContext.Provider value={ codeBlocks }>
      {children}
    </BlockContext.Provider>
  );
};