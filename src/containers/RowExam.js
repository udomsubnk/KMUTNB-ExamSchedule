import React, { Component } from 'react';
import { HiddenboxExam } from '../components/Box'
class RowExam extends Component {
    
    render() {
        const { data } = this.props
        const showhidden = data.map((data)=>
            <HiddenboxExam key={data.id} data={ data }/>
        )
        const date = data.map( data => data )
        const getDate = date.map( data => data.date )
        return (
            <div className="list-exam">
                <div className="day_headExam" style={{ "color": "black", "height": "40px" }}>{ getDate } </div>
                <div className="row_row">
                    { showhidden }
                </div>
            </div>
                
           
        );
    }
}

export default RowExam;