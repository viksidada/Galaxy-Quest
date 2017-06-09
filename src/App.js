import React, {Component} from 'react';
import "./App.css";
import {FormControl, FormGroup, InputGroup, Glyphicon} from 'react-bootstrap';
import Apod from "./components/Apod.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
    }

    search() {
        const BASE_URL = "https://images-api.nasa.gov/search?";
        const FETCH_URL = `${BASE_URL}api_key=xgPytM5A2pKFsLVmcVx2DaadyNEyM0owehKMsnPa`;


        fetch(FETCH_URL, {
            method: "GET",
        })
            .then(response => response.json())

           .then(result => console.log("json", result));

    }

    render() {
        return (
            <div className="App">
                <div className = "App-title">
                    SPACE - The Final Frontier
                </div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type = "text"
                            placeholder="Search For An Artist"
                            value = {this.state.query}
                            onChange = {event => {this.setState({query: event.target.value})}}
                            onKeyPress = {event => {
                            if (event.key === "Enter") {
                                return this.search();
                               }
                            }}
                        />
                        <InputGroup.Addon onClick = {() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">Gallery</div>
                <div><Apod/></div>
            </div>
        );
    }
}

export default App;