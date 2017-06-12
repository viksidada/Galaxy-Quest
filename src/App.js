import React, {Component} from 'react';
import "./App.css";
import {browserHistory} from 'react-router';
import Search from "./components/Search";

class App extends Component {

    goToApod() {
        browserHistory.push("/apod");
    }

    goToMarsRover() {
        browserHistory.push("/marsRover");
    }

    render() {
        return (
            <div className="App">
                <Search />
                <div id="Menu">
                    <div className = "Menu-list">
                        <button className = "btn btn-success"
                                onClick={() => this.goToMarsRover()}>Mars Rover Curiosity Pictures
                        </button>
                    </div>
                    <div className = "Menu-list">
                        <button className = "btn btn-danger"
                                onClick={() => this.goToApod()}>Astronomical Picture Of the Day
                        </button>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;