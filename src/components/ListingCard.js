import React, { useState, useEffect } from "react";

function ListingCard({ thing }) {
const [isLiked, setIsLiked] = useState(false)
  function handleClick(e) {
    console.log(e.target)
    setIsLiked(!isLiked);
  }
  function handleDelete(e) {
  fetch (`http://localhost:6001/listings/${thing.id}`, {
  method: "DELETE", 
  })
  .then(res => res.json())
  .then(res => console.log(res))
 
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={thing.image} alt={thing.description} />
      </div>
      <div className="details">
        {isLiked === true ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{thing.description}</strong>
        <span> · {thing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
