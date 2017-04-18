import React,{ Component } from 'react';

class AllDayList extends Component {
    constructor(){
        super()
    }
    
    render() {
        const { subjectbox } = this.props
        return (
            <div>
                <div className="index_day">
                    
                    <div className="day_head" style={{ "color": "#F3DF12", "height": "40px" }}>Mon</div>
                        <div className="row_row">
                            { subjectbox }
                        </div>
                </div>
                <div className="index_day">
                    <div className="day_head" style={{ "color": "#E447B1", "height": "40px" }}>Tue</div>
                        <div className="row_row">
                                   
                        </div>
                </div>
                <div className="index_day">
                    <div className="day_head" style={{ "color": "#11E454", "height": "40px" }}>Wed</div>
                        <div className="row_row">
                                    
                        </div>
                </div>
                <div className="index_day">
                    <div className="day_head" style={{ "color": "#E4830E", "height": "40px" }}>Thu</div>
                        <div className="row_row">
                                    
                        </div>
                </div>
                <div className="index_day">
                    <div className="day_head" style={{ "color": "#3083E4", "height": "40px" }}>Fri</div>
                        <div className="row_row">
                                    
                        </div>
                </div>
                <div className="index_day">
                    <div className="day_head" style={{ "color": "#7F14C2", "height": "40px" }}>Sat</div>
                        <div className="row_row">
                                    
                        </div>
                </div>
            </div>
            
        );
    }
}

export default AllDayList;