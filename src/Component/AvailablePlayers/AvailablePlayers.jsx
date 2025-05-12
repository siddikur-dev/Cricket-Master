import React, { use, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AvailablePlayer from "./AvailablePlayer";

const AvailablePlayers = ({ fetchPlayer, count, setCount }) => {
  const promiseResolvedPlayers = use(fetchPlayer);

  // State to control toggle between Show All / Show Off
  const [showAll, setShowAll] = useState(false);

  // Determine how many players to show
  const visiblePlayers = showAll ? promiseResolvedPlayers.length : 6;

  // Toggle handler
  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="container mx-auto my-12">
      <h2 className="text-3xl text-center font-bold p-3">Available Players</h2>
      <Tabs className="gap-3">
        <TabList className="flex justify-end items-center gap-2 my-12">
          <Tab className="bg-[#E7FE29] px-4 py-2 hover:btn btn text-lg">
            Available
          </Tab>
          <Tab className="hover:bg-[#E7FE29] px-4 py-2 btn">Selected(0)</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
            {promiseResolvedPlayers.slice(0, visiblePlayers).map((single) => (
              <AvailablePlayer
                count={count}
                setCount={setCount}
                key={single.playerId}
                single={single}
              />
            ))}
          </div>

          {/* Show All / Show Off Toggle Button */}
          {promiseResolvedPlayers.length > 6 && (
            <div className="text-center my-4">
              <button
                onClick={toggleShowAll}
                className="btn bg-[#E7FE29] gap-2  lg:text-xl rounded-2xl"
              >
                {showAll ? "Show Off" : "Show All"}
              </button>
            </div>
          )}
        </TabPanel>

        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AvailablePlayers;
