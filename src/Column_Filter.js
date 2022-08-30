import React from 'react'
import './App.css'

export const Column_Filter = ({column}) => {
  const {filterValue, setFilter} = column
    return (
    <span>
        <input 
        max-width = "14px"
        placeHolder= "Search..." 
        value = {filterValue || ''} 
        onChange = { e => {
            setFilter(e.target.value)
          }}/>
    </span>

  )
}

export default Column_Filter
