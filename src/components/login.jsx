import React, {Component} from 'react';
import './css/login.css';
class Login extends Component {
    render() {
        return (
            <div>
                <h2>Vehicle Control Portal</h2>
                <form className="FormClass" onSubmit={this.handleSubmit} method="post">
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" className="form-control" id="" aria-describedby="emailHelp" placeholder="Enter Username" onChange={this.handleEmail}/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" id="" placeholder="Enter your Password" onChange={this.handlePassword}/>
                    </div>
                    <button type="submit" className="btn btn-warning lbutton">Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;