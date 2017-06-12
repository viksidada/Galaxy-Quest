import React, {Component} from 'react';
import "../App.css";
import {FormControl, FormGroup, InputGroup, Glyphicon} from 'react-bootstrap';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ""
        }
    }

    componentDidMount() {
        const BASE_URL = "https://images-api.nasa.gov/search?";
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&api_key=xgPytM5A2pKFsLVmcVx2DaadyNEyM0owehKMsnPa`;

        fetch(FETCH_URL, {
            method: "GET",
        })
            .then(response => response.json())
            .then(search => console.log("json", search));
    }

    search() {
        console.log('query', this.state.query);

    }

    render() {
        return (
            <div>
                <div className = "App-title">
                    SPACE - The Final Frontier
                </div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type = "text"
                            placeholder="Search for Space Stuff"
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
            </div>

        );
    }
}

export default Search;