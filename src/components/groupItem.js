import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
function GroupItem({ name, bgColor, setIsSelected,id }) {
  
  const navigate = useNavigate();
 
  let newArr = name.split(" ");
  if (newArr.length > 1)
    newArr =
      newArr[0]?.charAt(0).toUpperCase() + newArr[1]?.charAt(0).toUpperCase();
  else newArr = newArr[0]?.charAt(0).toUpperCase();
  return (
    <div
      className="flex gap-2 justify-between  rounded my-2 relative hover:bg-gray-200 group"
      onClick={() => {
        navigate(`/groups/${id}`);
        setIsSelected(true);
      }}
    >
      <span className="absolute top-3 right-2 text-red-400 cursor-pointer group-hover:opacity-100 opacity-0  ">
        <RxCross2  className="text-3xl"/>
       </span>
      <div
        className={` ml-8 text-center  text-lg  text-white  ${bgColor} rounded-full h-14 w-14`}
      >
        <div className="m-3 ">{newArr}</div>
      </div>
      <div className="flex-auto m-3  text-lg  text-black">{name}</div>
    </div>
  );
}
export default GroupItem;
