import axios from "axios";
import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

function CreateTaskPopUp({ setRefreshGroups, refreshGroups, setPopUpState }) {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [msg, setMsg] = useState("");
  const [showElement, setShowElement] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
       
    }, 1000);
    clearTimeout()
  }, [showElement]);

  const colors = [
    { name: "violet", bg: "bg-violet-400" },
    { name: "fuchsia", bg: "bg-fuchsia-400" },
    { name: "cyan", bg: "bg-cyan-300" },
    { name: "red", bg: "bg-red-400" },
    { name: "blue700", bg: "bg-blue-700" },
    { name: "blue400", bg: "bg-blue-400" },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await axios.post(
      "https://notesapp-server-dun.vercel.app/api/v1/groups",
      {
        name: groupName,
        color: selectedColor,
      }
    );
    setMsg(data.data.message);
    setShowElement(true);
    setRefreshGroups(!refreshGroups);
  };

  const handleGroupNameChange = (event) => {
    setGroupName(event.target.value);
  };

  // const handleColorSelection = (color) => {
  //   setSelectedColor(color);
  // };

  const ColorCircle = ({ color, isSelected , }) => (
    <button
      type="button"
      className={`w-10 h-10 ${
        color.bg
      } rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50  ${
        isSelected ? "ring-4 ring-black" : ""
      }`}
      onClick={() => setSelectedColor(color.bg)}
    ></button>
  );

  return (
    <form
      className="flex flex-col  px-4 pt-10 pb-4 bg-white rounded-md max-w-[740px] group relative "
      onSubmit={handleSubmit}
    >
      <span className="absolute top-3 right-2 text-red-400 cursor-pointer group-hover:opacity-100 opacity-0 "onClick={() => setPopUpState(true)} >
        <RxCross2 className="text-3xl" />
      </span>
      <header className="mb-4  ">
        <h1 className="text-4xl font-bold tracking-wider leading-10 text-black">
          Create New Group
        </h1>
      </header>
      <section className="flex gap-5 justify-between mt-5 md:flex-wrap">
        <label
          htmlFor="groupName"
          className="block grow  mt-4 text-3xl font-medium tracking-wider text-gray-800"
        >
          Group Name
        </label>
        <input
          type="text"
          id="groupName"
          value={groupName}
          onChange={handleGroupNameChange}
          className="grow justify-center items-start mr-6 py-4 pr-16 pl-7 text-2xl tracking-wider bg-white rounded-3xl border-2 border-solid border-stone-300 text-neutral-800 md:px-5"
          placeholder="Enter group name"
        />
      </section>
      <section className="flex gap-5 justify-between mt-11 md:flex-wrap md:mt-10 relative">
        <div className="flex-auto my-auto text-3xl font-medium tracking-wider leading-10 text-gray-800">
          Choose Colour
        </div>
        <div className="flex gap-3 ml-6 justify-between pr-20 ">
          {colors.map((color, index) => (
            <ColorCircle
              key={index}
              color={color}
              // handle={handleColorSelection}
              isSelected={selectedColor === color.bg}
            />
          ))}
        </div>
      </section>

      <footer className="flex justify-center mt-6 relative">
        <button
          type="submit"
          className=" px-12 py-3 text-xl tracking-wider leading-8 text-white bg-blue-900 rounded-xl md:px-5"
        >
          Create
        </button>
        {showElement && (
          <span className="flex absolute justify-center -top-6  text-center text-green-500">
            {msg}
          </span>
        )}
      </footer>
    </form>
  );
}

export default CreateTaskPopUp;
