import React, {Component} from "react";
import { Button, Grid } from 'semantic-ui-react';

export default class Secret extends Component {

    render(){
        return (
            <Grid columns={1} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
                <Grid.Row>
                    <Grid.Column>
            <br/>
            <br/>
            <br/>
                        <div>
                            <h2>Enter KEY associated with login</h2>
                                <form onSubmit={this.props.handleKey} >
                                    <input type ="text" name ="key" placeholder="KEY" onChange={this.props.handleChange} /><br/>
                                    <br/>
                                    <Button color='green' type="Submit">Submit</Button >
                                </form>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}