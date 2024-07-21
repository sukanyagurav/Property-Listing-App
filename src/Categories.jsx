import React, {  useState } from "react";
import useFetchData from "./useFetchData";

const ItemContainer = React.lazy(()=>import('./ItemContainer'));
const propertyType = [
  { value: "1", label: "1 bedroom" },
  { value: "2", label: "2 bedroom" },
];
const Content = () => {
  const { categories,setSuperhost,superhost,properties,isLoading,setBedroom,selectedCategories,handleTabChange} = useFetchData();
  const [isDropdown, setIsDropdown] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("");
 

  function handleSelection(property) {
    setSelectedProperty(property);
    setBedroom(+property.value)
    setIsDropdown(false);
  }

  return (
    <>
    <div className="bg-[rgba(32,41,58,.95)] px-4 md:px-8 py-8 left-0 right-0 absolute flex-wrap gap-8 -top-[3rem] w-full rounded-lg flex items-center justify-between z-40">
      <div className="categories overflow-x-scroll md:overflow-x-hidden">
        <ul className="flex gap-4 font-bold text-white ">
          {categories.map((category) => (
            <li key={category} className="">
              <button className={`whitespace-nowrap px-4 py-2 rounded-md ${selectedCategories.includes(category) && 'bg-gray-500'} ${(selectedCategories.length == 0 && category =='All Stays') && 'bg-gray-500'}`} onClick={()=>handleTabChange(category)} >{category}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <div className="cursor-pointer relative" tabIndex={1}>
          <input type="checkbox" id="toggle" className="opacity-0 absolute"  onChange={(e)=>setSuperhost(e.target.checked)} checked={superhost}/>
          <label
            htmlFor="toggle"
            className="text-white toggle ml-14 flex items-center cursor-pointer"
          >
            Superhost
          </label>
        </div>
        <button
        className={`border-[0.2px] text-gray-200 border-gray-400 p-4 py-2 rounded-md flex items-center relative w-[150px] ${
          isDropdown && "border-b-0  rounded-b-none"
        }`}
        onClick={()=> setIsDropdown(!isDropdown)}
      >
        <span>{selectedProperty.label || "Property Type"} </span>
        {isDropdown && (
          <div className="absolute -left-[0.05rem] top-10  w-[150px] ">
            <ul
              className={`flex flex-col items-start border-[0.2px] text-gray-200 rounded-md border-gray-400 ${
                isDropdown && "border-t-0 rounded-t-none ronded-l-none"
              }`}
            >
              {propertyType.map((property) => (
                <li key={property.value} className=" w-full">
                  <button
                    onClick={() => handleSelection(property)}
                    className="w-full p-4 py-2 text-left"
                  >
                    {property.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </button>
      </div>
      
    </div>
    <ItemContainer properties={properties} isLoading={isLoading}/>
    </>
  );
};

export default Content;
