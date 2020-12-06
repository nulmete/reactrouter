import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Shop() {
  // only run when component mounts
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
    const items = await data.json();
    setItems(items.data);
  }

  return (
    <div>
      <h1>Shop</h1>

      <div>
        {items.map(item => (
          <div key={item.itemId}>
            <Link to={`/shop/${item.itemId}`}>
              {item.item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
