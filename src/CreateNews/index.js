import React, { Component } from 'react';

export default class CreateNews extends Component {
    
    state = {
        topic: "",
        body: ""
    }


    updateNews = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }

    
    render() {
        return (
            <div>
                <h3>Create News</h3>
                <form onSubmit={(e) => this.props.addNews(e, this.state)}>
                    <label>Topic:</label><br/>
                    <input type='text' name='topic' value={this.state.topic} onChange={this.updateNews}/><br/>
                    <label>Body:</label><br/>
                    <input type='text' name='body' value={this.state.body} onChange={this.updateNews}/><br/>
                    <button type='Submit'>Create</button>
                </form>
            </div>
        )
    }
}