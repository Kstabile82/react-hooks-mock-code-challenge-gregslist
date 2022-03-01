import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [things, setThings] = useState([])
useEffect(() => {
fetch ('http://localhost:6001/listings')
.then(res => res.json())
.then(items => setThings(items))
}, []); 
  return (
    <div className="app">
      <Header />
      <ListingsContainer things={things} />
    </div>
  );
}

export default App;
