import React from 'react'
import AdvanceFeature from "./AdvanceFeature";

const AdvanceFeatureMain = () => {
  const Features = [
    {
      title: "AdvanceFeature",
      Des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      title: "AdvanceFeature",
      Des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
    {
      title: "AdvanceFeature",
      Des: "Duis aute irue dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    },
  ];
  return (
    <div
        class="h-auto bg-slate-800 p-8"
        style={{ background: "linear-gradient(350deg, #ffff 50%,#111D2C 50%)" }}
      >
        <div class="mx-1/4">
          <p class="text-center p-8 text-bold text-white text-5xl">
            Simplify operating and manage with tranparensy
          </p>
          <div class="grid grid-cols-3 forFooter">
            {Features.map((item) => (
              <AdvanceFeature title={item.title} des={item.Des} />
            ))}
          </div>
        </div>
      </div>
  )
}

export default AdvanceFeatureMain