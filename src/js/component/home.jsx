import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [activeColor, setActiveColor] = useState(null);
  const [newColor, setNewColor] = useState(false);

  const handleColorClick = (color) => {
    setActiveColor(activeColor === color ? null : color);
    console.log(`hola ${color}`);
  };

  const handleNewColor = () => {
    setNewColor(!newColor);
  };

  return (
    <div
      className="bg-secondary text-white d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="fw-bold">Semaforo</h1>
      <div className="bg-black" style={{ width: "10px", height: "70px" }}></div>
      <div className="bg-black rounded p-2" style={{ width: "120px" }}>
        <div
          className="bg-danger mx-auto"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "100%",
            boxShadow:
              activeColor === "red" ? "red 0px 10px 90px 40px" : "none",
          }}
          onClick={() => handleColorClick("red")}
        ></div>
        <div
          className="bg-warning mx-auto"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "100%",
            boxShadow:
              activeColor === "yellow" ? "yellow 0px 10px 90px 40px" : "none",
          }}
          onClick={() => handleColorClick("yellow")}
        ></div>
        <div
          className="bg-success mx-auto"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "100%",
            boxShadow:
              activeColor === "green" ? "green 0px 10px 90px 40px" : "none",
          }}
          onClick={() => handleColorClick("green")}
        ></div>
        <div
          className=" mx-auto"
          style={{
            background: "violet",
            width: "100px",
            height: "100px",
            borderRadius: "100%",
            boxShadow:
              activeColor === "purpure" ? "violet 0px 10px 90px 40px" : "none",
            display: newColor ? "block" : "none",
          }}
          onClick={() => handleColorClick("purpure")}
        ></div>
      </div>
      <button className="btn bg-primary mt-5" onClick={handleNewColor}>
        {newColor ? "Quitar Purpura" : "Agregar purpura"}
      </button>
    </div>
  );
};

export default Home;
