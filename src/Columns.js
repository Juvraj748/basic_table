import Column_Filter from "./Column_Filter"

const columns = [
    {
        Header : "Ref_Number",
        accessor : "Ref_Number",
        Filter : Column_Filter
    },
    {
        Header : 'TC_CODE',
        accessor : 'TC_CODE',
        Filter : Column_Filter
    },
    {
        Header : "CP_DATE",
        accessor : "CP_DATE",
        Filter : Column_Filter
    },
    {
        Header : 'COA_ID',
        accessor : 'COA_ID',
        Filter : Column_Filter
    },
    {
        Header :"Status",
        accessor : "Status",
        Filter : Column_Filter
    },
    {
        Header :"Counter_Party",
        accessor : "Counter_Party",
        Filter : Column_Filter
    },
    {
        Header :"delivery_port",
        accessor : "delivery_port",
        Filter : Column_Filter
    },
    {
        Header :"redelivery_port",
        accessor : "redelivery_port",
        Filter : Column_Filter
    },
    {
        Header :"delivery_date",
        accessor : "delivery_date",
        Filter : Column_Filter
    },
    {
        Header :"vessel_type",
        accessor : "vessel_type",
        Filter : Column_Filter
    }
]


export default columns