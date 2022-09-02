import './App.css';
import React, {useState} from "react";
import {Navigate, Route, Router, Routes} from "react-router-dom";
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
            <Routes>
                <Route path={process.env.PUBLIC_URL + '/'} element={<MainPage/>}/>
                <Route path={process.env.PUBLIC_URL + '/stock'} element={<Stock/>}/>
                <Route path={process.env.PUBLIC_URL + '/poster'} element={<Poster/>}/>
                <Route path={process.env.PUBLIC_URL + '/organizers'} element={<Organizers/>}/>
                <Route path={process.env.PUBLIC_URL + '/projects'} element={<Projects/>}/>
                <Route path={process.env.PUBLIC_URL + '/partners'} element={<Partners/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
