import React from 'react'
import './App.css'

export const Column_Filter = ({column}) => {
  const {filterValue, setFilter} = column
    return (
    <span>
        <input 
        style={{
          // minWidth : '92%',
          margin : "4px",
          padding : '4px',
          fontWeight : 'normal'
        }}
        placeHolder= "Search..." 
        value = {filterValue || ''} 
        onChange = { e => {
            setFilter(e.target.value)
          }}/>
    </span>

  )
}

export default Column_Filter
