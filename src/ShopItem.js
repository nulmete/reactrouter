import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Item({ match }) {
  // only run when component mounts
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
    const item = await data.json();
    setItem(item);
  }

  return (
    <div>
      <h1>Item</h1>

      <h3>
        Name: {item.data.item.name}
      </h3>

      <div>
        Rarity: {item.data.item.rarity}
      </div>
    </div>
  );
}

export default Item;
