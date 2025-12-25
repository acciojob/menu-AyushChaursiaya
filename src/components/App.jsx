import { useState } from "react";
import { data } from "./components/data";
import "./App.css";

function App() {
  const [states, setStates] = useState(["All", "Lunch", "Breakfast", "Shakes"]);
  const [menuItems, setMenuItems] = useState(data);

  const filterItems = (items) => {
    if (items === "All") {
      setMenuItems(data);
      return;
    }

    const filteredData = data.filter((item) => item.category === items);
    setMenuItems(filteredData);
  };

  return (
    <div className="manu">
      <div className="title_part">
        <h1>Our Meun</h1>
        <hr />
      </div>
      <menu>
        {states.map((item) => (
          <a className="menu_list" onClick={() => filterItems(item)} key={item}>
            {item}
          </a>
        ))}
      </menu>
      <section className="menu-items">
        {menuItems.map((item) => (
          <div className="card_items" key={item.id}>
            <div className="items_img">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="item_info">
              <div className="item_header">
                <h5>{item.title}</h5>
                <p>${item.price}</p>
              </div>
              <hr />
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
