import React from 'react'

function Random(props) {
    let random = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)
    
  return (
    <div className="Random box">
        <p>Random value between {props.min} and {props.max} = {random}</p>

    </div>
  )
}
export default Random