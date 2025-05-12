import { useState } from "react";
import "./App.css";
import AvailablePlayers from "./Component/AvailablePlayers/AvailablePlayers";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navber/Navbar";
function App() {
  const [count, setCount] = useState(0);
  const handleCount5k = () => {
    setCount(count + 5000);
  };
  console.log(count);
  return (
    <>
      <Navbar count={count}></Navbar>
      <Header handleCount5k={handleCount5k}></Header>
      <AvailablePlayers></AvailablePlayers>
    </>
  );
}

export default App;
