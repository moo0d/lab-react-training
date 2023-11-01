import React from 'react'


function BoxColor(props) {
  return (
    <div className='box-color'
        style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        padding: '20px',
    }}
    >
        rgb({props.r}, {props.g}, {props.b})
    </div>
  );
}

export default BoxColor