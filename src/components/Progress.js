import React, { Component } from 'react';

export class ProgressBar extends Component {
    render() {
        const iii = 'iconOpen'
        return (
            <div className="process-bar">
                <center>
                    <div className="processbar-process-bar"><div className="processbar-process"><div className="processbar-img"><div className="processbar-circle processbar-p1"><span className="processbar-number">1</span></div><div className="processbar-line-r"></div></div><div className="processbar-text processbar-p1">เริ่มต้น</div></div><div className="processbar-process"><div className="processbar-img"><div className="processbar-circle processbar-p2"><span className="processbar-number">2</span></div><div className="processbar-line-l"></div><div className="processbar-line-r"></div></div><div className="processbar-text processbar-p2">จัดตารางเรียน</div></div><div className="processbar-process"><div className="processbar-img"><div className="processbar-line-l"></div><div className="processbar-circle processbar-p3"><span className="processbar-number">3</span></div></div><div className="processbar-text processbar-p3">สำเร็จ</div></div></div>
                </center>
            </div>
        )
    }
}