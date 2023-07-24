import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import "../style.css";
function DemoSection() {
  return (
    <div className="p-20 bg-demoSecion" >
      <div className="mx-3/4">
        <div className="w-50 content-center justify-center text-center">
          <p className="text-4xl font-bold">
            Say Good bye to long Queues, big updates, and{" "}
            <span className="text-green-400">confusion</span>.
          </p>
          <p className="text-md text-demoSectionText p-4">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum --- semper quis lectus
            nulla at volutpat diam ut veneatis.
          </p>
          <button
            type="button"
            className="text-white mt-1/2 px-3 bg-blue-500 px-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-1 text-center mr-3 md:mr-0"
          >
            Request Demo{" "}
            <ArrowRightOutlined className="text-slate-300 text-sm py-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DemoSection;
