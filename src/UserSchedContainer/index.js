import React, { Component } from 'react';
import ScheduleForUsers from '../ScheduleForUsers';
import { Grid, GridRow, GridColumn } from 'semantic-ui-react';

const linkStyle = {
    color: 'white',
    textDecoration: 'underline'
};

export default class ScheduleContainer extends Component {
    state = {
        schedules: [],
        editedSchedule: {
            date: '',
            photo: '',
            info: '',
            _id: ''
        },
        showModal: false
    }

    getSchedule = async () => {
        const schedule = await fetch('http://localhost:8000/schedule');
        const scheduleParsedJSON = await schedule.json();
        return scheduleParsedJSON
    }
    componentDidMount(){
        this.getSchedule().then((schedules) => {
            this.setState({schedules: schedules.data})
        }).catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
                
            <Grid columns={1} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
                <GridRow>
                    <GridColumn>
                        <nav>
                        <h1><a href="/landingUser" style={linkStyle}>Home</a></h1>
                        <h1><a href="/usersNews" style={linkStyle}>News</a></h1>
                        <br/>
                        <br/>
                        </nav>
                        <Grid.Row>
                        <Grid.Column>
                            <ScheduleForUsers allSchedules={this.state.schedules}/>
                        </Grid.Column>
                        </Grid.Row>
                    </GridColumn>
                </GridRow>
            </Grid>
        )
    }
}