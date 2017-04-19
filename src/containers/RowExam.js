import React, { Component } from 'react';
import { HiddenboxExam } from '../components/Box'
class RowExam extends Component {
    
    render() {
        const { data } = this.props
        const showhidden = data.map((data)=>
            <HiddenboxExam data={ data }/>
        )
        const date = data.map((data)=>{
            return data
        })
        const inDate = date.map((data)=>{
            return data.date
        })
        return (
            <div className="list-exam">
                <div className="day_headExam" style={{ "color": "black", "height": "40px" }}>{ inDate } </div>
                <div className="row_row">
                    { showhidden }
                </div>
            </div>
                
           
        );
    }
}

export default RowExam;