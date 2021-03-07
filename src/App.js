import {useState} from 'react'
import { Route, Switch } from 'react-router-dom'
import 'tachyons'

import Nav from './components/Nav'
import Home from './components/Home'
import Rooms from './components/Rooms'
import Error from './components/Error'
import RoomDetails from './components/RoomDetails'


function App() {

  return (
    <div className="">
       <Nav  />
      <Switch>
       
        <Route exact path = "/">
          <Home />
        </Route>

        <Route exact path = "/rooms">
          <Rooms />
        </Route>   
        
        <Route exact path = "/rooms/:slug">
          <RoomDetails />
        </Route>   
          
        <Route >
          <Error />
        </Route>  
      </Switch>   
      
      
    </div>
  );
}

export default App;
