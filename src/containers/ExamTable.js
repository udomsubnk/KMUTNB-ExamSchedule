import React, { Component } from 'react'
import { HiddenboxExam } from '../components/Box'
import RowExam from './RowExam'
class ExamTable extends Component {
    
    render() {
        const { dayExambox,examarrayMid } = this.props
        const examarrayMidshow = examarrayMid.map((data)=>
			<RowExam data={data} />
		)
        return (
            <div>
                <center><h4 className="pdt20"> Exam Schudule </h4></center>
                <div className="index_container pdt20">
                    <div className="table-schdule">
                        <div className="index_header">
                            <div className="index_firstHeaderExam"></div>
                                { dayExambox }
                        </div>
                        <div className="index_day">
                            { examarrayMidshow }
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}

export default ExamTable