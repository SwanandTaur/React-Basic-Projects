import React, { useEffectEvent } from "react";
import { useState,useEffect } from "react";
import CardContainer from "./CardContainer";

const Form = () => {

     const [allFoodInfo, setAllFoodInfo] = useState(() => {
    const storedData = localStorage.getItem("allFoodInfo");
    return storedData ? JSON.parse(storedData) : [];
  });
  const [foodType, setFoodType] = useState("");
  const [foodName, setFoodName] = useState("");
  const [rate, setRate] = useState("");
  const [rating, setRating] = useState("");
  const [foodQuality, setFoodQuality] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    localStorage.setItem("allFoodInfo", JSON.stringify(allFoodInfo));
  }, [allFoodInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    setAllFoodInfo((prev) => [
      ...prev,
      { foodType, foodName, rate, rating, foodQuality, imageUrl },
    ]);

    setFoodType("");
    setFoodName("");
    setRate("");
    setRating("");
    setFoodQuality("");
    setImageUrl("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="w-full flex flex-wrap  rounded-sm items-center justify-center gap-4"
      >
        <input
          onChange={(e) => {
            setFoodType(e.target.value);
          }}
          value={foodType}
          type="text"
          placeholder="Type of food"
        />
        <input
          onChange={(e) => {
            setFoodName(e.target.value);
          }}
          value={foodName}
          type="text"
          placeholder="Name of food"
        />
        <input
          onChange={(e) => {
            setRate(e.target.value);
          }}
          value={rate}
          type="text"
          placeholder="Rate of food"
        />
        <input
          onChange={(e) => {
            setRating(e.target.value);
          }}
          value={rating}
          type="text"
          placeholder="Ratings to the food"
        />
        <input
          onChange={(e) => {
            setFoodQuality(e.target.value);
          }}
          value={foodQuality}
          type="text"
          placeholder="Qualities of food"
        />
        <input
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
          value={imageUrl}
          type="text"
          placeholder="Image address"
        />
        <div className="w-full text-center">
          <button className=" bg-blue-700 rounded text-2xl text-gray-50 cursor-pointer active:scale-98">
            Add a food
          </button>
        </div>
      </form>
          <CardContainer allFoodInfo={allFoodInfo}/>
      </div>
  );
};

export default Form;
