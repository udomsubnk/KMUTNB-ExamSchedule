import React,{Component} from 'react';

class ScheduleTable extends Component {
    render() {
        const { boxdata } = this.props
        return (
            <div className="index_container">
                <div className="table-schdule">
                    { this.props.children }
					<div className="index_day">
                        <div className="day_head" style={{ "color": "#F3DF12", "height": "40px" }}>Mon</div>
                            <div className="row_row">
                                { boxdata }
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
			</div>   
        );
    }
}

export default ScheduleTable;