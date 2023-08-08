import { createContext } from "react"
import useLocalStorage from "../Hooks/useLocalStorage.js";

export const NovelContext = createContext();

const NovelProvider = ({ children }) => {
  const [novels, setNovels] = useLocalStorage('novels', []);

  const value = { novels, setNovels }

  return (
    <NovelContext.Provider value={value}>
      {children}
    </NovelContext.Provider>
  )
}

export default NovelProvider