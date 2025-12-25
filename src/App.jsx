import { useState } from "react";
import { data } from "./components/data";
import "./App.css";

function App() {
  const [categories] = useState(["All", "Breakfast", "Lunch", "Shakes"]);
  const [menuItems, setMenuItems] = useState(data);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setMenuItems(data);
      return;
    }

    const filteredData = data.filter((item) => item.category === category);
    setMenuItems(filteredData);
  };

  return (
    <div id="main" className="menu-app">
      <div className="title_part">
        <h1>Our Menu</h1>
        <hr />
      </div>
      <div className="filter-buttons">
        {categories.map((category, index) => {
          let buttonId = "";
          if (category === "Breakfast") buttonId = "filter-btn-1";
          else if (category === "Lunch") buttonId = "filter-btn-2";
          else if (category === "Shakes") buttonId = "filter-btn-3";
          
          return (
            <button
              key={category}
              id={buttonId}
              className={`menu-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <section className="menu-items">
        {menuItems.map((item) => {
          // Create test ID based on category
          let testId = "";
          if (item.category === "Breakfast") testId = "menu-item-breakfast";
          else if (item.category === "Lunch") testId = "menu-item-lunch";
          else if (item.category === "Shakes") testId = "menu-item-shakes";
          
          return (
            <div 
              className="card_items" 
              key={item.id}
              data-test-id={testId}
            >
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
          );
        })}
      </section>
    </div>
  );
}

export default App;