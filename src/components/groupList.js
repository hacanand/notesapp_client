import BlankHome from "./bankHome";
import GroupItem from "./groupItem";
import axios from "axios";
import { useEffect, useState } from "react";
 

// = [
//   { name: "My Notes", bgColor: "bg-blue-700" },
//   { name: "My personal grp", bgColor: "bg-violet-400" },
//   { name: "Javascript grp", bgColor: "bg-red-200" },
//   { name: "HTML grp", bgColor: "bg-cyan-300" },
//   { name: "CSS Notes", bgColor: "bg-red-400" },
//   { name: "SQL Notes", bgColor: "bg-blue-400" },
//   { name: "Python Notes", bgColor: "bg-fuchsia-400" },
//   { name: "HTML grp", bgColor: "bg-cyan-300" },
//   { name: "CSS Notes", bgColor: "bg-red-400" },
//   { name: "SQL Notes", bgColor: "bg-blue-400" },
//   { name: "Python Notes", bgColor: "bg-fuchsia-400" },
//   { name: "HTML grp", bgColor: "bg-cyan-300" },
//   { name: "CSS Notes", bgColor: "bg-red-400" },
//   { name: "SQL Notes", bgColor: "bg-blue-400" },
//   { name: "Python Notes", bgColor: "bg-fuchsia-400" },
// ];

function GroupList({ setPopUpState, hidePopUp, refreshGroups, setShowNotes }) {
  const [showPopUp, setShowPopup] = useState(false);
  //const [groupItem, setGroupItem] = useState("");
  const [groupData, setGroupData] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  
  const fetchingData = async () => {
    const data = await axios.get(
      "https://notesapp-server-nine.vercel.app/api/v1/groups"
    );
    setGroupData(data.data.data);
  };
  useEffect(() => {
    fetchingData();
  }, [refreshGroups]);

  useEffect(() => {
    setShowNotes( isSelected);
  }, [ isSelected]);
  const createTask = () => {
    setShowPopup(true);
  };
  useEffect(() => {
    setShowPopup(hidePopUp);
  }, [hidePopUp]);
  useEffect(() => {
    setPopUpState(showPopUp);
  }, [showPopUp]);
  return (
      <section className="flex flex-col font-medium w-72 " >
        {!groupData
          ? "Loading..."
          : groupData.map((group) => (
              <GroupItem
                key={group._id}
                setGroupItem={group.id}
                id={group._id}
                name={group.name}
                bgColor={group.color}
                setIsSelected={setIsSelected}
              />
            ))}
        <button
          className="sticky bottom-8 flex text-center justify-evenly opacity-90 text-6xl  text-white rounded-full bg-violet-900 h-16 w-16 self-end mt-10 mr-4 text-bold"
          onClick={createTask}
        >
          <div>+</div>
        </button>
      </section>
      
    
  );
}

export default GroupList;
