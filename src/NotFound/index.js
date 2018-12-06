import React, {Component} from "react";
import { Card } from 'semantic-ui-react';

const styleLink = {
    color: 'white',
    textDecoration: 'underline'
};

export default class NotFound extends Component {
    render(){
        return (
            <div>
                <Card.Group className="centered">
                <br/>
                <br/>
                <h1>
                    Page Not Found
                    <br/>
                    <br/>
                <p>
                    <a href="/secret" style={styleLink}>Enter Key Again</a><br/>
                </p>
                </h1>
                    <br/>
                    <br/>
                </Card.Group>
            </div>
        )
    }
}