import React, { useRef } from "react";
import GroupList from "./groupList";
import { useState } from "react";
import CreateTaskPopUp from "./createTaskPopUp";
import BlankHome from "./bankHome";
import TaskContent from "./taskContent";

 

function NotesApp() {
  const [popUpState, setPopUpState] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [closePopUp, setClosePopUp] = useState(false);
  const divRef = useRef(null);
 
  function callback(childData) {
    setPopUpState(childData);
  }
  function callback2(childData) {
    setShowNotes(childData);
  }
   
  const [refreshGroups, setRefreshGroups] = useState(true);
  function handleClickOutside(event) {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setPopUpState(false);
      
    }
  }
      document.addEventListener("mousedown", handleClickOutside);
    
  return (
    <>
      {popUpState  && (
        <div className="  bg-gray-700 h-[120%] w-full absolute z-10  opacity-95 flex items-center  justify-center ">
         
          <div ref={divRef} className="z-50 -mt-32">
            <CreateTaskPopUp
              setRefreshGroups={setRefreshGroups}
              refreshGroups={refreshGroups}
              setPopUpState={setPopUpState}
            />
          </div>
        </div>
      )}

      <main className="flex mt-0 pt-0 flex-row h-full">
        <div className="flex flex-col w-72 justify-center ">
          <h1 className="ml-12 mb-4 mt-10 text-3xl font-bold text-black ">
            Pocket Notes
          </h1>
          <div className="flex flex-col w-72 max-h-[650px] h-full no-scrollbar overflow-y-scroll text-black">
            <GroupList
              setPopUpState={callback}
              hidePopUp={popUpState}
              refreshGroups={refreshGroups}
              setShowNotes={callback2}
            />
          </div>
        </div>
        {!showNotes ? (
          <BlankHome />
        ) : (
          <div className="flex flex-col  ">
            <TaskContent bgColor={"bg-blue-700"} />
          </div>
        )}
      </main>
    </>
  );
}

export default NotesApp;
