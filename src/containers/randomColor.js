import React from 'react';
import { findById } from '../api/subject'
import { findSectionFromSection_id } from '../api/section'

export default function(BoxItem){
    return class extends React.Component {
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
        render(){
            const { colorrandom } = this.state
            const { sectionid } = this.props
            const sectionobject = findSectionFromSection_id(sectionid)
            const subject = findById(sectionobject.course_id)
            return(
                <BoxItem color={ colorrandom } data={ subject } sec={ sectionobject }/>
            )
        }
    }
}