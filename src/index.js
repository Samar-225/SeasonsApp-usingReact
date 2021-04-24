import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMessage)
      return (
        <div>
          <SeasonDisplay latitude={this.state.lat} />
        </div>
      );
    if (!this.state.lat && !this.state.errorMessage)
      return (
        <div>
          {" "}
          <Spinner message="Please Accept the Location Request.."></Spinner>
        </div>
      );
    return <div>Error: {this.state.errorMessage}</div>;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
