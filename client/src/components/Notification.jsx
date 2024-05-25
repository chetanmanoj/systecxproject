import React from "react";

const Notification = (props) => {
  return (
    <div className="flex flex-row py-2 justify-between px-12">
      <div className="flex flex-row gap-3 items-center">
        <img src={props.pfp} alt="picture" className="h-14 rounded-3xl" />
        <div className="flex flex-col">
          <span className="text-[#243448] font-medium">
            {props.name} <span className="text-[#66687D]"> has updated </span> {props.task}
          </span>
          <div className="text-[#05172E] rounded-[6px] text-center text-[10px] bg-[#E2E7FF] px-2 py-2 font-medium w-[83px] h-[22px]">
            {props.tag}
          </div>
        </div>
      </div>
      <span className="text-[#66687D] text-[10px]">{props.time} ago</span>
    </div>
  );
};

export default Notification;
