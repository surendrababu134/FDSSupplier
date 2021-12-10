import React from 'react'
import { TextField, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';

const Restaurent = () => {


  const history = useNavigate();
    return (
        <div className="bodyContainer">
            <div className="restuarantMenu">
            <h1 className="alignMentCenter">RESTAURANT DETAILS</h1>
        <div className="divField">
          <TextField
            type="email"
            className="width-90"
            id="standard-basic"
            label="Restaurant Name"
            placeholder="Enter Name"
            variant="standard"
            onBlur={(e)=>{
                // let validation = validateEmail(e);
                // if(!validation){
                //     toast.error("Please enter valid email.")
                // }
            }}
          />
        </div>
        <div className="divField">
        <TextField
          id="standard-multiline-static"
          label="Restaurant Address"
          multiline
          className="width-90"
          rows={4}
          placeholder="Enter Address"
          defaultValue=""
          variant="standard"
        />
        </div>
        <div className="divField">
          <TextField
            type="number"
            className="width-90"
            id="standard-basic"
            label="Phone Number"
            placeholder="Enter Phone Number"
            variant="standard"
            onBlur={(e)=>{
                // let validation = validateEmail(e);
                // if(!validation){
                //     toast.error("Please enter valid email.")
                // }
            }}
          />
        </div>
        <div>
            <Button variant="contained" className="menuBtnAdjustment" onClick={()=>{ history('/menus') }}>Prepare Menu <ArrowForwardIosIcon /></Button>
        </div>
            </div>
        </div>
    )
}

export default Restaurent
