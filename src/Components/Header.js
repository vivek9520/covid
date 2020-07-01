import React, {Component} from 'react';
import './../CSS/Header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <header className="tc pv4 pv5-ns  header ">

                        <h1 className="f5 f4-ns fw6 mid-gray headtext">COVID-19 DASHBOARD</h1>
                         <h3 className="f5 f4-ns fw6 mid-gray date">{this.props.Data.update_date_time}</h3>
                    <hr className="new5"/>
                </header>
            </div>
        );
    }
}

export default Header;
