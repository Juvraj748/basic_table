import React, {useMemo} from 'react'
import Basic_Table from './Basic_Table'
import Filtering_Table from './Filtering_Table'
import Sorting_Table from './Sorting_Table'
import Sort_GlobalFilter_Table from './Sort_GlobalFilter_Table'
// import './table.css'
 
 function App() {
   return (
    <div className='App'>
      <Sort_GlobalFilter_Table/>
    </div>
   )
 }

 export default App