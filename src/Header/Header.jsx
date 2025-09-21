import Logo from '../assets/logo.png'
import BannerImg from '../assets/banner-main.png'
import BgShadow from '../assets/bg-shadow.png'
import { useState } from 'react';
import Available from '../Available/Available';
import Selected from '../Selected/Selected'
import Players from '../Available/Players';


const Header = () => {
    const [coins, setCoins] = useState(0);
    const [hasClicked, setClicked] = useState(false);
    const [activePage, setActivePage] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleAddToSelected = (player) => {
        if (selectedPlayers.find(p => p.id === player.id)) {
            alert("Player already selected!");
            return;
        }
        if (coins >= player.price) {
            setCoins(prevCoins => prevCoins - player.price);
            setSelectedPlayers(prev => [...prev, player]);
        } else {
            alert("Not enough coins!");
        }
    };


    const removePlayer = (id) => {
        setSelectedPlayers(prev => prev.filter(player => player.id !== id));
    };

    const addCoins = () => {
        if (!hasClicked) {
            setCoins(4800000);
            setClicked(true);
        }
    }

    return (
        <div className="flex flex-col">
            <nav className="flex h-30 w-full items-center justify-around">
                <a href=""><img className="" src={Logo} alt="" /></a>
                <div className='flex gap-10 items-center'>
                    <ul className='flex gap-4 cursor-pointer'>
                        <li className='font-extrabold'>Home</li>
                        <li>Fixture</li>
                        <li>Teams</li>
                        <li>Schedules</li>
                    </ul>
                    <h4 className='border-yellow-500 border-2 text-lg font-bold px-5 py-2 rounded-lg text-yellow-500 '>{coins} Coin</h4>
                </div>
            </nav>
            <section className='flex flex-col pt-10 pb-10 justify-center items-center'>
                <div style={{ backgroundImage: `url(${BgShadow})`, }} className='flex gap-3 rounded-2xl bg-[#242424] bg-cover bg-center w-[90%] lg:w-[75%] py-10 flex-col items-center justify-center'>
                    <img src={BannerImg} alt="" />
                    <h1 className='text-2xl font-extrabold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-white'>Beyond Boundaries Beyond Limits</p>
                    <button onClick={addCoins} className='bg-[#E7FE29] cursor-pointer px-4 py-2 rounded-lg font-extrabold'>Claim Free Credit</button>
                </div>
            </section>
            <section className='w-full h-20 flex items-center justify-between lg:px-[13%] px-10'>
                <h2 className='text-2xl font-extrabold'> {activePage === "available" ? "Available Players" : "Selected Players"}</h2>
                <div className='flex'>
                    <button onClick={() => setActivePage('available')} className={`px-5 py-2 border font-extrabold cursor-pointer rounded-l-xl
                    ${activePage === "available" ? "bg-[#E7FE29]" : "bg-white"}`}>Available</button>
                    <button onClick={() => setActivePage('selected')} className={`px-5 py-2 border border-l-0 font-extrabold cursor-pointer rounded-r-xl
                    ${activePage === "selected" ? "bg-[#E7FE29]" : "bg-white"}`}>Selected</button>
                </div>
            </section>
            {activePage === "available"
                ? <Available handleAddToSelected={handleAddToSelected} />
                : <Selected selectedPlayers={selectedPlayers} removePlayer={removePlayer} />}

        </div>

    );
};

export default Header;