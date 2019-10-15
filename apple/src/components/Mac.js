import React from 'react';
import {Route,Link} from "react-router-dom";
import MacPage from "../pages/MacPage";
import MacPage2 from "../pages/MacPage2";
import MacPage3 from "../pages/MacPage3";

function Mac(){

    return(
    <div>
        <div className = "subMenu">
            <h1>The Mac Page</h1>
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