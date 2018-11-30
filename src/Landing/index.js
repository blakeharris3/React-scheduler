import React, {Component} from "react";

export default class Landing extends Component {
    render(){
        return (
            <div>
                <h1>
                    Hello {this.props.name}<br/>
                </h1>
                <p>
                    <a href='/schedule'>Schedule</a><br/>
                    <a href='/news'>News</a>
                </p>

                {!this.props.auth.isAuth() && 
                <div>
                <p>
                    Please login first
                </p>
                <button onClick={this.props.auth.login}>Login</button>
                </div>}


                {this.props.auth.isAuth() &&
                <p>
                    <button onClick={this.props.auth.logout}>Logout</button>
                </p>
                }
            </div>
        )
    }
}