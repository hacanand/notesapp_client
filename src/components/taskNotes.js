import { RxCross2 } from "react-icons/rx";
function Note({ date, time, content }) {
  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }
  function formatTime(time) {
    return new Date(time).toLocaleTimeString();
  }
  return (
    <div className="flex flex-col m-2 p-2 bg-white rounded-md shadow-lg relative group">
      <span className="absolute top-1 right-1 text-red-400 cursor-pointer group-hover:opacity-100 opacity-0 "  >
        <RxCross2  className="text-xl "/>
      </span>
      <p className=" text-fit text-black  max-h-32 overflow-y-scroll no-scrollbar">
        {content}
      </p>
      <div className="flex self-end m-0 font-medium  text-neutral-700">
        <div className="grow">{formatDate(date)}</div>
        <div className="my-auto w-2 m-1 h-2 rounded-full bg-neutral-700" />
        <div className="grow">{formatTime(time)}</div>
      </div>
    </div>
  );
}
export default Note;
