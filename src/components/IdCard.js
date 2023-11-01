import React from 'react'

function IdCard(props) {
  console.log(props);

  return (
    <div className='IdCard box'>
      <img src={props.picture} alt="ProfilePic"/>
    <div className='right'>
      <p><strong>First Name:</strong> {props.firstName}</p>
      <p><strong>Last Name: </strong> {props.lastName}</p>
      <p><strong>Gender: </strong>{props.gender}</p>
      <p><strong>Height: </strong>{props.height}</p>
      <p><strong>Birth: </strong>{props.birth.toDateString()}</p>
    </div>
    </div>


  )
}

export default IdCard