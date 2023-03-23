// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import data from './data'

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function DenseTable() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} size="small" aria-label="a dense table">
//         <TableHead>
//           <TableRow>
//           <TableCell>sl_no</TableCell>
//             <TableCell>business_code</TableCell>
//             {/* <TableCell>business_name</TableCell> */}
//             <TableCell>cust_no</TableCell>
//             {/* <TableCell>cust_name</TableCell> */}
//             <TableCell>clear_date</TableCell>
//             <TableCell>business_year</TableCell>
//             <TableCell>doc_id</TableCell>
//             <TableCell>posting_date</TableCell>
//             <TableCell>document_create_date</TableCell>
//             {/* <TableCell>document_create_date1</TableCell> */}
//             <TableCell>due_in_date</TableCell>
//             <TableCell>invoice_currency</TableCell>
//             <TableCell>document_type</TableCell>
//             <TableCell>posting_id</TableCell>
//             {/* <TableCell>area_business</TableCell> */}
//             <TableCell>total_open_amount</TableCell>
//             <TableCell>baseline_create_date</TableCell>
//             <TableCell>cust_payment_term</TableCell>
//             <TableCell>invoice_id</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((data) => (
//             <TableRow key={data.name}>
//               <TableCell component="th" scope="data">
//                 {data.name}
//               </TableCell>
//               <TableCell>{data.si_no}</TableCell>
//               <TableCell>{data.business_code}</TableCell>

//               <TableCell>{data.cust_no}</TableCell>

//               <TableCell>{data.clear_date}</TableCell>
//               <TableCell>{data.business_year}</TableCell>
//               <TableCell>{data.doc_id}</TableCell>
//               <TableCell>{data.posting_date}</TableCell>
//               <TableCell>{data.document_create_date}</TableCell>
//               <TableCell>{data.due_in_date}</TableCell>
//               <TableCell>{data.invoice_currency}</TableCell>
//               <TableCell>{data.document_type}</TableCell>
//               <TableCell>{data.posting_id}</TableCell>
//               <TableCell>{data.total_open_amount}</TableCell>
//               <TableCell>{data.baseline_create_date1}</TableCell>
//               <TableCell>{data.cust_payment_term}</TableCell>
//               <TableCell>{data.invoice_id}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </ButtonGroup>
    </ButtonGroup>
    
  );
}
