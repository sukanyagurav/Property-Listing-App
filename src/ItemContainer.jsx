import React from "react";


const ItemContainer = ({properties,isLoading}) => {


  return (
    <section className="mt-32 lg:mt-14 min-h-[400px]">
      <h2 className="text-white text-2xl">Over 200 stays</h2>
      <div className="py-8 flex flex-wrap justify-center items-center gap-8 md:justify-evenly">
      {!isLoading && <h1>Loading...</h1>}
        {isLoading && properties.map((property) => (
          <article className="border-2 border-gray-400 w-[390px] rounded-md overflow-hidden relative">
            <img
              src={property.image}
              className="w-full h-[250px] rounded-t-md rounded-l-md"
              alt={property.title}
            />
            {property.superhost && <span className="flex items-center bg-[rgba(32,41,58,.95)]  absolute top-2 left-3 p-2 px-4 gap-2 text-white
            rounded-full">Superhost <img src="./Starfill.svg" alt="rating" /></span>}
            <div className="p-7">
              <h4 className="text-lg font-bold text-gray-200 ">
                {property.title}
              </h4>
              <p className="text-gray-400 text-md my-4">
                {property.description}
              </p>
              <div className="flex gap-4 my-4">
                <span className="flex items-center gap-2 text-gray-400">
                  <img src="./Home_duotone.svg" alt="house" />
                  <span> {property.capacity.bedroom} bedroom</span>
                </span>
                <span className="flex items-center">
                  <img src="./User_alt_duotone.svg" alt="people" />
                  <span className="flex items-center gap-2 text-gray-400">
                    {" "}
                    {property.capacity.people} guests
                  </span>
                </span>
              </div>
              <hr className="border-white-500" />
              <div className="flex justify-between items-center mt-4">
                <h3>
                  <span className="text-2xl text-white">${property.price}</span>
                  <span className="text-lg text-gray-400">/night</span>
                </h3>
                <span className="flex items-center text-white gap-2">
                  <img src="./Starfill.svg" alt="rating" />
                  {property.rating}
                </span>
              </div>
            </div>
          </article>
        ))}
        {properties.length ===0 && <p className="text-bold mt-32  text-gray-300 text-2xl text-center">No stays available...</p>}
      </div>
    </section>
  );
};

export default ItemContainer;
