import React, { Component } from 'react';
import randomColor from '../containers/randomColor'

export class Bigbox extends Component {
    render() {
        const { data,color,sec } = this.props
        return (
            <div>
                <div data-toggle="modal" data-target="#myModal" className = "section-box z-depth-2 whi" style = {{ "background": color,"width": "262px" }}>
                    <div className="section-box-detail">{ data.course_id }</div>
                    <div className="section-box-detail">{ data.name }</div>
                    <div className="section-box-detail">{ sec.type }-{ sec.section }</div>
                </div>
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">{data.name}</h4>
                        </div>
                        <div className="modal-body">
                            <p>{ data.course_id }</p>
                            <p>{ data.course_id }</p>
                            <p>{ data.course_id }</p>
                            <p>{ data.course_id }</p>
                            <p>{ data.course_id }</p>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export class Smallbox extends Component {
    render() {
        const { data,color,sec } = this.props
        return (
            <div className = "section-box z-depth-2 whi" style = {{ "background": color,"width": "174px" }}>
                <div className="section-box-detail">{ data.course_id }</div>
                <div className="section-box-detail">{ data.name }</div>
                <div className="section-box-detail">{ sec.type }-{ sec.section }</div>
            </div>
        )
    }
}

export class ExtraSmallbox extends Component {
    render() {
        const { data,color,sec } = this.props
        return (
            <div className = "section-box z-depth-2 whi" style = {{ "background": color,"width": "87px" }}>
                <div className="section-box-detail">{ data.course_id }</div>
                <div className="section-box-detail">{ data.name }</div>
                <div className="section-box-detail">{ sec.type }-{ sec.section }</div>
            </div>
        )
    }
}

export class BoxExam extends Component {
    render() {
        const { data,color,sec } = this.props
        return (
            <div className = "section-box z-depth-2 whi" style = {{ "background": color,"width": "271px" }}>
                <div className="section-box-detail">{ data.course_id }</div>
                <div className="section-box-detail">{ data.name }</div>
            </div>
        )
    }
}

export class BoxExamSmall extends Component {
    render() {
        const { data,color,sec } = this.props
        return (
            <div className = "section-box z-depth-2 whi" style = {{ "background": color,"width": "90px" }}>
                <div className="section-box-detail">{ data.course_id }</div>
                <div className="section-box-detail">{ data.name }</div>
            </div>
        )
    }
}
const ExtraSmallboxRandomColor = randomColor(ExtraSmallbox)
const BigboxRandomColor = randomColor(Bigbox)
const SmallboxRandomColor = randomColor(Smallbox)
const BoxExamRandomColor = randomColor(BoxExam)
const BoxExamSmallRandomColor = randomColor(BoxExamSmall)

export class Hiddenbox extends Component {
    render() {
        const { data } = this.props
        return (
            <div className="hiddenbox-box" >
                { data.beginStatusSmall && <SmallboxRandomColor sectionid={ data.sectionId }/>}
                { data.beginStatusBig && <BigboxRandomColor sectionid={ data.sectionId }/>}
                { data.beginStatusExtraSmall && <ExtraSmallboxRandomColor sectionid={ data.sectionId }/>}
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
        )
    }
}

export class DayboxExam extends Component {
    render() {
        return (
            <div className="header_headerExam">
				<span className="header_inner"> {this.props.time }</span>
			</div>
        )
    }
}

export class HiddenboxExam extends Component {
    render() {
        const { data } = this.props
        return (
            <div className="hiddenbox-boxExam" >
               { data.begin && <BoxExamRandomColor sectionid={ data.sectionId }/>}
            </div>
        )
    }
}

