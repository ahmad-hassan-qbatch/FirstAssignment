import React from "react";
import Card from "../Cards/Card";
import "../style.css";
import {LikeTwoTone } from "@ant-design/icons";

const RobustWorkflowMain = () => {
  const Workflow = [
    {
      title: "Robust WorkFlow",
      des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon: (
        <div
          className="rounded-full w-12 h-12 flex items-center justify-center"
          style={{ backgroundColor: "#2273EA" }}
        >
          <LikeTwoTone style={{ fontSize: "25px" }} />
        </div>
      ),
    },
    {
      title: "Robust WorkFlow",
      des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon: (
        <div
          className="rounded-full w-12 h-12 flex items-center justify-center"
          style={{ backgroundColor: "#2273EA" }}
        >
          <LikeTwoTone style={{ fontSize: "25px" }} />
        </div>
      ),
    },
    {
      title: "Robust WorkFlow",
      des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon: (
        <div
          className="rounded-full w-12 h-12 flex items-center justify-center"
          style={{ backgroundColor: "#2273EA" }}
        >
          <LikeTwoTone style={{ fontSize: "25px" }} />
        </div>
      ),
    },
    {
      title: "Robust WorkFlow",
      des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon: (
        <div
          className="rounded-full w-12 h-12 flex items-center justify-center"
          style={{ backgroundColor: "#2273EA" }}
        >
          <LikeTwoTone style={{ fontSize: "25px" }} />
        </div>
      ),
    },
    {
      title: "Robust WorkFlow",
      des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon: (
        <div
          className="rounded-full w-12 h-12 flex items-center justify-center"
          style={{ backgroundColor: "#2273EA" }}
        >
          <LikeTwoTone style={{ fontSize: "25px" }} />
        </div>
      ),
    },
    {
      title: "Robust WorkFlow",
      des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      icon: (
        <div
          className="rounded-full w-12 h-12 flex items-center justify-center"
          style={{ backgroundColor: "#2273EA" }}
        >
          <LikeTwoTone style={{ fontSize: "25px" }} />
        </div>
      ),
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 mx-1/4 p-8">
      {Workflow.map((item) => (
        <Card title={item.title} des={item.des} icon={item.icon} key={0} />
      ))}
    </div>
  );
};

export default RobustWorkflowMain;
