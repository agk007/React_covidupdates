import 'bootstrap/dist/css/bootstrap.min.css';

import React , {Component, component} from 'react';
import Header from './myComponents/Header';
import India from './myComponents/India';
import World from './myComponents/World';
import {Button} from 'react-bootstrap';
import{
  BrowserRouter as Router,
  Link,
  Route,
  Switch 
} from 'react-router-dom';

class App extends Component{
  constructor(){
    super();
  }
  render(){
    return( 
      
       <div className="container-fluid">
         
         <Router>
           <Header/>
           <Switch>
              <Route exact path="/">

                  <India/>
                  </Route>
               <Route path="/india">
                  <India/>
               </Route>
               <Route path="/world">
                  <World/>
               </Route>
             
           </Switch>
         </Router>
       
    
      </div>
    )
    }
  }


export default App;
