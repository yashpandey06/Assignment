import React from "react";
import { useState } from "react";

const Sidebar = ({ handleCloseBtn }) => {
  const [content, setContent] = useState([
    {
      id: 1,
      item: "TikTok",
    },
    {
      id: 2,
      item: "Video",
    },
    {
      id: 3,
      item: "demo",
    },
    {
      id: 4,
      item: "twitter",
    },
    {
      id: 5,
      item: "Discord",
    },
    {
      id: 6,
      item: "Blogs",
    },
  ]);
  return (
    <div className="bg-white w-1/3 flex p-2 mx-2 rounded-md flex-col justify-evenly ">
       <div className="flex justify-end ">
       <button className="shadow-lg hover:bg-slate-300 hover:shadow-sm w-1/3 p-2 rounded-md " onClick={handleCloseBtn}>Close</button>
       </div>
      <div className=" grid grid-cols-2 p-8">
        {content.map((item) => {
          return (
            <div
              className=" flex justify-center items-center m-4"
              key={item.id}
            >
              <input type="checkbox" className="m-2" />
              <div className="text-start ">{item.item}</div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center p-2">// Add  Chat Boxes here</div>
      <div className="flex justify-center p-2">// Add  Search Bar here</div>
    </div>
  );
};

export default Sidebar;
