import React from 'react'
import two from "../Images/2.jpg";
import AdvanceFeature from "../Cards/AdvanceFeature";
import "../style.css";

const AdvanceFeatureMain = () => {
  const Features = [
    {
      title: "AdvanceFeature",
      Des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      cardNo:1,
      Image:two,
      borderBool:true
    },
    {
      title: "AdvanceFeature",
      Des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      cardNo:2,
      Image:two,
      borderBool:true
    },
    {
      title: "AdvanceFeature",
      Des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      cardNo:3,
      Image:two,
      borderBool:false
    },
  ];
  return (
    <div
    className="h-auto p-8"
        style={{ background: "linear-gradient(177deg,#0d1d2d 62%, #ffff 50%)" }}
      >
        <div className="mx-1/4">
          <p className="text-center p-8 text-bold text-white text-5xl">
            Simplify operating and manage with tranparensy
          </p>
          <div className="grid grid-cols-3">
            {Features.map((item) => (
              <AdvanceFeature title={item.title} des={item.Des} key={0} cardNo={item.cardNo} Image={item.Image} borderBool={item.borderBool}/>
            ))}
          </div>
        </div>
      </div>
  )
}

export default AdvanceFeatureMain