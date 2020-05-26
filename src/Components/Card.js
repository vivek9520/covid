import React, {Component} from 'react';
import './../CSS/Card.css'

class Card extends Component {
    render() {
        return (
            <div>
                <div className="container fontstyle ">
                    <div>
                        <h2 className="srilanka">LOCAL</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="card-box bg-blue">
                                <div className="inner">
                                    <h3> {this.props.Data.local_new_cases} </h3>
                                   <b> <p> LOCAL NEW CASE </p></b>
                                </div>
                                <div className="icon">
                                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="card-box bg-orange">
                                <div className="inner">
                                 <b>   <h3>{this.props.Data.local_total_cases} </h3>
                                 <p> LOCAL TOTAL CASE </p></b>
                                </div>
                                <div className="icon">
                                    <i className="fa fa-money" aria-hidden="true"></i>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="card-box bg-green ">
                                <div className="inner">
                                    <b><h3>{this.props.Data.local_recovered}  </h3>
                                    <p> LOCAL RECOVERED</p></b>
                                </div>
                                <div className="icon">
                                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="card-box bg-red">
                                <div className="inner">
                                 <b> <h3> {this.props.Data.local_deaths} </h3>
                                    <p> LOCAL DEATHS </p></b>
                                </div>
                                <div className="icon">
                                    <i className="fa fa-users"></i>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="srilanka">GLOBAL</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="card-box bg-blue">
                                <div className="inner">
                                    <h3> {this.props.Data.global_new_cases} </h3>
                                    <b> <p> GLOBAL NEW CASE </p></b>
                                </div>
                                <div className="icon">
                                    <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="card-box bg-orange">
                                <div className="inner">
                                    <b>   <h3>{this.props.Data.global_total_cases} </h3>
                                        <p> GLOBAL TOTAL CASE </p></b>
                                </div>
                                <div className="icon">
                                    <i className="fa fa-money" aria-hidden="true"></i>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="card-box bg-green ">
                                <div className="inner">
                                    <b><h3>{this.props.Data.global_recovered}  </h3>
                                        <p> GLOBAL RECOVERED</p></b>
                                </div>
                                <div className="icon">
                                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="card-box bg-red">
                                <div className="inner">
                                    <b> <h3> {this.props.Data.global_deaths} </h3>
                                        <p> GLOBAL DEATHS </p></b>
                                </div>
                                <div className="icon">
                                    <i className="fa fa-users"></i>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


                <hr className="new5"/>
                <div className="footer-copyright text-center py-3 foot">© 2020 Copyright:
                    <a href=""> J.Vivek</a>
                </div>
            </div>
        );
    }
}

export default Card;
