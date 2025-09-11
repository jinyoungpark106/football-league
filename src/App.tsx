import './App.css'
import { Routes, Route } from "react-router-dom";
import {Header} from "./components/Header.tsx";
import Matches from "./components/Matches.tsx";
import Standings from "./components/Standings.tsx";
import Stats from "./components/Stats.tsx";
import Players from "./components/Players.tsx";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path={'/'} element={<Matches/>}/>
        <Route path={'standings'} element={<Standings/>}/>
        <Route path={'stats'} element={<Stats/>}/>
        <Route path={'players'} element={<Players/>}/>
      </Routes>
    </div>
  )
}

export default App
