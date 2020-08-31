import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

/*
const App=() => {
    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        err => console.log(err)
    );

    return (
        <div>Hi There!</div>

    );


};
*/
class App extends React.Component {
  //constructor(props) {
  //  super(props);

  //this.state = {lat: null,errorMessage:''};//this is the only exception:p

  state = { lat: null, errorMessage: "" }; //alternative method for state init

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }), //always use setState for updating
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
    return <Spinner message="Please accept location request" />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
