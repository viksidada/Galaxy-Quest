import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import "../App.css";

class MarsRover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            cameraName: null,
            imgSrc: null
        }
    }

    goBack() {
        browserHistory.push("/");
    }

    componentDidMount() {
        const BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz";
        const FETCH_URL = `${BASE_URL}&api_key=xgPytM5A2pKFsLVmcVx2DaadyNEyM0owehKMsnPa`;

        fetch(FETCH_URL, {
            method: "GET"
        })
        .then (response => response.json())
            .then (result => {
                const cameraName = result.photos[0].camera.full_name;
                const imgSrc = result.photos[0].img_src;
                console.log('camera', cameraName, '\\img//', imgSrc);
                this.setState({cameraName: cameraName, imgSrc: imgSrc});
            })
    }

    render() {
        return (
            <div className = "MarsRover">
                <h1>Mars Rover Curiosity Photographs</h1><br/>
                <button className = "btn btn-primary" onClick = {() => this.goBack()}>Go Back</button><br/>
                <p><strong>This image is being sourced through a web call being made to a NASA Web API endpoint</strong></p>
                <div id = "Mars-images">
                    <h3>{this.state.cameraName}</h3><br/>
                    <img id ="Mars-curiosity" src={this.state.imgSrc} alt = "mars pic" /><br/>

                </div>
            </div>
        );
    }
}

export default MarsRover;