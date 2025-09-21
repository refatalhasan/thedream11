const Selected = ({ selectedPlayers, removePlayer }) => (
  <div className="my-20 px-10 flex mx-auto w-full items-center justify-center">
    {selectedPlayers.length === 0 ? (
      <p>No players selected yet.</p>
    ) : (
      <div className="flex flex-col gap-10 w-[80%]">
        {selectedPlayers.map(player => (
          <div key={player.id} className="border p-4 items-center rounded-xl justify-between shadow flex">
            <div className="items-center rounded-xl gap-5 flex">
              <div style={{ backgroundImage: `url(${player.image})` }} className="bg-cover bg-center rounded-lg h-30 w-30"></div>
              <div className="items-center">
                <h3 className="text-xl font-bold">{player.name}</h3>
                <p>Country: {player.country}</p>
                <p>Role: {player.role}</p>
              </div>
            </div>
            <div>
              <button onClick={() => removePlayer(player.id)} className="text-red-600 font-extrabold cursor-pointer">Delete</button>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default Selected;
