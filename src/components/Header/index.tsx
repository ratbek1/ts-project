import React, {useEffect, useState} from 'react';

const Header = () => {
    const [scroll, setScroll] = useState(0)

    const toScroll = () => {
        setScroll(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener('scroll', toScroll)
    }, [])
    return (
        <div className=" border-b-2 sticky top-0" style={{background: scroll > 50 ? 'black' : '', transition: ".5s"}}>
            <div className="container flex justify-between items-center py-[30px]">
                <h1 className="text-white font-bold text-4xl">Castaway</h1>
                <div className="text-white">
                    <a href="#" className="mx-8 hover:text-blue-600">Home</a>
                    <a href="#" className="mx-8 hover:text-blue-600">Episodes</a>
                    <a href="#" className="mx-8 hover:text-blue-600">About</a>
                    <a href="#" className="mx-8 hover:text-blue-600">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Header;