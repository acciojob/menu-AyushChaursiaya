import { useState } from "react";
import { data } from "./data";
import "../../src/menuCountainer/Style.css"
// import "../../public/images/item-1.jpeg"

const App = () => {
  const [items, setItems] = useState(data);

  console.log(items);

  function handleCategories(e) {
    if (e.target.innerText === "All") {
      setItems(data);
      return;
    }

    if (e.target.innerText === "Breakfast") {
      setItems(data.filter((food) => food.category === 'breakfast'));
      return;
    }

    if (e.target.innerText === "Lunch") {
      setItems(data.filter((food) => food.category === 'lunch'));
      return;
    }

    if (e.target.innerText === "Shakes") {
      setItems(data.filter((food) => food.category === 'shakes'));
      return;
    }
  }

  return (
    // <h1>hello </h1>
    <div id="main">
      <h1>Our Menu</h1>
      <p onClick={handleCategories}>All</p>
      <p id="filter-btn-1" onClick={handleCategories}>
        Breakfast
      </p>
      <p id="filter-btn-2" onClick={handleCategories}>
        Lunch
      </p>
      <p id="filter-btn-3" onClick={handleCategories}>
        Shakes
      </p>

      {items.map((food) =>
        food.category == "shakes" ? (
          <div data-test-id="menu-item-shakes">
            <img src={food.img} alt={food.title} />
            <h2>
              <span>{food.title}</span> <span>{food.price}</span>
            </h2>
            <p>{food.desc}</p>
          </div>
        ) : food.category == "lunch" ? (
          <div data-test-id="menu-item-lunch">
            <img src={food.img} alt={food.title} />
            <h2>
              <span>{food.title}</span> <span>{food.price}</span>
            </h2>
            <p>{food.desc}</p>
          </div>
        ) : food.category == "breakfast" ? (
          <div data-test-id="menu-item-breakfast">
            <img src={food.img} alt={food.title} />
            <h2>
              <span>{food.title}</span> <span>{food.price}</span>
            </h2>
            <p>{food.desc}</p>
          </div>
        ) : (
          <div>
            <img src={food.img} alt={food.title} />
            <h2>
              <span>{food.title}</span> <span>{food.price}</span>
            </h2>
            <p>{food.desc}</p>
          </div>
        )
      )}
    </div>
  );
};

export default App;
