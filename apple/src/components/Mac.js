import React from 'react';
import {Route,Link} from "react-router-dom";
import MacPage from "../pages/Mac/MacPage";
import MacPage2 from "../pages/Mac/MacPage2";
import MacPage3 from "../pages/Mac/MacPage3";

function Mac(props){
console.log("from mac",props)
    return(
    <div>
        <div className = "subMenu">
            <h1>The Mac Menu</h1>
            <div className="flexMenu">
                <Link to="/mac/iMac">iMac</Link>
                <Link to="/mac/macBook">MacBook</Link>
                <Link to="/mac/macPro">Mac Pro</Link>
            </div>

        </div>
        <div>
            <Route path="/mac/iMac" component={MacPage}></Route>
            <Route path="/mac/macBook" component={MacPage2}></Route>
            <Route path="/mac/macPro" component={MacPage3}></Route>
        </div>
    </div>
    );
}

export default Mac;