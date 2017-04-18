import React, { Component } from 'react';
import { HiddenboxExam } from '../components/Box'
class RowExam extends Component {
    
    render() {
        const { data } = this.props
        const showhidden = data.map((data)=>{
            return(
                <HiddenboxExam data={ data }/>
            )
        })
        return (
            <div>
                <div className="day_head" style={{ "color": "#F3DF12", "height": "40px" }}>M 15/5/2017</div>
                <div className="row_row">
                    { showhidden }
                </div>
            </div>
        );
    }
}

export default RowExam;