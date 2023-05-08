import React from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Episode from "./components/Episode";
import Jacob from "./components/Jacob";
import Sub from "./components/Sub";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="bg-[#181818]">
            <Header/>
            <div className="container">
                <Hero/>
                <Episode/>
                <Jacob/>
                <Sub/>
                <Reviews/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
