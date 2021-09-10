import React ,{Component} from 'react';
import {Card} from 'react-bootstrap';
import Statedata from './Statedata';

class India extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <img src="https://countryflags.io/in/shiny/64.png"/>
                    <h3>India</h3>
                </div>
                <div className="col-md-12">
                    
                    <div className="row">
                        <div className="col-md-3">

                        <Card text='light' className="card bg-primary"  style={{ width: '18rem' }}>
                        <Card.Body className="text-center white">
                            <Card.Title text="black">TOTAL CASES</Card.Title>
                            <h3 text="white">124577687</h3>
                            <Card.Text >
                             [  Today : 1234  ]
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </div>
                          <div className="col-md-3">

                        <Card bg="warning"  style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title text="black">ACTIVE CASES</Card.Title>
                            <h3 text="white">124577687</h3>
                            <Card.Text >
                             [  Today : 1234  ]
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-3">

                        <Card bg="success"  style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title text="black">RECOVERED</Card.Title>
                            <h3 text="white">124577687</h3>
                            <Card.Text >
                             [  Today : 1234  ]
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </div>
                        <div className="col-md-3">

                        <Card bg="danger"  text="light" style={{ width: '18rem' }}>
                        <Card.Body className="text-center">
                            <Card.Title >DEATHS</Card.Title>
                            <h3 text="white">124577687</h3>
                            <Card.Text >
                             [  Today : 1234  ]
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </div>

                        <div className="col-md-12">
                            <Statedata/>
                        
                        </div>
                    </div>

            </div>
            </div>

        )
    }
}
export default India;
{/*state_district_wisestate_district_wise*/}