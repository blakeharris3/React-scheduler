import React, {Component} from "react";
import Auth from "../Auth";

export default class Callback extends Component {
    componentDidMount() {
        const auth = new Auth()
        auth.handleAuth()
    }

    render(){
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
}