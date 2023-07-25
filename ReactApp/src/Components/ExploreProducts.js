import React from 'react'
import { ArrowRightOutlined } from "@ant-design/icons";

const ExploreProducts = () => {
  return (
    <div><div>
    <p className="text-5xl text-white flex justify-content font-bold py-8">
      Create Stunnig Web Experience
    </p>
    <p className="text-slate-300 text-justify flex justify-content text-textColor">
      Our Landing page template works on all devices, so you only have
      to set it up once and get beautiful result forever
    </p>
    <div className="flex flex-row items-center space-x-4 py-4">
      <div>
        <button
          type="button"
          className="text-white px-4 py-2 bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm py-1 text-center"
        >
          Request Demo
          <ArrowRightOutlined className="my-2" />
        </button>
      </div>

      <div>
        <button
          type="button"
          className="text-white px-4 py-2 bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm py-1 text-center"
        >
          Explore Products
        </button>
      </div>
    </div>
  </div></div>
  )
}

export default ExploreProducts