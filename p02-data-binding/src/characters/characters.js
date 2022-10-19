import React, { useState } from 'react'
import charactersList, { filterByHouse, getAllHouses } from './charactersList'
import "./characters.style.css";

const initialHousesState = getAllHouses();

function Characters() {

  const [houses, setHouses] = useState(initialHousesState);

  /**
   * Toggles the active state of the given house name
   * @param {string} houseName 
   */
  const toggleHouseActive = (houseName) => {
    setHouses(state => state.map(item => 
      (item.name !== houseName) ? item : {...item, active: !item.active }
    ))
  }

  const handleClick = (e) => {
    const houseName = e.target.name

    setHouses(initialHousesState);

    if (houseName === "All") {
      // dislay all chanracters
      return;
    }

    toggleHouseActive(houseName)

    // display all characters of active house
    const characters = filterByHouse(houseName)
    console.log(characters)
  }

  return (
    <div className="container">
      <div className="menu">
        <h4>Houses</h4>
        <div className="houses">
          {houses?.map((house) => (
            <button 
              key={house.name}
              name={house.name} 
              className={house.active ? "active" : ""}
              onClick={handleClick}
            >
              {house.name}
            </button>)
          )}
        </div>
      </div>
      <div className="characters">

      </div>
    </div>
  )
}

export default Characters