import React, {Component} from "react";
import { Button, Grid } from 'semantic-ui-react';


const linkStyle = {
    color: 'white',
    textDecoration: 'underline'
};
const styleHeader = {
    color: '#FFFF00',
    fontSize: '45px'
}

export default class LandingUser extends Component {
    render(){
        return (
            <Grid columns={1} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top'>
                <Grid.Row>
                    <Grid.Column>
                        <br/>
                        <br/>
                        <div>
                            <h1 style={styleHeader}>
                                Welcome to Scheduler!<br/>
                            </h1>

                            {!this.props.auth.isAuth() && 
                            <div>
                            <p>
                                Please login first
                            </p>
                            <button onClick={this.props.auth.login}>Login</button>
                            </div>}


                            {this.props.auth.isAuth() &&
                            <div>
                                <h2>
                                    <a href='/usersSchedule' style={linkStyle}>Schedules</a><br/>
                                    <a href='/usersNews' style={linkStyle}>News</a><br/>
                                    <br/>
                                </h2>
                                <p>
                                    <Button color='red' onClick={this.props.auth.logout}>Logout</Button>
                                </p>
                            </div>
                            }
                        </div>
                    </Grid.Column>
                </Grid.Row>.
            </Grid>
        )
    }
}