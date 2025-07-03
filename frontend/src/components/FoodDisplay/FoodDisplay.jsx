import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const loaderStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "300px", // or '100vh' if full screen
    textAlign: "center",
    color: "#ff6347",
    fontSize: "18px",
    fontWeight: "500",
  };

  return (
    <div className="food-display" id="food-display" style={{ padding: "20px" }}>
      <h2>Top dishes near you</h2>

      {!food_list || food_list.length === 0 ? (
        <div style={loaderStyle}>
          <p>🍽️ Loading food items...</p>
        </div>
      ) : (
        <div className="food-display-list" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;
