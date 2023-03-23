import React from "react";
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box style={{ backgroundColor: "#34495E",fontSize:"20px",height:"30px",top:"70%",width: "100%"}}>
      <center>
          <p style={{ color: "white",textAlign:"center",top:"20%"}}>
        <a
          href="https://www.highradius.com/privacy-policy/"
          title="privacy"
          rel="Privacy Policy"
          style={{ color: "blue",textAlign:"left"}}
        >
          Privacy Policy
        </a>
        |© 2022 Highradius Corporation. All rights reserved.
        
        
      </p>
      </center>
    </Box>
  );
};
export default Footer;