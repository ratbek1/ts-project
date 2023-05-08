import React from 'react';

const Header = () => {
    return (
        <div className="flex justify-between items-center border-b-2 sticky top-0 py-[30px]">
            <h1 className="text-white font-bold text-4xl">Castaway</h1>
            <div className="text-white">
                <a href="#" className="mx-8">Home</a>
                <a href="#" className="mx-8">Episodes</a>
                <a href="#" className="mx-8">About</a>
                <a href="#" className="mx-8">Contact</a>
            </div>
        </div>
    );
};

export default Header;