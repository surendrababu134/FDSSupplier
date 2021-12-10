import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Menus = () => {
    const history = useNavigate();
    const [menuName, setMenuName] = useState("");
    const [isEdit,setIsEdit] = useState(false);
    const [menuList,setMenuList] = useState([
        {
            id:1,
            name:"BreakFast",
            description:"BreakFast will be available in the morning (5 A.M to 10 A.M)"
        },
        {
            id:2,
            name:"Starters",
            description:"Starters will be available  in the afternoon (12 P.M to 3 P.M)"
        },
        {
            id:3,
            name:"Main Course",
            description:"Main Course will be available  in the afternoon (12 P.M to 3 P.M)"
        },
        {
            id:4,
            name:"Biryanis",
            description:"Biryanis will be available  in the afternoon (12 P.M to 3 P.M)"
        },
        {
            id:5,
            name:"Fast Foods",
            description:"Fast Foods will be available  in the afternoon (12 P.M to 3 P.M)"
        }
    ]);
    const editMenuItem = (item) =>{
        setMenuName(item.name);
        setIsEdit(true);
    }

    const deleteMenuItem = (item) =>{
        let getIndex = menuList.findIndex(x=>x.id===item.id);
        let dummyList = JSON.parse(JSON.stringify(menuList));
        dummyList.splice(getIndex,1);
        setMenuList(dummyList);
    }
  return (
    <div className="bodyContainer">
      <div>
        <h1 className="alignMentCenter">MENU DETAILS</h1>
        <div className="divField">
          <TextField
            type="text"
            className="width-90"
            id="standard-basic"
            label="Menu Name"
            placeholder="Enter Menu Name"
            variant="standard"
            value={menuName}
            onBlur={(e) => {
              // let validation = validateEmail(e);
              // if(!validation){
              //     toast.error("Please enter valid email.")
              // }
            }}
          />
        </div>
        <div>
            
            <Button variant="contained" className="menuBtnAdjustment" onClick={()=>{ history('/menuitems') }}>Prepare Items<ArrowForwardIosIcon /></Button>
            <Button variant="contained" className="menuBtnAdjustment marginLeft" onClick={()=>{ history('/menus') }}>{isEdit?"Edit":"Add"} Menu Name<AddIcon /></Button>
        </div>
        <div className="menuItemListData">
            <div className="menuItemList"><h2>Menu List</h2></div>
            {menuList.map((menuItem,index)=>{
                return (<div className="itemMenu">{menuItem.name} <span className="floatVal"><EditIcon onClick={()=>{
                    editMenuItem(menuItem)
                }}/><DeleteIcon onClick={()=>{
                    deleteMenuItem(menuItem)
                }}/></span></div>)
            })}
        </div>
      </div>
    </div>
  );
};

export default Menus;
