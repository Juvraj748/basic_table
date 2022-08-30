// // import logo from './logo.svg';
// import './App.css';
import Cargil_Mock_Data from './MOCK_DATA (1).json'
import Columns from './Columns'
import { useTable, useSortBy } from 'react-table'
import React, {useMemo} from 'react'
import { isCursorAtEnd } from '@testing-library/user-event/dist/utils'
// import './table.css'
 
 function Sorting_Table() {
   const data = useMemo(() => Cargil_Mock_Data,[])
 
   const columns = useMemo(() => Columns,[])
 
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     rows,
     prepareRow,
   } = useTable({  data,columns }, useSortBy)
 
   return (
     <div style ={{
      display : 'flex',
      marginTop : '50px',
      // alignContent : 'center',
      justifyContent : 'center'
     }}>
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
                  //  display : 'flex',
                  //  justifyContent : 'left'
                 }}
               >
                
                 {column.render('Header')}
                 {/* <span>
                  {column.isSorted ? (column.isSortedDesc ? ' ^': ' v') : ''}
                </span> */}
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

 export default Sorting_Table