import { Link } from "@mui/material"
import Column_Filter from "./Column_Filter"
import Pop_up_window1 from "./Components/Pop_up_window1"

const columns = [
    {
        Header : "Ref_Number",
        accessor : "External_Ref",
        Filter : Column_Filter,
        // Cell: ({ cell: {value} }) => <Pop_up_window1 values={value} />
        Cell: props =>{
            return ( 
              <Pop_up_window1 props = {this} />
            )
          }
        // onclick : e => {<Pop_up_window1/>} 
    },
    {
        Header : 'TC_CODE',
        accessor : 'TC_Code',
        Filter : Column_Filter
    },
    {
        Header : "CP_DATE",
        accessor : "Confirmation_Date",
        Filter : Column_Filter
    },
    {
        Header : 'COA_ID',
        accessor : 'Coa_ID',
        Filter : Column_Filter
    },
    {
        Header :"Status",
        accessor : "Status",
        Filter : Column_Filter
    },
    {
        Header :"Counter_Party",
        accessor : "Counterparty_Short_Name",
        Filter : Column_Filter
    },
    {
        Header :"delivery_port",
        accessor : "Delivery_Port_Name",
        Filter : Column_Filter
    },
    {
        Header :"redelivery_port",
        accessor : "Redelivery_Port_Name",
        Filter : Column_Filter
    },
    {
        Header :"delivery_date",
        accessor : "Delivery_Date",
        Filter : Column_Filter
    },
    // {
    //     Header :"vessel_type",
    //     accessor : "vessel_type",
    //     Filter : Column_Filter
    // }
]


export default columns