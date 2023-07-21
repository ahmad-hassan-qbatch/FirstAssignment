import React from 'react'
import two from "../2.jpg";

const AdvanceFeature = ({title,des}) => {
  return (
    <figure class="rounded-xl p-8">
    <img src={two} alt="" width="350" height="350"></img>
    <p class="font-bold text-black">{title}</p>
    <p>
      {des}
    </p>
  </figure>
  )
}

export default AdvanceFeature