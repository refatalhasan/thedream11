import { useEffect, useState } from "react";
import Players from "./Players";

const Available = () => {
    
    const [players, setPlayers] = useState([]);

    useEffect(()=> {
        fetch('../../Public/data.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    }, [])


    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full h-fit lg:px-70 px-10 my-20">
            {
                players.map(player => <Players key={player.id} player={player}></Players>)
            }
        </div>
    );
};

export default Available;