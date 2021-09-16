import React ,{Component} from 'react';
import {Card, Container} from 'react-bootstrap';
import Statedata from './Statedata';
import axios from 'axios';

class India extends Component{
    constructor(){
        super();
            this.state={
                data :  [] 
            }

    }
        componentDidMount(){
            axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
                this.setState({data:response.data});
            })
        
    }
    render(){
        return(
            <div className="row">
                <div className="text-center m-3col-md-12">
                    <img src="https://countryflags.io/in/shiny/64.png"/>
                    <h3>India</h3>
                </div>
                <div className="col-md-12">
                    <Container>
                    <div className="row">
                        <div className="col-md-3">

                        <Card text='light' className="card bg-primary"  style={{ width: '18rem' }}>
                        <Card.Body className="text-center white ">
                            <Card.Title className="text-black bg-white">TOTAL CASES</Card.Title>
                            <h3 text="white">{this.state.data.cases}</h3> 
                            <Card.Text >
                             [  Today : {this.state.data.todayCases}   ]
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </div>
                          <div className="col-md-3">

                        <Card bg="warning" text="white" style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title className="text-black bg-white">ACTIVE CASES</Card.Title>
                            <h3 text="white">{this.state.data.active}</h3>
                            <Card.Text >
                             [  Today : {this.state.data.todayCases}  ]
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-3">

                        <Card bg="success" text="white" style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title className="text-black bg-white">RECOVERED</Card.Title>
                            <h3 text="white">{this.state.data.recovered} </h3>
                            <Card.Text >
                             [  Today : {this.state.data.todayRecovered} ]
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-3">

                        <Card bg="danger"  text="light" style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title className="text-black bg-white">DEATHS</Card.Title>
                            <h3 text="white">{this.state.data.deaths}</h3>
                            <Card.Text >
                             [  Today : {this.state.data.todayDeaths}  ]
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </div>
                        
                        <h5 className="text-center m-3">list of states in india</h5>
                        <div className="col-md-12">
                            <Statedata/>
                        
                        </div>
                    </div>
                   
                    </Container>
            </div>
            
            </div>

        )
    }
}
export default India;
{/*state_district_wisestate_district_wise*/}