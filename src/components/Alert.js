import React, { Component } from 'react';

export class AlertExam extends Component {
    render() {
        return (
            <div className="alert alert-danger">
                <strong>คำเตือน !!</strong> 
                ดูเหมือนวิชาสอบจะชนกันนะ ลองแก้ไขอีกที
            </div>
        )
    }
}

export class AlertStudy extends Component {
    render() {
        return (
            <div className="alert alert-danger">
                <strong>คำเตือน !!</strong> 
                ดูเหมือนวิชาบางอันจะชนกันนะ
            </div>
        )
    }
}
