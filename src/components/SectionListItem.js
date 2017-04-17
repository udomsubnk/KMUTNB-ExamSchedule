import React, { Component } from 'react';

class SectionListItem extends Component{
	render(){
		const { sectionName } = this.props
		return (
			<div className="col-lg-2 col-md-2 col-sm-2 col-xs-3">
				<div className="SectionListItem">
					<div className="SectionListItem-info-top">
						<div className="SectionListItem-title">{ sectionName.type }.{ sectionName.section } { sectionName.prof }</div>
					</div>
					<div className="SectionListItem-info-bottom">
						<div className="SectionListItem-detail">{ sectionName.day } { sectionName.time }</div>
					</div>
				</div>
			</div>
		)
	}
}
export default SectionListItem