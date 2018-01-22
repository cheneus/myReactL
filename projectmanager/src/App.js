import React, {Component} from "react";
import uuid from 'uuid';
import axios from 'axios';
import $ from 'jquery'

import Projects from "./Components/Projects";
import AddProject from "./Components/AddProject";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  getTodo = () => {
    // axios.get({
    //     url: 'https://jsonplaceholder.typicode.com/posts',
    //     dataType: 'json',
    //   })
    //   .then(function(data) {
    //       this.setState({
    //         todos: data
    //       }).bind(this)
    //     })
    //   .catch(function(error) {
    //       console.log(error);
    //     })
    //   }
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({todos: data}, () => {
          console.log(this.state);
        })
      },
      error: (xhr, status, err) => {
        console.log(err)
      }
    })
  }

  componentWillMount = () => {
    this.setState({
      projects: [{
        id: uuid.v4(),
        title: "Business Website",
        category: "Web Design"
      }, {
        id: uuid.v4(),
        title: "Social App",
        category: "Mobile Development"
      }, {
        id: uuid.v4(),
        title: "Ecommerce Shopping Card",
        category: "Web Development"
      }]
    });
    this.getTodo();
  }
  // need more understand of this
  componentDidMount = () => {
    this.getTodo();
  }

  handleAddProject = (project) => {
    console.log(`${project} added`)
    let projects = this.state.projects
    projects.push(project)
    this.setState({
      projects: projects
    })
  }

  handleDeleteProject = (id) => {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id)
    projects.splice(index, 1);
    this.setState({
      projects: projects
    })
  }

  render() {
    return ( 
      <div className = "App">
      MyProjects 
      <Projects projects = {this.state.projects} onDelete = {this.handleDeleteProject.bind(this)} /> 
      <div className = "AppAdd">
      <AddProject addProject = {this.handleAddProject.bind(this)} /> 
      </div>
      </div>
    );
  }
}

export default App;