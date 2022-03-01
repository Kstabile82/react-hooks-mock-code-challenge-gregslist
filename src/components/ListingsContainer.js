import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ things }) {
  return (
    <main>
      <ul className="cards">
        {things.map(thing => 
        <ListingCard thing={thing}/>
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
