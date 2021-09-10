import React ,{Component} from 'react';
import Axios from 'axios';
import {Accordion} from 'react-bootstrap';

class Statedata extends Component{
    constructor(){
        super();
        this.state={
            stateData:{}
        }
    }
    componentDidMount(){
        Axios.get("https://data.covid19india.org/state_district_wise.json").then(response=>{
            
            this.setState({stateData:response.data});
            console.log(response.data);
        })
    }
    render(){
        return(
            
            <div className="row">
                           

                <div className="col-md-12">
                <div> list of states n india</div>
                <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  
</Accordion>

            </div>
            </div>
        )
    }
}
export default Statedata;