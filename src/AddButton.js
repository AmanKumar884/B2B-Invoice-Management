import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import RefreshIcon from "@mui/icons-material/Refresh";
import DialogTitle from "@material-ui/core/DialogTitle";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useState } from "react";
import { Box } from "@mui/system";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import AddOperation from './AddOperation';
import AdvanceSearch from './AdvanceSearch';

import MyGrid from "./MyGrid";
export default function VariantButtonGroup() {
  const [checkedValue, setCheckedValue] = React.useState([]);
  const onSave = (CheckedValue) => {
    if (checkedValue.includes(CheckedValue)) {
      const index = checkedValue.indexOf(CheckedValue);
      checkedValue.splice(index, 1);
    } else checkedValue.push(CheckedValue);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  

  const handleClose = () => {
    setOpen(false);
  };

  const [currency, setCurrency] = useState("");
  const [custpay, setCustpay] = useState("");

  const handleCurrency = (event) => {
    setCurrency(event.target.value);
  };

  const handleCustpayment = (event) => {
    setCustpay(event.target.value);
  };
  const handleEdit = () => {
    const getData = async () => {
      let response = await axios.get(
        "http://localhost:8080/Hrc_back/EditServlet",
        {
          params: {
            si_no: checkedValue[0],
            invoice_currency: currency,
            cust_pay_term: custpay,
          },
        }
      );
      console.log(response);
    };
    getData();
    setOpen(false);
  };
  const refreshPage = () => {
    window.location.reload();
  };
  const handleDelete = () => {
    const getData = async () => {
      let response = await axios.get(
        "http://localhost:8080/Hrc_back/DeleteServlet",
        { params: { si_no: checkedValue[0] } }
      );
      console.log(response);
    };
    getData();
    setOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#2d4052",
          display: "flex",
          flexDirection: "column",

          pl: 20,
          borderRadius: "80",

          "& > *": {
            ml: 30,
            m: 3,
          },
        }}
      >
        <ButtonGroup
          style={{
            position: "absolute",
            top: "10.5%",
            left: "1%",
            height: "5%",
          }}
          color="primary"
          aria-label="medium secondary button group"
        >
          <Button
            style={{
              width: "230px",
              backgroundColor: "#3385ff",
              color: "#fff",
              borderColor: "#3385ff",
            }}
          >
            PREDICT
          </Button>
          <Button
            style={{
              width: "230px",
              backgroundColor: "#2d4052",
              color: "#fff",
              borderColor: "#3385ff",
            }}
          >
            ANALYTICS VIEW
          </Button>
          <AdvanceSearch/>  
          {/* <Button
            style={{
              width: "230px",
              backgroundColor: "#2d4052",
              color: "#fff",
              borderColor: "#3385ff",
            }}
          >
            
          </Button> */}
          <TextField
            style={{
              backgroundColor: "#fff",
              borderRadius: "5px",
              position: "relative",
              width: "27%",

              top: "10%",
              left: "13%",
              height:"45px"
            }}
            id="standard-basic"
            label="Search Customer Id"
            variant="standard"
          />
          <Button
            style={{ top: "1%", right: "23%", borderColor: "#3385ff" }}
            onClick={refreshPage}
          >
            <RefreshIcon style={{ color: "#3385ff" }} />
          </Button>
        </ButtonGroup>

        <ButtonGroup
          color="primary"
          aria-label="medium secondary button group"
          style={{
            backgroundColor: "#2d4052",
            display: "flex",
            paddingLeft: "900px",
            border: "5rem",
            borderColor: "#3385ff",
          }}
        >
          
          <AddOperation/>
          
          <Button
            style={{
              width: "180px",
              backgroundColor: "#2d4052",
              color: "#fff",
              borderColor: "#3385ff",
              borderTopColor:"#2d4052",
              borderBottomColor:"#2d4052",
            }}
            onClick={handleClickOpen}
          >
            EDIT
          </Button>
          <Dialog
            PaperProps={{
              style: {
                backgroundColor: "#2d4052",
                boxShadow: "none",
              },
            }}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle style={{ color: "#fff" }} id="alert-dialog-title">
              {"Edit"}
            </DialogTitle>
            <DialogContent>
              <TextField
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
                onChange={handleCurrency}
                id="outlined-basic"
                label="Invoice Currency"
                variant="filled"
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <TextField
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                }}
                onChange={handleCustpayment}
                id="outlined-basic"
                label="Cust Payment"
                variant="filled"
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                style={{
                  width: "50%",
                  color: "#fff",
                  backgroundColor: "#2d4052",
                  borderColor: "#fff",
                }}
                onClick={handleEdit}
              >
                EDIT
              </Button>
              <Button
                variant="outlined"
                style={{
                  width: "50%",
                  color: "#fff",
                  backgroundColor: "#2d4052",
                  borderColor: "#fff",
                }}
                onClick={handleClose}
                autoFocus
              >
                CANCEL
              </Button>
            </DialogActions>
          </Dialog>

          <Button
            style={{
              width: "180px",
              backgroundColor: "#2d4052",
              color: "#fff",
              borderColor: "#3385ff",
              
            }}
            onClick={handleDelete}
            
          >
            DELETE
            
          </Button>
        </ButtonGroup>
      </Box>

      <MyGrid OnSaveEvent={onSave} />
    </div>
  );
}
