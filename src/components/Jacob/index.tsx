import React from 'react';
import {BsArrowRight} from "react-icons/bs";
import IMAGE from "../../img/IMAGE.png"

const Jacob = () => {
    return (
        <div className="flex justify-between items-center py-[150px]">
            <div>
                <div className="bg-blue-400 w-[60px] h-[60px] rounded-[50%] flex justify-center items-center">
                    <BsArrowRight className="font-bold text-3xl text-white"/>
                </div>
                <p className="text-blue-500 py-[25px]">Meet your host</p>
                <h1 className="text-white font-bold text-6xl">Jacob Paulaner</h1>
                <p className="py-[40px] text-white">Jacob has a background in audio engineering, and has <br/> been podcasting since the early days.</p>
                <p className="text-white">He’s here to help you level up your game by sharing <br/> everything he’s learned along the way.</p>
            </div>
            <img src={IMAGE} alt="img"/>
        </div>
    );
};

export default Jacob;