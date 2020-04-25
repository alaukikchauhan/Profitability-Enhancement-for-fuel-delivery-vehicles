import React, {Component} from 'react';
import './css/dashboard.css';
import './css/login.css';
class Dashboard extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#">Control Portal</a>
                        <a className="nbutton" href="/truck_details"><button className="btn btn-outline-info button1"  type="submit">TruckInfo</button></a>
                        <a className="" href="/"><button className="btn btn-outline-info"  type="submit">Logout</button></a>
                    </div>
                </nav>
                <form className="FormClass">
                    <div className="form-group">
                        <label>Source:</label>
                        <input type="text" className="form-control" id="" aria-describedby="emailHelp" placeholder="Enter Source Location"/>
                    </div>
                    <div className="form-group">
                        <label>Destination:</label>
                        <input type="text" className="form-control" id="" placeholder="Enter Destination Location"/>
                    </div>
                    <button type="submit" className="btn btn-outline-dark lbutton"><span className="fas fa-search"></span> Search</button>
                </form>
            </div>
        );
    }
}

export default Dashboard;