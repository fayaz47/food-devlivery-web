import React, { useEffect, useState } from "react";
import axios from "axios";

function Childrens() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/childrens")
      .then((response) => {
        setData(response.data);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <div>
      Hello Childrens
      <ul>
      {data.map(user => (
        <li key={user.id}> {user.name}</li>
      ))}
    </ul>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Childrens;