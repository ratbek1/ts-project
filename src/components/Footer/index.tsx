import React from 'react';
import {AiOutlineInstagram} from "react-icons/ai";
import {CiFacebook, CiTwitter} from "react-icons/ci";
import one from "../../img/1.svg";
import two from "../../img/2.svg";
import three from "../../img/3.svg";
import four from "../../img/4.svg";
import five from "../../img/5.svg";

const Footer = () => {
    return (
        <div className="flex justify-between text-white items-start pb-[100px]">
            <div>
                <h1 className="font-bold text-4xl pb-2">Castaway</h1>
                <div className="flex text-2xl">
                    <a href="https://www.instagram.com/"><AiOutlineInstagram/></a>
                    <a href="https://twitter.com/?lang=ru"><CiTwitter/></a>
                    <a href="https://ru-ru.facebook.com/"><CiFacebook/></a>
                </div>
            </div>
            <div className="flex flex-col">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Episodes</a>
                <a href="#">Contact</a>
            </div>
            <div className="flex flex-col">
                <a href="#">Style Guide</a>
                <a href="#">Instructions</a>
                <a href="#">Changelog</a>
                <a href="#">Credit</a>
                <a href="#">Powered by Webflow</a>
                <a href="#">Licenses</a>
            </div>
            <div className="flex">
                <img src={one} alt="" className="mx-2"/>
                <img src={two} alt="" className="mx-2"/>
                <img src={three} alt="" className="mx-2"/>
                <img src={four} alt="" className="mx-2"/>
                <img src={five} alt="" className="mx-2"/>
            </div>
        </div>
    );
};

export default Footer;