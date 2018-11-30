import React, {Component} from "react";

export default class News extends Component {
    render(){
        return (
            <div>
                <nav>
                <h1><a href="/">Home</a></h1>
                <h1><a href="/schedule">Schedule</a></h1>

                </nav>
                <h1>News</h1>
                <p>Inportant information</p>
            </div>
        )
    }
}