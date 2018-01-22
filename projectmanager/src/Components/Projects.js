import React, { Component } from 'react';
import ProjectItem from './ProjectItems';
import PropTypes from 'prop-types';

class Projects extends Component {
	deleteProject = (id) => {
		this.props.onDelete(id)
	}

	render() {
	let projectItems;
	if (this.props.projects) {
		projectItems =  this.props.projects.map(project => {
			return (
				<ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
				);
		});
	}
		console.log("props: " + JSON.stringify(this.props));
		return (
			<div className="Projects">
			{projectItems}
			</div>
			);
	}
}

Projects.propTypes = {
	projects: PropTypes.array,
	onDelete: PropTypes.func
}

export default Projects;
