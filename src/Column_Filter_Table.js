import Cargil_Mock_Data from './MOCK_DATA (1).json'
import Columns from './Columns'
import { useTable, useGlobalFilter, useFilters } from 'react-table'
import React, {useMemo} from 'react'
import Globalfilter from './Globalfilter'
import Column_Filter from './Column_Filter'
// import './table.css'
 
 function Column_Filter_Table() {
   const data = useMemo(() => Cargil_Mock_Data,[])
 
   const columns = useMemo(() => Columns,[])
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     state,
     setGlobalFilter,
     prepareRow,
   } = useTable({  data,columns }, useFilters, useGlobalFilter )
 
   const { globalFilter } = state

   return (
     <div style ={{
      display : 'flex',
      flexDirection : 'column',
    //   margin : '50px',
      alignItems : 'center',
      justifyContent : 'center'
     }}>
        <Globalfilter filter = {globalFilter} setFilter = {setGlobalFilter} />

      <table {...getTableProps()} 
      // style={{ border: 'solid 1px green' }}
      >
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 2px black',
                   background: '#638C1C',
                   color: 'white',
                   padding : '5px',
                   fontWeight: 'normal',
                  //  display : 'flex',
                  //  justifyContent : 'left'
                 }}
               >
                 {column.render('Header') }
                 <div style={{marginTop : '10px'}}>{column.canFilter ? column.render('Filter') : null }</div>
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                      // alignContent :'center',
                      // alignItems : 'center',
                      // justifyContent : 'center',
                      textAlign : 'center',
                       padding: '5px',
                      //  justifyItems : 'center',
                      //  border: 'solid 1px gray',
                      //  background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
     </div>
   )
 }

 export default Column_Filter_Table