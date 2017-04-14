import React, { Component } from 'react';

export class Middlebox extends Component {
    constructor(){
        super()
        this.state= {
            colorrandom:0
        }
    }
    componentWillMount(){
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
        return (
            <div className="middle-box" style={{ "background": colorrandom }}>
                { this.props.subjectid }
            </div>
        )
    }
}
export class Hiddenbox extends Component {
    
    render() {
        const { data } = this.props
        return (
            <div className="hiddenbox-box" >
                { data.status && <Middlebox subjectid={ this.props.data.subject}/>}
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
