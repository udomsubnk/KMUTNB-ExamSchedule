import React, { Component } from 'react'
import { HiddenboxExam } from '../components/Box'
import RowExam from './RowExam'
class ExamTable extends Component {
    
    render() {
        const { dayExambox,dataarray,title } = this.props
        const examarrayshow = dataarray.map((data,index)=>
			<RowExam key={ index } data={ data } />
		)
        return (
            <div>
                <center><h4 className="pdt20"> { title } </h4></center>
                <div className="index_container pdt20 z-depth-3 border-rad-4">
                    <div className="table-schdule">
                        <div className="index_header">
                            <div className="index_firstHeaderExam"></div>
                            { dayExambox }
                        </div>
                        <div className="index_day">
                            { examarrayshow }
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}

export default ExamTable