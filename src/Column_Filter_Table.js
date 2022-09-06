import Cargil_Mock_Data from './Tc-In_TC-Out_IMOS.json'
import Columns from './Columns'
import { useTable, useGlobalFilter, useFilters, useSortBy, usePagination } from 'react-table'
import React, {useMemo} from 'react'
import Globalfilter from './Globalfilter'
import Column_Filter from './Column_Filter'
// import './table.css'
import logo from './Cargil-logo.jpg'
 
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
     page, 
     // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
   } = useTable({  data,columns,initialState: { pageIndex: 0 } }, useFilters, useGlobalFilter, useSortBy, usePagination )
 
   const { globalFilter } = state

   return (
     <div style ={{
      display : 'flex',
      flexDirection : 'column',
    //   margin : '50px',
      alignItems : 'center',
      justifyContent : 'center'
     }}>
      <img src={logo} alt="Logo" />
        <Globalfilter filter = {globalFilter} setFilter = {setGlobalFilter} />

        {/* <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre> */}
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
                   background: '#638C0C',
                  //  border : 'black',
                  // background: '#195919',
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
         {page.map(row => {
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

     <div className="pagination" style = {{margin : '30px'}}>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
     </div>
   )
 }

 export default Column_Filter_Table