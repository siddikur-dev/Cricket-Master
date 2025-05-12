import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Component/AvailablePlayers/AvailablePlayers";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navber/Navbar";
import Footer from "./Component/Footer/Footer";
function App() {
  const [count, setCount] = useState(0);
  const handleCount5k = () => {
    setCount(count + 5000);
  };
  // Available Player Data
  const fetchPlayer = fetch("player.json").then((res) => res.json());
  return (
    <>
      <Navbar count={count}></Navbar>
      <Header handleCount5k={handleCount5k}></Header>
      <Suspense fallback={<p>Loadig,,,</p>}>
        <AvailablePlayers
          count={count}
          setCount={setCount}
          fetchPlayer={fetchPlayer}
        ></AvailablePlayers>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
