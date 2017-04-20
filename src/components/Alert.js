import React, { Component } from 'react';

export class AlertExam extends Component {
    render() {
        return (
            <div className="alert alert-danger">
                <strong>คำเตือน !!</strong> 
                <p>ดูเหมือนตารางสอบจะชนกันนะ ลองตรวจสอบดีๆ</p>
            </div>
        )
    }
}

export class AlertStudy extends Component {
    render() {
        return (
            <div className="alert alert-danger">
                <strong>คำเตือน !!</strong> 
                วิชาเรียนซ้ำ ไอ้สัดเลือกดีๆ
            </div>
        )
    }
}
