import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <div className="text-center">
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <Card
          imgURL="..."
          title="Sponsle"
          text="A game where you guess which company is the sponsor"
          link="#"
          linkText="Play Sponsle"
        ></Card>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <Card
          imgURL="..."
          title="Sponsle"
          text="A game where you guess which company is the sponsor"
          link="#"
          linkText="Play Sponsle"
        ></Card>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <Card
          imgURL="..."
          title="Sponsle"
          text="A game where you guess which company is the sponsor"
          link="#"
          linkText="Play Sponsle"
        ></Card>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <Card
          imgURL="..."
          title="Sponsle"
          text="A game where you guess which company is the sponsor"
          link="#"
          linkText="Play Sponsle"
        ></Card>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
        <h1>Whats up Bro</h1>
      </div>
    </>
  );
}

export default App;
