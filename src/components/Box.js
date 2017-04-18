import React, { Component } from 'react';
import randomColor from '../containers/randomColor'

export class Bigbox extends Component {
    render() {
        const { data,color } = this.props
        return (
            <div className = "section-box" style = {{ "background": color,"width": "262px" }}>
                <div className="section-box-detail">{ data.course_id }</div>
                <div className="section-box-detail">{ data.name }</div>
            </div>
            
        )
    }
}

export class Smallbox extends Component {
    render() {
        const { data,color } = this.props
        return (
            <div className = "section-box" style = {{ "background": color,"width": "174px" }}>
                <div className="section-box-detail">{ data.course_id }</div>
                <div className="section-box-detail">{ data.name }</div>
            </div>
            
        )
    }
}

export class Hiddenbox extends Component {
    render() {
        console.log('render')
        const { data } = this.props
        const BigboxRandomColor = randomColor(Bigbox)
        const SmallboxRandomColor = randomColor(Smallbox)
        return (
            <div className="hiddenbox-box" >
                { data.status && <SmallboxRandomColor sectionid={ data.sectionId }/>}
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
