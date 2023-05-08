import React from 'react';
import Img from "../../img/jigit.png"
import one from "../../img/1.svg"
import two from "../../img/2.svg"
import three from "../../img/3.svg"
import four from "../../img/4.svg"
import five from "../../img/5.svg"



const Hero = () => {
    return (
            <div className="flex justify-between items-center pt-[50px]">
                <img src={Img} alt="img"/>
                <div>
                    <h1 className="text-white font-bold text-6xl">Take your <br/> podcast to the <br/> next level</h1>
                    <div className="pt-[60%]">
                        <p className="text-white text-2xl my-3">Listen on</p>
                        <div className="flex ">
                            <img src={one} alt="" className="mx-2"/>
                            <img src={two} alt="" className="mx-2"/>
                            <img src={three} alt="" className="mx-2"/>
                            <img src={four} alt="" className="mx-2"/>
                            <img src={five} alt="" className="mx-2"/>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Hero;