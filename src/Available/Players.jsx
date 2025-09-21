
const Players = ({ player }) => {

    const { name, image, country, role, battingStyle, price, rating } = player
    return (
        <div className="flex flex-col border border-gray-600 p-4 rounded-2xl shadow-xl">
            <div style={{ backgroundImage: `url(${image})` }} className="bg-cover h-60 rounded-xl mb-5">
            </div>
            <div className="flex flex-col px-3 pr-5 items-start justify-start gap-2">
                <h2 className="text-2xl font-extrabold">{name}</h2>
                <div className="flex justify-between items-center w-full  h-fit font-bold">
                    <h2 className="text-[#818181]">{country}</h2>
                    <h2 className="text-[#818181]">Role: {role}</h2>
                </div>
                <h2 className="text-[#818181]">Rating: {rating}</h2>
                <h2 className="text-[#818181]">Batting style: {battingStyle}</h2>
                <div className="flex justify-between items-end mb-5 mt-10 w-full h-fit font-bold">
                    <h2 className="text-xl text-[#505050]">Price: ${price}</h2>
                    <button className="text-[#818181] border cursor-pointer shadow px-4 py-3 rounded-xl">Choose Player</button>
                </div>
            </div>



        </div>
    );
};

export default Players;