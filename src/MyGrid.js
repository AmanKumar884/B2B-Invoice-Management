import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TablePagination from '@material-ui/core/TablePagination';


import { Checkbox } from '@mui/material';



// import { usePagination } from '@material-ui/lab/Pagination';
import { useEffect, useState } from "react";
import { getData } from "./data";






function MyGrid(props) {

  const handleCheckbox=(event)=>{
    
    props.OnSaveEvent(event.target.value);
  }
  
  const Onsave=(event)=>{
    console.log(event.target.value);
    
  }
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  

  const [data, setData] = useState([]);

  useEffect(async () => {
    setData(await getData());}, []);
  return (
    
    
    <TableContainer component={Paper}>
      
      <Table   size='small' aria-label="simple table" style={{backgroundColor:"#2d4052",height:"10px",padding:"0px"}}>
        <TableHead style={{color:"#fff"}}>
        <TableRow >
        <TableCell></TableCell>
            <TableCell style={{color:"#fff"}}align='left'>Sl no</TableCell>
            <TableCell style={{color:"#fff"}} align='left'>Bussiness Code</TableCell>
            <TableCell  style={{color:"#fff"}}align="left">Customer Number</TableCell>
            {/* <TableCell>cust_name</TableCell> */}
            <TableCell style={{color:"#fff",width: '8%'}}align="left">Clear Date</TableCell>
            <TableCell style={{color:"#fff"}}align="left">Business Year</TableCell>
            <TableCell style={{color:"#fff"}}align="left">Document id</TableCell>
            <TableCell style={{color:"#fff",width: '8%'}}align="left">Posting Date</TableCell>
            <TableCell style={{color:"#fff",width: '8%'}}align="left">Document Create Date</TableCell>
            {/* <TableCell>document_create_date1</TableCell> */}
            <TableCell style={{color:"#fff",width: '8%'}}align="left">Due Date</TableCell>
            <TableCell style={{color:"#fff"}}align="left">Invoice Currency</TableCell>
            <TableCell style={{color:"#fff"}}align="left">Document Type</TableCell>
            <TableCell style={{color:"#fff"}}align="left">Posting id</TableCell>
            {/* <TableCell>area_business</TableCell> */}
            <TableCell style={{color:"#fff"}}align="left">Total Open amount</TableCell>
            <TableCell style={{color:"#fff",width: '8%'}}align="left">Baseline Create Date</TableCell>
            <TableCell style={{color:"#fff"}}align="left">Cust Payment Term</TableCell>
            <TableCell style={{color:"#fff"}}align="left">Invoice id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        
        
          {(rowsPerPage > 0
                            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : data
                          ).map((data) => (
        
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={data.si_no} style={{color:"#fff"}} >
              
              <TableCell ><Checkbox  name="Selected_row" value={data.si_no} onChange={handleCheckbox} style={{color:"white"}}/></TableCell>
              <TableCell style={{color:"#fff"}}component="th" scope="data">

                {data.si_no}
              </TableCell>
              {/* <TableCell align="left">{data.si_no}</TableCell> */}
              <TableCell style={{color:"#fff"}}align="left">{data.business_code}</TableCell>

              <TableCell style={{color:"#fff"}}align="left">{data.cust_no}</TableCell>
              <TableCell style={{color:"#fff"}}align="left">{data.clear_date}</TableCell>
              <TableCell style={{color:"#fff"}}align="left">{data.business_year}</TableCell>
              <TableCell style={{color:"#fff"}}align="left">{data.doc_id}</TableCell>
              <TableCell style={{color:"#fff"}}align="left">{data.posting_date}</TableCell>
              <TableCell style={{color:"#fff"}}align="left">{data.document_create_date}</TableCell>
              <TableCell style={{color:"#fff"}}align="left">{data.due_in_date}</TableCell>
              <TableCell style={{color:"#fff"}}align="left">{data.invoice_currency}</TableCell>
              <TableCell style={{color:"#fff"}}align="left">{data.document_type}</TableCell>
              <TableCell style={{color:"#fff"}}align="left">{data.posting_id}</TableCell>
              <TableCell style={{color:"#fff"}}align="left">{data.total_open_amount}</TableCell>
              <TableCell style={{color:"#fff"}}align="left">{data.baseline_create_date1}</TableCell>
              <TableCell style={{color:"#fff"}}align="left">{data.cust_payment_term}</TableCell>
              <TableCell style={{color:"#fff"}}align="left">{data.invoice_id}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
        )

      </Table>
      <TablePagination style={{backgroundColor:"#2d4052",color:"#fff",borderTop:"2px solid #fff"}}
      component="div"
      count={data.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
    
  )
  
    </TableContainer>
    
    
    
  );
}
export default MyGrid;