import React, { Component } from 'react';

export class ProgressOne extends Component {
    render() {
        const iii = 'iconOpen'
        return (
           <div className="journey-list mgt20">
                <div className="step-1">
                    <div className={iii}>1</div>
                    <div className="name">เลือกวิชา</div>
                </div>
                <div className="step-2">
                    <div className="iconClose">2</div>
                    <div className="name">จัดการ</div>
                </div>
                <div className="step-3">
                    <div className="iconClose">3</div>
                    <div className="name">สรุปวิชา</div>
                </div>
                <div className="journey-arm"></div>
            </div> 
        )
    }
}
export class ProgressTwo extends Component {
    render() {
        return (
           <div className="journey-list mgt20">
                <div className="step-1">
                    <div className="iconOpen">1</div>
                    <div className="name">เลือกวิชา</div>
                </div>
                <div className="step-2">
                    <div className="iconOpen">2</div>
                    <div className="name">จัดการ</div>
                </div>
                <div className="step-3">
                    <div className="iconClose">3</div>
                    <div className="name">สรุปวิชา</div>
                </div>
                <div className="journey-arm"></div>
            </div> 
        )
    }
}
export class ProgressThree extends Component {
    render() {
        return (
           <div className="journey-list mgt20">
                <div className="step-1">
                    <div className="iconOpen">1</div>
                    <div className="name">เลือกวิชา</div>
                </div>
                <div className="step-2">
                    <div className="iconOpen">2</div>
                    <div className="name">จัดการ</div>
                </div>
                <div className="step-3">
                    <div className="iconOpen">3</div>
                    <div className="name">สรุปวิชา</div>
                </div>
                <div className="journey-arm"></div>
            </div> 
        )
    }
}