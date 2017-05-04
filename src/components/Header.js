import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
           <div className="container moveIn">
                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <h1 className="text-centertop">Pre-Courses</h1>
                        <h4 className="kmutnb-text">KMUTNB</h4>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Header;