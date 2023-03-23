import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import { useState } from 'react';
import TextField from "@material-ui/core/TextField";
// import axios from "axios";
import { useState } from "react";
import axios from "axios";
export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
const[custnum,setCustnum]=useState("");

const[byear,setByear]=useState("");
const[doid,setDoid]=useState("");

const[invid,setInvid]=useState("");

const handleCustnum=(event)=>{
	setCustnum(event.target.value);
}

const handleByear=(event)=>{
	setByear(event.target.value);
}

const handleDoid=(event)=>{
	setDoid(event.target.value);
}

const handleInvid=(event)=>{
	setInvid(event.target.value);
}

const handleAdvanceSearch = () => {
  const getData = async () => {
    let response = await axios(
      "http://localhost:8080/Hrc_back/AdvanceSearch",
      {
        params: {
          
          doid,
          custnum,
          invid,
          
          byear,
          
          
          



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
          width: "230px",
          
          backgroundColor: "#2d4052",
          color: "#fff",
          borderColor: "#3385ff",
        }}
        onClick={handleClickOpen}
      >
        ADVANCE SEARCH
      </Button>
      <Dialog
        PaperProps={{
          style: {
            backgroundColor: "#2d4052",
            boxShadow: "none",
          },
        }}
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ color: "#fff" }} id="alert-dialog-title">
          {"Advance Search"}
        </DialogTitle>
        <DialogContent style={{ height: "150px" }}>
          <DialogContentText id="alert-dialog-description">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                top:"20px",
                right:"10%",
                width:"240px",
                
                
              }}
              onChange={handleCustnum}
              id="outlined-basic"
              label="Customer Number"
              variant="filled"
            />
            
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                top:"20px",
                left:"10px",
                width:"240px",
                
              }}
              onChange={handleByear}
              id="outlined-basic"
              label="Business Year"
              variant="filled"
            />
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                top: "45px",
                right:"11.5%",
                width:"240px",
                
              }}
              onChange={handleDoid}
              id="outlined-basic"
              label="Document Id"
              variant="filled"
            />
            
            
            
            <TextField
              style={{
                backgroundColor: "#fff",
                borderRadius: "5px",
                top: "45px",
                
                width:"240px",
                
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
                width: "280px",
                color: "#fff",
                backgroundColor: "#2d4052",
                borderColor: "#fff",
                right:"2px",
                height: "40px",
              }}
              onClick={handleAdvanceSearch}
            >
              SEARCH
            </Button>
            <Button
              variant="outlined"
              style={{
                width: "280px",
                color: "#fff",
                backgroundColor: "#2d4052",
                borderColor: "#fff",

                height: "40px",
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
