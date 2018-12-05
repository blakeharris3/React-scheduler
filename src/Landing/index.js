import React, {Component} from "react";
import { Button, Modal, Grid } from 'semantic-ui-react';


const linkStyle = {
    color: 'white',
    textDecoration: 'underline'
};
const styleHeader = {
    color: '#FFFF00',
    fontSize: '45px'
}


export default class Landing extends Component {
    render(){
        return (
            <Grid columns={1} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top'>
                <Grid.Row>
                    <Grid.Column>
                        <br/>
                        <br/>
                    <h1 style={styleHeader}>
                        Welcome to Scheduler!<br/>
                    </h1 >

                    {!this.props.auth.isAuth() && 
                    <div>
                    <p>
                        Please login first
                    </p>
                    <Modal.Actions>
                        <Button color='green' onClick={this.props.auth.login}>Login</Button>
                    </Modal.Actions>
                    </div>}


                    {this.props.auth.isAuth() &&
                    <div>
                        <h2>
                            <a href='/schedule' style={linkStyle}>Schedules</a><br/>
                            <a href='/news' style={linkStyle}>News</a><br/>
                            <br/>
                        </h2>
                        <p>
                        <Modal.Actions>
                            <Button color='red' onClick={this.props.auth.logout}>Logout</Button>
                        </Modal.Actions>
                        </p>
                    </div>
                    }
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}