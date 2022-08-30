import Cargil_Mock_Data from './MOCK_DATA (1).json'
import Columns from './Columns'
import { useTable, useGlobalFilter, useSortBy } from 'react-table'
import React, {useMemo} from 'react'
import Globalfilter from './Globalfilter'
// import './table.css'
 
 function Sort_GlobalFilter_Table() {
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
   } = useTable({  data,columns }, useGlobalFilter, useSortBy)
 
   const { globalFilter } = state
   console.log(rows.length)

   return (
     <div style ={{
      display : 'flex',
      flexDirection : 'column',
      margin : '50px',
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
               <th 
                 {...column.getHeaderProps(column.getSortByToggleProps())}
                 style={{
                   borderBottom: 'solid 2px black',
                   background: 'aliceblue',
                   color: 'black',
                   padding : '5px',
                   fontWeight: 'bold',
                //    display : 'flex',
                //    justifyContent : 'left',
                //    flexDirection : 'column'
                 }}
               >
                
                 {column.render('Header')}
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

 export default Sort_GlobalFilter_Table