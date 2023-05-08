import React from 'react';
import stars from "../../img/stars.svg"

const Reviews = () => {
    return (
        <div className="py-[150px]">
            <div className="flex justify-between">
                <div className="bg-black py-[54px] px-[25px] w-[300px] text-white rounded-2xl">
                    <div className="flex">
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                    </div>
                    <h2 className="text-2xl py-2">I can’t recommend <br/> this podcast <br/> enough</h2>
                    <h3 className="text-gray-500">Betty Lacey</h3>
                </div>
                <div className="bg-black py-[54px] px-[25px] w-[300px] text-white rounded-2xl">
                    <div className="flex">
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                    </div>
                    <h2 className="text-2xl py-2">Jacob is the best <br/> in the business</h2>
                    <h3 className="text-gray-500">Adam Driver</h3>
                </div>
                <div className="bg-black py-[54px] px-[25px] w-[300px] text-white rounded-2xl">
                    <div className="flex">
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                    </div>
                    <h2 className="text-2xl py-2">A wealth of audio <br/> knowledge</h2>
                    <h3 className="text-gray-500">Marcus Brown</h3>
                </div>
            </div>
            <div className="flex justify-between pt-[20px]">
                <div className="bg-black py-[54px] px-[25px] w-[300px] text-white rounded-2xl">
                    <div className="flex">
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                    </div>
                    <h2 className="text-2xl py-2">Every episode is a <br/> gem!</h2>
                    <h3 className="text-gray-500">Jessica Knowl</h3>
                </div>
                <div className="bg-black py-[54px] px-[25px] w-[300px] text-white rounded-2xl">
                    <div className="flex">
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                    </div>
                    <h2 className="text-2xl py-2">Whoa whoa, let me <br/> take some notes!</h2>
                    <h3 className="text-gray-500">Scott Adams</h3>
                </div>
                <div className="bg-black py-[54px] px-[25px] w-[300px] text-white rounded-2xl">
                    <div className="flex">
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                        <img src={stars} alt=""/>
                    </div>
                    <h2 className="text-2xl py-2">I’ve upped my <br/> game considerably <br/> since I started <br/> listening</h2>
                    <h3 className="text-gray-500">Steven Blast</h3>
                </div>
            </div>
        </div>
    );
};

export default Reviews;