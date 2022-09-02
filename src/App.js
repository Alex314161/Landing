import './App.css';
import React, {useState} from "react";
import {Route, Router, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Stock from "./components/menu/menu-stock/Stock";
import Poster from "./components/menu/menu-afisha/afisha";
import Organizers from "./components/menu/menu-organizers/organizers";
import Projects from "./components/menu/menu-projects/Projects";
import Partners from "./components/menu/menu-partners/Partners";

function App() {
    const [showResult, setShowResult] = useState(true);

    return (
        <div className="App">
            <Header showResult={showResult} setShowResult={setShowResult}/>
            <Router>
                <Route path="/Landing/" exact element={<MainPage/>}/>
                <Route path="/Landing/stock" exact element={<Stock/>}/>
                <Route path="/Landing/poster" exact element={<Poster/>}/>
                <Route path="/Landing/organizers" exact element={<Organizers/>}/>
                <Route path="/Landing/projects" exact element={<Projects/>}/>
                <Route path="/Landing/partners" exact element={<Partners/>}/>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
