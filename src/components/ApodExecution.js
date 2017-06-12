import React, {Component} from 'react';
import Apod from './Apod';

class ApodExecution extends Component {
    constructor(props) {
        super(props);
        this.state = {
            explanation: null
        };

    }
    render() {
        return (
            <div className = "apod-execution">
                <div className = "apod-image">

                </div>
                <div className="apod-explanation">

                </div>
                <div className = "apod-button">
                    <button className="btn btnprimary">Go Back</button>
                </div>
            </div>

        );
    }
}

