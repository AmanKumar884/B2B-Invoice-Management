import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import axios from "axios";


export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const[busid,setBusid]=useState("")
const[custnum,setCustnum]=useState("");
const[cleardate,setCleardate]=useState("");
const[byear,setByear]=useState("");
const[doid,setDoid]=useState("");
const[postid,setPostid]=useState("");
const[docreatedate,setDoccreatedate]=useState("");
const[duedate,setDuedate]=useState("");
const[incurrency,setIncurrency]=useState("");
const[doctype,setDoctype]=useState("");
const[posid,setPosid]=useState("");
const[totopamount,setTotopamount]=useState("");
const[baslinedate,setBaselinedate]=useState("");
const[custpaym,setCustpaym]=useState("");
const[invid,setInvid]=useState("");


const handleBusid=(event)=>{
	setBusid(event.target.value);
}

const handleCustnum=(event)=>{
	setCustnum(event.target.value);
}

const handleCleardate=(event)=>{
	setCleardate(event.target.value);
}

const handleByear=(event)=>{
	setByear(event.target.value);
}

const handleDoid=(event)=>{
	setDoid(event.target.value);
}

const handlePostid=(event)=>{
	setPostid(event.target.value);
}

const handleDoccreatedate=(event)=>{
	setDoccreatedate(event.target.value);
}

const handleDuedate=(event)=>{
	setDuedate(event.target.value);
}

const handleIncurrency=(event)=>{
	setIncurrency(event.target.value);
}

const handleDoctype=(event)=>{
	setDoctype(event.target.value);
}

const handlePosid=(event)=>{
	setPosid(event.target.value);
}

const handleTotopamount=(event)=>{
	setTotopamount(event.target.value);
}

const handleBaselinedate=(event)=>{
	setBaselinedate(event.target.value);
}

const handleCustpaym=(event)=>{
	setCustpaym(event.target.value);
}

const handleInvid=(event)=>{
	setInvid(event.target.value);
}
const handleAdd = () => {
  const getData = async () => {
    let response = await axios(
      "http://localhost:8080/Hrc_back/AddServlet",
      {
        params: {
          
          busid,
          custnum,
          cleardate,
          byear,
          doid,
          postid,
          docreatedate,
          duedate,
          incurrency,
          doctype,
          posid,
          totopamount,
          baslinedate,
          custpaym,
          invid,



        },
      }
    );
    console.log(response);
  };
  getData();
  setOpen(false);
};

  return (
    <div>
      <Button
        variant="outlined"
        style={{
          width: "180px",
          backgroundColor: "#2d4052",
          color: "#fff",
          borderColor: "#3385ff",
        }}
        onClick={handleClickOpen}
      >
        ADD
      </Button>
      <Dialog
        PaperProps={{
          style: {
            backgroundColor: "#2d4052",
            boxShadow: "none",
          },
        }}
        fullWidth
        maxWidth="lg"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ color: "#fff" }} id="alert-dialog-title">
          {"Add"}
        </DialogTitle>
        <DialogContent style={{ height: "300px" }}>
          <DialogContentText id="alert-dialog-description">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
              }}
              onChange={handleBusid}
              id="outlined-basic"
              label="Business Code"
              variant="filled"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
              }}
              onChange={handleCustnum}
              id="outlined-basic"
              label="Customer Number"
              variant="filled"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                width: "200px",
              }}
              onChange={handleCleardate}
              id="date"
              label="Clear Date"
              type="date"
              defaultValue="2022-04-14"
              variant="filled"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
              }}
              onChange={handleByear}
              id="outlined-basic"
              label="Business Year"
              variant="filled"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                top: "15px",
              }}
              onChange={handleDoid}
              id="outlined-basic"
              label="Document Id"
              variant="filled"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                width: "200px",
                top: "15px",
              }}
              onChange={handlePostid}
              id="date"
              label="Posting Date"
              type="date"
              defaultValue="2022-04-14"
              variant="filled"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                top: "15px",
                width: "200px",
              }}
              onChange={handleDoccreatedate}
              id="date"
              label="Document Create Date"
              type="date"
              defaultValue="2022-04-14"
              variant="filled"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                top: "15px",
                width: "200px",
              }}
              onChange={handleDuedate}
              id="date"
              label="Due Date"
              type="date"
              defaultValue="2022-04-14"
              variant="filled"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                top: "30px",
              }}
              onChange={handleIncurrency}
              id="outlined-basic"
              label="Invoice Currency"
              variant="filled"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                top: "30px",
              }}
              onChange={handleDoctype}
              id="outlined-basic"
              label="Document Type"
              variant="filled"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                top: "30px",
              }}
              onChange={handlePosid}
              id="outlined-basic"
              label="Posting Id"
              variant="filled"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                top: "30px",
              }}
              onChange={handleTotopamount}
              id="outlined-basic"
              label="Total Open Amouont"
              variant="filled"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                top: "45px",
                width: "210px",
              }}
              onChange={handleBaselinedate}
              id="date"
              label="Baseline Create Date"
              type="date"
              defaultValue="2022-04-14"
              variant="filled"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                top: "45px",
              }}
              onChange={handleCustpaym}
              id="outlined-basic"
              label="Customer Payment Term"
              variant="filled"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                top: "45px",
              }}
              onChange={handleInvid}
              id="outlined-basic"
              label="Invoice Id"
              variant="filled"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <DialogActions>
            <Button
              variant="outlined"
              style={{
                width: "580px",
                color: "#fff",
                backgroundColor: "#2d4052",
                borderColor: "#fff",

                height: "50px",
              }}
              onClick={handleAdd}
            >
              ADD
            </Button>
            <Button
              variant="outlined"
              style={{
                width: "580px",
                color: "#fff",
                backgroundColor: "#2d4052",
                borderColor: "#fff",

                height: "50px",
              }}
              onClick={handleClose}
              autoFocus
            >
              CANCEL
            </Button>
          </DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}
