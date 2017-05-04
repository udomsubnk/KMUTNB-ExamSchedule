import React, { Component } from 'react';
import { findSectionFromSection_id } from '../api/section'
export class ProgressBar extends Component {
    constructor(){
        super()
        this.pageOne = this.pageOne.bind(this)
        this.pageTwo = this.pageTwo.bind(this)
    }
    pageOne(){
        this.props.goPageOne()
    }
    pageTwo(){
        const { ReplyPagethree} = this.props.replyPage
        const { section_id,goPagetwo } = this.props
        if(ReplyPagethree == true){
            let data=[]
            for(let i in section_id){
                data.push(findSectionFromSection_id(section_id[i]))
            }
            goPagetwo(data)
        }
    }
    render() {
        const { ReplyPageone,ReplyPagetwo,ReplyPagethree} = this.props.replyPage
        const iii = 'iconOpen'
        return (
            <div className="process-bar moveIn">
                <center>
                    <div className="processbar-process-bar">
                        <div className="processbar-process">
                            <div className="processbar-img">
                                <div className="processbar-circle processbar-p1" onClick={this.pageOne}>
                                    <span className="processbar-number">1</span>
                                </div>
                            <div className="processbar-line-r">
                        </div>
                    </div>
                    <div className="processbar-text processbar-p1">เริ่มต้น</div>
            </div>

            <div className="processbar-process">
                <div className="processbar-img">
                    <div className="processbar-circle processbar-p2" onClick={ this.pageTwo }>
                        <span className="processbar-number">2</span>
                    </div>
                    <div className="processbar-line-l"></div>
                <div className="processbar-line-r"></div>
            </div>
            <div className="processbar-text processbar-p2">จัดตารางเรียน</div>
                </div><div className="processbar-process"><div className="processbar-img">
                    <div className="processbar-line-l">
                        </div><div className="processbar-circle processbar-p3">
                            <span className="processbar-number">3</span>
                        </div>
                    </div>
                <div className="processbar-text processbar-p3">สำเร็จ</div></div></div>
                </center>
            </div>
        )
    }
}