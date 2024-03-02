import React, { useEffect, useState  } from "react";
import Note from "./taskNotes";
import axios from "axios";
import { useParams } from "react-router-dom";

import { IoMdSend } from "react-icons/io";

// const notes = [
//   {
//     date: "9 Mar 2023",
//     time: "10:10 AM",
//     content:
//       "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite heir fingers.",
//   },
//   {
//     date: "9 Mar 2023",
//     time: "10:10 AM",
//     content:
//       "Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite heir fingers.",
//   },
// ];

function TaskContent() {
  const [titleNotes, setTitleNotes] = useState("");
  const [trackInput, setTrackInput] = useState("");
   
  //const [track]
  const { id } = useParams();
  

  //console.log(id);
  //console.log(titleNotes)

  // setTitleData(groupId);;

  useEffect(() => {
    const fetchingData = async () => {
      const data = await axios.get(
        `https://notesapp-server-nine.vercel.app/api/v1/allnotes/${id}`
      );
      setTitleNotes(data?.data?.data);
    };

    fetchingData();
  }, [id]);
  function firstSecondChar() {
    if (titleNotes) {
      let name = titleNotes?.name;
      let newArr = name?.split(" ");
      if (newArr?.length > 1)
        newArr =
          newArr[0]?.charAt(0)?.toUpperCase() +
          newArr[1]?.charAt(0)?.toUpperCase();
      else newArr = newArr[0]?.charAt(0)?.toUpperCase();
      return newArr;
    }
  }

  // useEffect(() => {
  //   const inputData = inputArea?.current?.value;
  //   setTrackInput(inputData);
  // }, [titleNotes]);

  function checkInput() {
    if (trackInput && trackInput.length > 0 && trackInput.trim().length > 0) {
      return true;
    }
    return false;
  }

  const createNotes = async () => {
    if (trackInput && trackInput.length > 0 && trackInput.trim().length > 0) {
      await axios.post("https://notesapp-server-nine.vercel.app/api/v1/notes", {
        groups: id,
        content: trackInput,
      });
      const data = await axios.get(
        `https://notesapp-server-nine.vercel.app/api/v1/allnotes/${id}`
      );
      setTitleNotes(data?.data?.data);
    }
  };

  return (
    <section className=" flex flex-col mt-0 pt-0 gap-1 bg-slate-200 h-full max-h-[740px]">
      <div
        className={`bg-violet-900 flex flex-col mt-0 pt-0 text-3xl justify-between item-center  border border-solid border-stone-300 text-neutral-400`}
      >
        <div className="flex gap-2 justify-between  rounded m-2 ">
          <div
            className={` ml-8 text-center  text-lg  text-white  ${titleNotes.color} rounded-full h-14 w-14`}
          >
            <div className="m-3 ">{firstSecondChar()}</div>
          </div>
          <div className="flex-auto m-3  text-lg  text-black">
            {titleNotes.name}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-2 pt-0 h-[520px] w-full justify-end min-w-[1095px]">
        <div className=" overflow-y-scroll no-scrollbar rounded-md   ">
          {!titleNotes?.notes
            ? "Loading....."
            : titleNotes?.notes.map((note, index) => (
                <Note
                  key={index}
                  date={note.createdAt}
                  time={note.createdAt}
                content={note.content}
                
              
                />
              ))}
        </div>
        <div className="flex relative flex-col justify-end text-xl h-32 rounded-lg border border-solid border-stone-300 text-neutral-600 bg-violet-900 -mb-32">
          <textarea
            type="text"
            onKeyUp={(e) => setTrackInput(e.target.value)}
            placeholder="add a notes here"
            className=" no-scrollbar resize-none placeholder:text-xl  placeholder:flex-mb-8  rounded-lg focus:outline-none m-2 h-32  p-1"
          ></textarea>
          <IoMdSend
            className={`text-5xl absolute bottom-2 right-2 cursor-pointer  
            ${
              checkInput()
                ? "text-green-600"
                : (" text-gray-400", "cursor-not-allowed")
            }`}
            onClick={createNotes}
          />
        </div>
      </div>
    </section>
  );
}

export default TaskContent;
