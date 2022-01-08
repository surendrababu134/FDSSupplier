import React, { useState, useEffect } from "react";
import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction, signInAction } from "../../../actions/user";
import { useNavigate } from "react-router-dom";
import { cookies } from "../../../utils/utils";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { signInData } = useSelector((state) => {
    return {
      signInData: state.UserService.signInData,
    };
  });
    const [signInObject, setSignInObject] = useState({
        userName: "",
        password: ""
      });
      const [showPassword,setShowPassword] = useState(false);
      useEffect(()=>{
        if (cookies.get("login") !== "true" && !cookies.get('USR_VLE')) {
          history("/signin");
        }
      },[]);
      useEffect(() => {
        if (signInData.failure) {
          toast.error(signInData.msg);
        } else {
          if (cookies.get("login") !== "true") {
            history("/signin");
          } else {
            history("/resturant");
          }
        }
      }, [signInData]);
      const validateEmail = (e) => {
        return String(e.target.value)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
      };
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const signInFunc = () =>{
        if (signInObject.userName) {
          if (signInObject.password) {
            dispatch(signInAction(signInObject));
          }else{
            toast.error("Password is empty.")
          }
        }else{
          toast.error("Username is empty.")
        }
      }
      return (
        <div className="bodyContainer">
          <div className="signupSignIn">
            <h1 className="alignMentCenter">SIGN IN</h1>
            <div className="divField">
              <TextField
                type="email"
                className="width-90"
                id="standard-basic"
                label="User Name"
                variant="standard"
                onChange={(e) => {
                  setSignInObject({ ...signInObject, userName: e.target.value });
                }}
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
                type={showPassword?"text":"password"}
                className="width-90"
                id="standard-basic"
                label="Password"
                variant="standard"
                onChange={(e) => {
                  setSignInObject({ ...signInObject, password: e.target.value });
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>,
                }}
              />
            </div>
            <div className="divField">
            <Button variant="contained" className="width-90" onClick={signInFunc}>Sign In</Button></div>
            <div className="divField">
          <Button variant="outlined" className="width-90 ">Cancel</Button>
          </div>
          </div>
          
        </div>
      )
}

export default SignIn
