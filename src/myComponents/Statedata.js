import React ,{Component} from 'react';
import Axios from 'axios';
import {Accordion,Table} from 'react-bootstrap';
import { pickBy, identity } from 'lodash'

class Statedata extends Component{
    constructor(){
        super();
        this.state={
            stateData:{}    }
    }
    componentDidMount(){
        Axios.get("https://data.covid19india.org/state_district_wise.json").then(response=>{
            console.log(response.data)

            this.setState({stateData:response.data});
            
        })
    }
    render(){
        let keys=Object.keys(JSON.parse(JSON.stringify(this.state.stateData))).slice(1) ;
        console.log(typeof keys);
    
        return(
            
            <div className="row">
                           

                <div className="col-md-12">
                <Accordion>
                    {
                        keys.map((itm,ky)=>{
                            let districts=this.state.stateData[itm].districtData;
                            console.log(this.state.stateData[itm]);
                            let total_active=0;
                            let total_confirmed=0;
                            let total_deaths=0;
                            let total_recover=0;
                            let district_list=[];
                            for(let x in districts){
                                total_active +=districts[x].active;
                                total_confirmed +=districts[x].confirmed;
                                total_deaths +=districts[x].deceased;
                                total_recover +=districts[x].recovered;
                                let obj=districts[x];
                                obj["district_name"]=x;
                                district_list.push(obj);
                                

                            
                            }
                           
                            
                            
                            


                            return(
                                                                <Accordion.Item eventKey={ky}>
                                    <Accordion.Header color="primary">{itm}  Total Cases:{total_confirmed}  Active:{total_active}  Recovered:{total_recover}  Death:{total_deaths}   </Accordion.Header>
                                    <Accordion.Body>
                                        <Table striped bordered hover responsive>
                                            <thead>
                                                <tr>
                                                    <td>District</td>
                                                    <td>Confirmed</td>
                                                    <td>Active</td>
                                                    <td>Recovered</td>
                                                    <td>Deaths</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                district_list.map((itm,ky)=>{
                                                return(
                                                    <tr>
                                                        <td>{itm.district_name}</td>
                                                    
                                                        <td>
                                                           {itm.confirmed} 
                                                        </td>
                                                        <td>{itm.active}</td>
                                                        <td>{itm.recovered}</td>
                                                        <td>{itm.deceased}</td>
                                                    </tr>

                                                )
                                                

                                                })
                                            }
                                            </tbody>
                                            
                                        </Table>
                                    
                                    </Accordion.Body>
                                </Accordion.Item>
                            )
                        })
                    }
  
  
</Accordion>

            </div>
            </div>
        )
    }
}
export default Statedata;