import React,{useState, useEffect} from 'react'
import { TextField, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { cookies } from '../../../utils/utils';
import { addResturantAction } from '../../../actions/resturants';

const Restaurent = () => {
  const dispatch = useDispatch();

  const history = useNavigate();
  const [restObject,setRestObject] = useState({
    restName:"",
    restAddress:"",
    restPhone:""
  })
  const { restObjectData } = useSelector((state) => {
    return {
      restObjectData: state.ResturantService.restObjectData,
    };
  });
  useEffect(()=>{
    if(restObjectData.failure){
      toast.error(restObjectData.msg);
    }else{
      if(restObjectData && restObjectData.data){
        history("/menus");
      }else{
        history("/resturant");
      }
      
    }
  },[restObjectData])
  const addResturantData = () =>{
    // history('/menus')
    if(restObject.restName){
      if(restObject.restAddress){
        if(restObject.restPhone){
          restObject.createDate = new Date().getTime();
          restObject.modifiedDate = new Date().getTime();
          restObject.createdBy = cookies.get('USR_VLE');
          restObject.modifiedBy = cookies.get('USR_VLE');
          dispatch(addResturantAction(restObject))
        }else{
          toast.error("Please enter resturant phone number.")
        }
      }else{
        toast.error("Please enter resturant address.");
      }
    }else{
      toast.error("Please enter resturant name.")
    }
  }
    return (
        <div className="bodyContainer">
            <div className="restuarantMenu">
            <h1 className="alignMentCenter">RESTAURANT DETAILS</h1>
        <div className="divField">
          <TextField
          required
            type="email"
            className="width-90"
            id="standard-basic"
            label="Restaurant Name"
            placeholder="Enter Name"
            variant="standard"
            value={restObject.restName}
            onChange={(e) => {
              setRestObject({ ...restObject, restName: e.target.value });
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
        required
          id="standard-multiline-static"
          label="Restaurant Address"
          multiline
          className="width-90"
          rows={4}
          placeholder="Enter Address"
          defaultValue=""
          variant="standard"
          value={restObject.restAddress}
            onChange={(e) => {
              setRestObject({ ...restObject, restAddress: e.target.value });
            }}
        />
        </div>
        <div className="divField">
          <TextField
          required
            type="number"
            className="width-90"
            id="standard-basic"
            label="Phone Number"
            placeholder="Enter Phone Number"
            variant="standard"
            value={restObject.restPhone}
            onChange={(e) => {
              setRestObject({ ...restObject, restPhone: e.target.value });
            }}
            onBlur={(e)=>{
                // let validation = validateEmail(e);
                // if(!validation){
                //     toast.error("Please enter valid email.")
                // }
            }}
          />
        </div>
        <div>
            <Button variant="contained" className="menuBtnAdjustment" onClick={addResturantData}>Prepare Menu <ArrowForwardIosIcon /></Button>
        </div>
            </div>
        </div>
    )
}

export default Restaurent
