import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const handleDelete = (id) => {
    let item = people.filter((person) => person.id !== id);
    setPeople(item);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <ul key={id} className="item">
            <li>{name}</li>
            <button
              type="button"
              className="delete-btn"
              onClick={() => handleDelete(id)}
            >
              Delete Item
            </button>
          </ul>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </div>
  );
};

export default UseStateArray;
