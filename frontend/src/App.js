import React, { useEffect, useState } from 'react'
import Register from "./Components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import axios from 'axios';
import Admin from "./Components/Admin";
import Login from "./Components/Login";
import Loader from "./Components/Loader";
function App (){

  const [data, setData] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      axios.get("/api/v2/user").then((res) => {
        if(res.data !== null){
          setData(true);
        }
        else{
          setData(false);
        }
        if(res.data.user.role !== "user"){
          setIsAdmin(true);
        }
        else{
          setIsAdmin(false);
        }
      });
    }, 4000);
  }, [])
  

  return (
    <Router>
      <Switch>
       <Route exact path="/" component={loading ? Loader : !data ? Register : !isAdmin ?  Home : Admin} />
       <Route exact path="/login" component = {Login} />
      </Switch>
    </Router>
  )
}

export default App