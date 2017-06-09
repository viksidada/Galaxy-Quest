import React, {Component} from 'react';
import "../App.css";

class Apod extends Component {

    imageOfTheDay() {
        const BASE_URL = "https://api.nasa.gov/planetary/apod?";
        const FETCH_URL = `${BASE_URL}api_key=xgPytM5A2pKFsLVmcVx2DaadyNEyM0owehKMsnPa`;


        fetch(FETCH_URL, {
            method: "GET",
        })
            .then(response => response.json())

            .then(result => console.log("json", result));

    }


    render() {
        return (
            <div className = "apod">
                <button className = "btn btn-primary" onClick={() => this.imageOfTheDay()}>APOD</button>
            </div>

        );
    }
}

export default Apod;