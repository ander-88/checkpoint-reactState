import './App.css';
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: "Khvicha Kvaratskhelia",
        bio: "Attacking Right Wing in PSG",
        imgSrc: "./images/khvicha-kvaratskhelia.jpeg",
        profession: "Football Player",
      },
      shows: true, 
      timeSinceMount: 0,
    };
    this.timer = null; 
  }

  componentDidMount() {
 
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {

    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div style={{ background: "#333", minHeight: "100vh", textAlign: "center", color: "white", padding: "20px" }}>
        {this.state.shows && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '10px' }}>
            <img src={this.state.Person.imgSrc} alt={this.state.Person.fullName} style={{ width: "120px", borderRadius: '50%' }} />
            <h1 style={{ color: '#5F9EA0' }}>{this.state.Person.fullName}</h1>
            <h3 style={{ color: '#B0C4DE' }}>{this.state.Person.bio}</h3>
            <h3 style={{ color: '#B0C4DE' }}>{this.state.Person.profession}</h3>
          </div>
        )}

        <h2>Time Since Mounted: {this.state.timeSinceMount} seconds</h2>

        <button onClick={this.toggleShow} style={{ marginTop: "20px", padding: "10px", fontSize: "16px", backgroundColor:'#5F9EA0',borderRadius:"28px",border:"none",color:"white" }}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>
      </div>
    );
  }
}

export default App;
