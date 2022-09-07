import React from 'react'

export default function Title(props) {
  return (
    <div>
        <h2 style={{textAlign: "center", backgroundColor:'red', borderBottom: '3px solid black'}}>{props.mainTitle}</h2>
    </div>
  )
}
