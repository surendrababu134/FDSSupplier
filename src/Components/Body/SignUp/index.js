import React, { useState, useEffect } from "react";
import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../../actions/user";
import { useNavigate } from "react-router-dom";
import { cookies } from "../../../utils/utils";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { data } = useSelector((state) => {
    return {
      data: state.UserService.data,
    };
  });
  const [signUpObject, setSignUpObject] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)

  useEffect(() => {
    if (data.failure) {
      toast.error(data.msg);
    } else {
      if (cookies.get("login") !== "true") {
        history("/signup");
      } else {
        history("/resturant");
      }
    }
  }, [data]);

  useEffect(()=>{
    if (cookies.get("login") !== "true" && !cookies.get('USR_VLE')) {
      history("/signup");
    }
  },[]);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  };

  const validateEmail = (e) => {
    return String(e.target.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const signupFunc = () => {
    if (signUpObject.userName) {
      if (signUpObject.password) {
        if (signUpObject.confirmPassword) {
          if (signUpObject.password === signUpObject.confirmPassword) {
            signUpObject.createDate = new Date().getTime();
            signUpObject.modifiedDate = new Date().getTime();
            signUpObject.createdBy = "admin";
            signUpObject.modifiedBy = "admin";
            dispatch(signUpAction(signUpObject));
          } else {
            toast.error("Password is not matching with confirm password.");
          }
        } else {
          toast.error("Please fill confirm password");
        }
      } else {
        toast.error("Please fill password");
      }
    } else {
      toast.error("Please fill username");
    }
  };
  return (
    <div className="bodyContainer">
      <div className="signupSignIn">
        <h1 className="alignMentCenter">SIGN UP</h1>
        <div className="divField">
          <TextField
            type="email"
            className="width-90"
            id="standard-basic"
            label="User Name"
            variant="standard"
            onBlur={(e) => {
              // let validation = validateEmail(e);
              // if(!validation){
              //     toast.error("Please enter valid email.")
              // }
            }}
            onChange={(e) => {
              setSignUpObject({ ...signUpObject, userName: e.target.value });
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
            onChange={(e) => {
              setSignUpObject({ ...signUpObject, password: e.target.value });
            }}
          />
        </div>
        <div className="divField">
          <TextField
            type={showConfirmPassword?"text":"password"}
            className="width-90"
            id="standard-basic"
            label="Confirm Password"
            variant="standard"
            InputProps={{
              endAdornment: <InputAdornment position="end"><IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowConfirmPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton></InputAdornment>,
            }}
            onChange={(e) => {
              setSignUpObject({
                ...signUpObject,
                confirmPassword: e.target.value,
              });
            }}
          />
        </div>
        <div className="divField">
          <Button variant="contained" className="width-90" onClick={signupFunc}>
            Sign Up
          </Button>
        </div>
        <div className="divField">
          <Button variant="outlined" className="width-90 ">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
