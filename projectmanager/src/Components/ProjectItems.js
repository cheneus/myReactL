import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItems extends Component {
	deleteProject()  {
		console.log("deleting")
		this.props.onDelete(this.props.project.id);
	}

	render() {
		return (
			<li className = "Project">
			{this.props.project.title} : {this.props.project.category} <button onClick={this.deleteProject.bind(this, this.props.project.id)}> X </button>
			</li>
			);
	}
}

ProjectItems.propTypes = {
	project: PropTypes.object,
	onDelete: PropTypes.func
}

export default ProjectItems;
