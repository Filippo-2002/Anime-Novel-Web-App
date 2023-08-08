import React, { useState, createContext } from "react";
import {useContext} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav/Nav.js";
import Anime from "./Anime/Anime.js";
import NovelsHeader from "./Novels/NovelsHeader.js";
import ListNovel from "./Novels/ListNovel.js";
import AddNovel from "./Novels/AddNovel.js";
import EditNovel from "./Novels/EditNovel.js";
import NovelProvider from "./Novels/Context/NovelContext.js";
import "./Styles/app.css"

export const AnimeContext = createContext(); 

const App = () => {
  const [animeData,setAnimeData] = useState(); 

  return (
    <AnimeContext.Provider value={{ animeData, setAnimeData }}> 

    <Router >
      <NovelProvider>
      <Nav/>
      <Routes>
        <Route path="/" element={<Anime />} />
        <Route path="/novels" element={<NovelsHeader />}> 
          <Route path="/novels/list" element={<ListNovel />}/>
          <Route path="/novels/add" element={<AddNovel />}/>
          <Route path='/novels/edit/:id' element={<EditNovel />} />
        </Route>
      </Routes>
      </NovelProvider>
    </Router>
    </AnimeContext.Provider>
  );
};

export default App;

