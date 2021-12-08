import React from 'react';
import { Route, Routes} from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
const Body = () => {
    return (
        <div className="bodyCSS">
            
            {/* <Link to="/">Restuarants</Link> */}
            <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            </Routes>
            
        </div>
    )
}


export default Body
