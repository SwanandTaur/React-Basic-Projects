import React from "react";

const CardContainer = (props) => {
  return (
    <div className="cardContainer w-screen h-[73vh] overflow-auto flex justify-center gap-10 flex-wrap">
      {props.allFoodInfo.map((elem, idx) => {
        const isVeg = elem.foodType?.toLowerCase().trim() === "veg";
        console.log(elem.foodType);
        return (
          <div
            key={idx}
            className="card max-w-[40%] h-[40%] flex justify-center items-center gap-10 bg-white rounded-lg"
          >
            <div className="w-[50%] flex flex-col justify-between items-start gap-1">
              <div
                className={`w-5 h-5 border-2 flex items-center justify-center rounded-sm ${
                  isVeg ? "border-green-700" : "border-red-700"
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    isVeg ? "bg-green-700" : "bg-red-700"
                  }`}
                ></span>
              </div>
              <h3 className="font-semibold">{elem.foodName}</h3>
              <div className="flex gap-8">
                <div className="font-semibold">
                  {elem.rate} <span className="text-sm text-red-500">RS</span>
                </div>
                <div className="font-semibold">
                  {" "}
                  {elem.rating}{" "}
                  <span className="text-xs text-amber-500">(rating)</span>
                </div>
              </div>
              <p className="text-sm text-gray-700 font-semibold">
                {elem.foodQuality}
              </p>
              <p className="text-xs font-semibold">More...</p>
            </div>
            <div className="w-[50%] relative flex flex-col justify-center items-center gap-4">
              {elem.imageUrl && (
                <img
                  className="w-60 h-25 object-cover rounded-lg"
                  src={elem.imageUrl}
                  alt={elem.foodName}
                />
              )}
              <button className="absolute bottom-6 bg-red-500 text-white rounded-sm font-semibold cursor-pointer">
                ADD
              </button>
              <p className="text-sm font-semibold text-red-500">
                Customization
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
