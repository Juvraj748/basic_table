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
    <>
    <img style={{display:'flex', margin : '20px'}} src={logo} alt="Logo" />

     <div style ={{
      display : 'flex',
      flexDirection : 'column',
      alignItems : 'center',
      justifyContent : 'center',
      alignContent : 'center',
      maxWidth : '500%',
      overflow : 'auto'
     }}>
      {/* <img src={logo} alt="Logo" /> */}
        {/* <Globalfilter filter = {globalFilter} setFilter = {setGlobalFilter} /> */}

      <table {...getTableProps()} style = {{marginTop:'50px',}}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th {...column.getHeaderProps()}
                //  style={{
                //    borderBottom: 'solid 2px black',
                //    background: '#638C0C',
                //   //  border : 'black',
                //   // background: '#195919',
                //    color: 'white',
                //    padding : '5px',
                //    fontWeight: 'normal',
                //   //  display : 'flex',
                //   //  justifyContent : 'left'
                //  }}
               >
                <div>{column.canFilter ? column.render('Filter') : null }</div>
                <div style={{
                   background: '#c0c0c0',
                   padding : '5px',
                   fontWeight: 'normal',
                 }}>
                    {column.render('Header')}</div>
                 
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
                        textAlign : 'center',
                        padding: '5px',
                        // maxWidth:'50px',
                        // maxHeight : '10px',
                        border: 'solid 1px gray',
                    //   overflow : 'auto'
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

     <div className="pagination" 
        style = {{
            margin : '30px' , 
            // transform: 'translate(150%, -50%)'
        }}>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        
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
     </>
   )
 }

 export default Column_Filter_Table