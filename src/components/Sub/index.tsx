import React from 'react';

const Sub = () => {
    return (
        <div className="flex bg-black py-[50px] px-[25px] justify-between rounded-2xl">
            <div>
                <p className="text-blue-500">Email Newsletter</p>
                <h1 className="text-white font-bold text-6xl">Subscribe <br/> for updates</h1>
            </div>
            <div className="flex flex-col">
                <input type="text" placeholder="Name" className="bg-[#181818] w-[500px] h-[50px] p-5 rounded-[10px]"/>
                <input type="text" placeholder="Email" className="bg-[#181818] w-[500px] h-[50px] p-5 my-[20px] rounded-[10px]"/>
                <button
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 w-[90px] focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Sub;