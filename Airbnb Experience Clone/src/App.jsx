import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./componants/Header.jsx";
import data from "./data";
import Card from "./componants/Card";
import Hero from "./componants/Hero";
import Footer from "./componants/Footer";
function App() {
  const renderCard = data.map((arg) => {
    return (
      <Card
        key={arg.id}
        /****Sned Every Item Seperatly****/
        // img={arg.coverImg}
        // rating={arg.stats.rating}
        // reviewCount={arg.stats.reviewCount}
        // location={arg.location}
        // price={arg.price}
        // openSpots={arg.openSpots}

        /***Send Whole Object***/
        item={arg}
      />
    );
  });
  return (
    <div>
      <Header />
      <Hero />
      <section className="cards-list">{renderCard}</section>
      <Footer/>
    </div>
  );
}

export default App;
