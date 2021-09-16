import React ,{Component} from 'react';
import axios from 'axios';

class World extends Component{
    constructor(){
        super();
        this.state={
            wdata :[]
        }
    }
    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries").then(response=>{
            this.setState({wdata:response.data}); 


        })
        
    }

    render(){
        console.log(this.state.wdata);
        return(
            <div className="row"> 
            <div className="col-md-12">
                <table>
                    <thead>
                        <tr> <td>  </td>
                            <td>Country</td>
                            <td>
                                Total Cases
                            </td>
                            <td>Recovered</td>
                            <td>Death </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.wdata.map((item,key)=>{
                                 return(
                                     <tr>
                                         <td><img style={{width:'60px',margin:'5px'}} src={item.countryInfo.flag}/>   </td>
                                         <td>{item.country}</td>
                                         <td>{item.cases}</td>
                                         <td>{item.recovered}</td>
                                         <td>{item.deaths}</td>
                                     </tr>
                                 )
                            })
                        }
                    </tbody>
                </table>
            </div>
            
            </div>
        )
    }
}
export default World;