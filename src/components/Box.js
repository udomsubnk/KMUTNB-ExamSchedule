import React, { Component } from 'react';
import { findById } from '../api/subject'

export class Sectionbox extends Component {
    constructor(){
        super()
        this.state= {
            colorrandom:0
        }
    }
    componentWillMount(){
        this.randomColor()
    }
    randomColor(){
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        this.setState({
            colorrandom:color
        })
    }
    render() {
        const { colorrandom } = this.state
        const { subjectid } = this.props
        const SubjectName = findById(subjectid).name
        return (
            <div className="section-box" style={{ "background": colorrandom }}>
                <div className="section-box-detail">{ subjectid }</div>
                <div className="section-box-detail">{ SubjectName }</div>
            </div>
            
        )
    }
}
export class Hiddenbox extends Component {
    render() {
        const { data } = this.props
        return (
            <div className="hiddenbox-box" >
                { data.status && <Sectionbox subjectid={ this.props.data.subject}/>}
            </div>
        )
    }
}
export class Daybox extends Component {
    render() {
        return (
            <div className="header_header">
				<span className="header_inner"> {this.props.time }</span>
			</div>
        );
    }
}
