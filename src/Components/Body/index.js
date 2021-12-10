import React from 'react';
import { Route, Routes} from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Restaurent from './Restaurant';
import Menus from './Menu';
import MenuItem from './MenuItems';
const Body = () => {
    return (
        <div className="bodyCSS">
            
            {/* <Link to="/">Restuarants</Link> */}
            <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path='/resturant' element={<Restaurent />} />
            <Route path='/menus' element={<Menus />} />
            <Route path='/menuitems' element={<MenuItem />} />
            </Routes>
            
        </div>
    )
}


export default Body
