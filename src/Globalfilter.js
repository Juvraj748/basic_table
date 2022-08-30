import React from 'react'

export const Globalfilter = ({filter, setFilter}) => {
  return (
    <span style={{
      marginTop : "30px",
      marginBottom : '20px'
    }}>
      {/* Search : {' '} */}
      <input 
      style={{ fontSize : '15px', maxWidth : '150px', padding : '4px'}}
      placeholder='Search...'
      value= {filter || ''}
      onChange = { e => {
        setFilter(e.target.value)
      }} />
    </span>
  )
}

export default Globalfilter
