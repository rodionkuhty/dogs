import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import * as DogActions from "./components/actions";
import * as DogConstants from "./components/constants";
import getDog from "./components/selectors";

class App extends Component {
  getDog = () => {
    // this.props.dispatch({ type: "API_CALL_REQUEST" });
    this.props.dispatch(DogActions.makeRequest());
  };

  render() {
    const { fetching, dog, error } = this.props;
    // console.log(this.props.state, "this.props.state");
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={this.getDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dog: getDog(state)
  };
};

export default connect(mapStateToProps)(App);
