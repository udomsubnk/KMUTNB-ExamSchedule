import React, { Component } from 'react';

class SectionListItem extends Component{
	render(){
		const { section,addSection } = this.props
		return (
			<div className="col-lg-2 col-md-2 col-sm-2 col-xs-3" onClick={ ()=>addSection(section) } >
				<div className="SectionListItem">
					<div className="SectionListItem-info-top">
						<div className="SectionListItem-title">{ section.type }.{ section.section } { section.prof }</div>
					</div>
					<div className="SectionListItem-info-bottom">
						<div className="SectionListItem-detail">{ section.day } { section.time }</div>
					</div>
				</div>
			</div>
		)
	}
}
export default SectionListItem