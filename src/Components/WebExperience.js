import React from 'react'
import one from "../1.jpg";
import Navbar from "./Navbar";
import { ArrowRightOutlined} from "@ant-design/icons";

const WebExperience = () => {
  return (
    <div>
    <div class="h-auto forBackground">
      <div class="mx-1/4">
        <Navbar />
        <div class="grid grid-cols-2 mx-1/2" style={{marginTop:"20px"}}>
          <div>
            <p class="text-4xl text-white flex justify-content font-bold">
              Create Stunnig Web Experience
            </p>
            <p class="text-slate-300 ">
              Our Landing page template works on all devices, so you only
              have to set it up once and get beautiful result for ever
            </p>
            <div class="grid grid-cols-2">
              <button
                type="button"
                class="text-white w-2/3 bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-1 text-center mr-3 md:mr-0"
              >
                Request Demo{" "}
                <ArrowRightOutlined className="text-slate-300 text-sm py-2" />
              </button>
              <button
                type="button"
                class="text-white w-2/3 bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-1 text-center mr-3 md:mr-0"
              >
                Explore Products{" "}
              </button>
            </div>
          </div>
          <div>
            <img src={one} class="h-6/7 w-full" alt="Flowbite Logo"></img>
          </div>
        </div>
      </div>
    </div>

    <div
      class="h-40 forBackground"
      style={{
        background:
          "linear-gradient(to right bottom, #111D2C 50%, #ffff 50%)",
      }}
    ></div>
  </div>
  )
}

export default WebExperience