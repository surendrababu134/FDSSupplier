import React, { useState } from "react";
import {
  TextField,
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
  InputLabel,
  Select,
  MenuItem,
  Tabs,
  Box,
  Tab,
  Button,
} from "@mui/material";
import TabPanel from "./TabPanel";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';

const MenuItems = () => {
  const [itemList, setItemsList] = useState([
    {
      id: 1,
      name: "BreakFast",
      description:
        "BreakFast will be available in the morning (5 A.M to 10 A.M)",
      items: [
        {
          id: 1,
          name: "Idly",
          price: "20",
          type: "Veg",
        },
        {
          id: 2,
          name: "Dosa",
          price: "40",
          type: "Veg",
        },
      ],
    },
    {
      id: 2,
      name: "Starters",
      description:
        "Starters will be available  in the afternoon (12 P.M to 3 P.M)",
      items: [
        {
          id: 1,
          name: "Machuria",
          price: "80",
          type: "Veg",
        },
        {
          id: 2,
          name: "Chicken Manchuria",
          price: "40",
          type: "Non-Veg",
        },
      ],
    },
    {
      id: 3,
      name: "Main Course",
      description:
        "Main Course will be available  in the afternoon (12 P.M to 3 P.M)",
      items: [
        {
          id: 1,
          name: "Veg Tali",
          price: "120",
          type: "Veg",
        },
        {
          id: 2,
          name: "Chicken Tali",
          price: "140",
          type: "Non-Veg",
        },
      ],
    },
    {
      id: 4,
      name: "Biryanis",
      description:
        "Biryanis will be available  in the afternoon (12 P.M to 3 P.M)",
      items: [
        {
          id: 1,
          name: "Veg Biryani",
          price: "140",
          type: "Veg",
        },
        {
          id: 2,
          name: "Chicken Biryani",
          price: "160",
          type: "Non-Veg",
        },
      ],
    },
    {
      id: 5,
      name: "Fast Foods",
      description:
        "Fast Foods will be available  in the afternoon (12 P.M to 3 P.M)",
      items: [
        {
          id: 1,
          name: "Veg Fried Rice",
          price: "100",
          type: "Veg",
        },
        {
          id: 2,
          name: "Chicken Fried Rice",
          price: "120",
          type: "Non-Veg",
        },
      ],
    },
  ]);
  const [itemName, setItemName] = useState("");
  const [itemType, setItemType] = useState(false);
  const [itemMenuId, setItemMenuId] = useState("");
  const [tabValue, setTabValue] = useState(0);
  const [selectedItem, setSelectedItem] = useState({});
  const [editItems,setEditItems] = useState(false);

  const tabSelection = (e, newValue) => {
    setTabValue(newValue);
  };

  const deleteItem = (menu, menuItem, menuIndex, menuItemIndex) => {
    let dummyMenuList = JSON.parse(JSON.stringify(itemList));
    let dummyMenu = dummyMenuList[menuIndex];
    dummyMenu.items.splice(menuItemIndex, 1);
    dummyMenuList[menuIndex] = dummyMenu;
    setItemsList(dummyMenuList);
  };

  const editItem = (menu, menuItem, menuIndex, menuItemIndex) => {
    setEditItems(true);
    setItemName(menuItem.name);
    setItemType(menuItem.type === "Non-Veg");
    setItemMenuId(menu.id)
  };
  return (
    <div className="bodyContainer">
      <div>
        <h1 className="alignMentCenter">MENU ITEMS</h1>
        <div className="divField">
          <TextField
            type="text"
            className="width-90"
            id="standard-basic"
            label="Item Name"
            placeholder="Enter Item Name"
            variant="standard"
            value={itemName}
            onBlur={(e) => {
              setItemName(e.target.value);
              // let validation = validateEmail(e);
              // if(!validation){
              //     toast.error("Please enter valid email.")
              // }
            }}
          />
        </div>
        <div className="divField">
          <FormControl component="fieldset" variant="standard">
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    checked={itemType}
                    onChange={() => {
                      setItemType(!itemType);
                    }}
                    name="gilad"
                  />
                }
                label={itemType ? "Non-Veg" : "Veg"}
              />
            </FormGroup>
          </FormControl>
        </div>
        <div className="divField">
          <FormControl
            className="width-90"
            variant="standard"
            sx={{ m: 1, minWidth: 120 }}
          >
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={itemMenuId}
              onChange={(e) => {
                setItemMenuId(e.target.value);
              }}
              label="Age"
            >
              {itemList.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div>
        <Button variant="contained" className="menuBtnAdjustment marginLeft" onClick={()=>{ }}>{editItems?"Edit":"Add"} Item Name<AddIcon /></Button>
        </div>
        <div>
          <div className="floatLeftWidth">
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={tabValue}
              onChange={tabSelection}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              {itemList.map((item, index) => {
                return <Tab key={index} label={item.name} />;
              })}
            </Tabs>
          </div>
          <div className="floatLeftWidth-70">
            {itemList.map((item, indexed) => {
              return item.items.map((itemVal, i) => {
                return (
                  <TabPanel value={tabValue} index={indexed}>
                    <div className="blockValue">
                      {itemVal.name}{" "}
                      <span className="floatVal">
                        <DeleteIcon
                          className="cursorPointer"
                          onClick={(e) => {
                            deleteItem(item, itemVal, indexed, i);
                          }}
                        />
                      </span>
                      <span className="floatVal">
                        <ModeEditIcon
                          className="cursorPointer"
                          onClick={(e) => {
                            editItem(item, itemVal, indexed, i);
                          }}
                        />
                      </span>
                    </div>
                  </TabPanel>
                );
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
