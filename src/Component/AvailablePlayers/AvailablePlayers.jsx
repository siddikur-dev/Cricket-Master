import React from "react";

const AvailablePlayers = () => {
  return (
    <div className="container mx-auto my-16">
      {/* Available Players */}
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl font-bold">Available Players</h2>
        </div>
        <div className="border border-gray-400">
          <button className=" btn bg-[#E7FE29] py-2 px-4 font-bold">
            Available
          </button>
          <button className=" btn p-2">Selected(0)</button>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;
