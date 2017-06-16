import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  // Lifecycle method 'componentWillMount()'
  componentWillMount(){
    this.setState({projects: [
      {
          title: 'Test Components',
          category: 'Testing'
        },
        {
          title: 'UI & UX Components',
          category: 'Interface & Expierence Design'
        },
        {
          title: 'Model Components',
          category: 'Backend'
        },
        {
          title: 'View Components',
          category: 'Frontend'
        },
        {
          title: 'Controller Components',
          category: 'Backend'
        },
        {
          title: 'Style Components',
          category: 'Stylesheets'
        },
        {
          title: 'Static Components',
          category: 'Static'
        },
        {
          title: 'Dynamic Components',
          category: 'Dynamics'
        },
        {
          title: 'DB Components',
          category: 'Database'
        }
    ]});
  }

  handleAddProject(project){
    console.log(project);
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        ReactProjectManager or RPM for short :)
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;

// Stopped lesson @ 37:01
