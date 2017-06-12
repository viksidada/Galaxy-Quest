import React, {Component} from 'react';
import "../App.css";
import {browserHistory} from 'react-router';

class Apod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: null,
            explanation: null,
            hdurl: null,
            title: null
        };
    }

    goBack() {
       browserHistory.push("/");
    }


    componentDidMount() {
        const BASE_URL = "https://api.nasa.gov/planetary/apod?";
        const FETCH_URL = `${BASE_URL}api_key=xgPytM5A2pKFsLVmcVx2DaadyNEyM0owehKMsnPa`;

        fetch(FETCH_URL, {
            method: "GET",
        })
            .then(response => response.json())

            .then(result => {
                const date = result.date;
                const explanation = result.explanation;
                const hdurl = result.hdurl;
                const title = result.title;
                console.log('explanation', explanation, 'TITLE', title);
                this.setState({date:date, explanation: explanation, hdurl: hdurl, title: title});
            });
    }


    render() {
        return (
            <div className="Apod-page">
                <h1 className = "page-title">{this.state.title}</h1><br/>
                <button className = "btn btn-info" onClick = {() => this.goBack()}>Go Back</button>
                <h2 className = "apod-explain">{this.state.explanation}</h2><br/>
                <h3 >{this.state.date}</h3><br/>
                <img id = "apod-pic" src={this.state.hdurl} alt="space pic"/>
            </div>
        );
    }
}

export default Apod;