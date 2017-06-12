import React, {Component} from 'react';
import "../App.css";

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
            <div className = "page-title">
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}

export default Apod;