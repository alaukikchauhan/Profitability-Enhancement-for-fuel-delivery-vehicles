import React, {Component} from 'react';
import './css/dashboard.css';
class Truckinfo extends Component {
    render() {
        return (
            <div>
                <form className="FormClass">
                    <div className="form-group">
                        <label>Fuel tank capacity:</label>
                        <input type="text" className="form-control" id=""/>
                    </div>
                    <div className="form-group">
                        <label>Fuel left:</label>
                        <input type="text" className="form-control" id=""/>
                    </div>
                    <div className="form-group">
                        <label>Mileage:</label>
                        <input type="text" className="form-control" id=""/>
                    </div>
                    <div className="form-group">
                        <label>Destination distance:</label>
                        <input type="text" className="form-control" id=""/>
                    </div>
                    <button type="submit" className="btn btn-outline-dark lbutton"><span className="fas fa-search"></span> Search</button>
                </form>
            </div>
        );
    }
}

export default Truckinfo;