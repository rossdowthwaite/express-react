import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pallettes: []
    }
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(pallettes => this.setState({ pallettes }));
  }

  renderPallette(pallette) {
    return <Pallette
      pallette={pallette}
    />
  }

  render() {
    return(
      <div className="App">
        <h1>Pallettes</h1>
        {this.state.pallettes.map( pallette =>
          this.renderPallette(pallette)
        )}
      </div>
    );
  }
}

class Pallette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pallette: this.props.pallette,
    }
  }

  renderColor(color) {
    return <Color
      color={color}
    />
  }

  render() {
    return(
      <div>
        <h2>{this.props.pallette.title}</h2>
        <div key={this.props.pallette.id}  class="pallette">
          {this.props.pallette.colors.map( color =>
            this.renderColor(color)
          )}
        </div>
      </div>
    );
  }
}

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    }
  }

  render() {
    let styles = { backgroundColor: "#" + this.state.color }
    return (
      <div className="color" style={styles} class="color">#{this.state.color}</div>
    )
  }
}

export default App;
