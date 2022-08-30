import React from 'react'

export const Globalfilter = ({filter, setFilter}) => {
  return (
    <span>
      {/* Search : {' '} */}
      <input 
      placeholder='Search...'
      value= {filter || ''}
      onChange = { e => {
        setFilter(e.target.value)
      }} />
    </span>
  )
}

export default Globalfilter
