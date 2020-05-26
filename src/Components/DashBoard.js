import React, {Component} from 'react';
import Axios from "axios";
import Card from "./Card";
import Header from "./Header";
import "./../CSS/DashBoard.css"

class DashBoard extends Component {

    constructor() {
        super();
        this.state ={
            DataArry:[],
            Loding :true
        }
    }

    async componentDidMount() {

        const url = "https://www.hpb.health.gov.lk/api/get-current-statistical"
        Axios.get(url)
            .then(response =>{
          const CData = response.data.data
                this.setState({
                    DataArry:CData,
                    Loding:false
                })

            })

    }

    render() {
        return (

            <div>

                <Header Data={this.state.DataArry}/>
                {this.state.Loding ? <h1 className="loading">Loding.....</h1>: <Card Data={this.state.DataArry}/>}

            </div>
        );
    }
}

export default DashBoard;
