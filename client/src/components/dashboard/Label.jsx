import React from "react"
const Label = ({ color }) => {
  console.log(color)
  return <div className={"card-label colorblindable " + color}></div>
}

export default Label