import React, {Component} from "react";

export default class NotFound extends Component {
    render(){
        return (
            <div>
                <h1>
                    Page Not Found
                    <img src='https://www.meme-arsenal.com/memes/780f55a9914ecd4abd699afa499af139.jpg' alt="Joey404"/>
                    <br/>
                    <br/>
                </h1>
                <p>
                    <a href="/secret">Try Key Again</a>
                </p>
            </div>
        )
    }
}