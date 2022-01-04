import React, { useEffect } from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Restaurent from './Restaurant';
import Menus from './Menu';
import MenuItems from './MenuItems';
import { toast } from 'react-toastify';
import { cookies } from '../../utils/utils';
const Body = () => {
    const history = useNavigate();
    useEffect(()=>{
        if(cookies.get("login") !== "true"){
            history('/signup');
        }
    },[]);
    return (
        <div className="bodyCSS">
            
            {/* <Link to="/">Restuarants</Link> */}
            <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path='/resturant' element={<Restaurent />} />
            <Route path='/menus' element={<Menus />} />
            <Route path='/menuitems' element={<MenuItems />} />
            </Routes>
            
        </div>
    )
}


export default Body
