import React from 'react';
import './App.css';
import {Link,Route} from "react-router-dom";
import Mac from "./components/Mac";
import IPad from "./components/IPad";
import IPhone from "./components/IPhone";
import Watch from "./components/Watch";
import TV from "./components/TV";
import Music from "./components/Music";
import Support from "./components/Support";


function App() {
  return (
    <div className="container">
      <div className="App">
        <Link to="/mac">Mac</Link>
        <Link to="/ipad">iPad</Link>
        <Link to="/iPhone">iPhone</Link>
        <Link to="/watch">Watch</Link>
        <Link to="/tv">TV</Link>
        <Link to="/music">Music</Link>
        <Link to="/support">Support</Link>
      </div>
      <Route path="/mac" component={Mac}></Route>
      <Route path="/ipad" component={IPad}></Route>
      <Route path="/iphone" component={IPhone}></Route>
      <Route path="/watch" component={Watch}></Route>
      <Route path="/tv" component={TV}></Route>
      <Route path="/music" component={Music}></Route>
      <Route path="/support" component={Support}></Route>
    </div>
    
  );
}

export default App;
