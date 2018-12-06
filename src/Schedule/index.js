import React from "react";
import { Card, Button, Header } from 'semantic-ui-react';

const Schedules = (props) => {
    const schedules = props.allSchedules.map((eachSchedule, i) => {
        return (
            <nav key={eachSchedule._id}>
                <Card.Content>
                <Header >{eachSchedule.date}</Header >
                <h4>{eachSchedule.info}</h4>
                <Card.Description><img src={eachSchedule.photo} alt="Schedule"/></Card.Description>
                <Card.Content extra>
                    <Button color='blue' onClick={() => props.openSchedule(eachSchedule)}>Edit Schedule</Button>
                    <Button color='yellow' onClick={() => props.deleteSchedule(eachSchedule._id)}>Delete Schedule</Button>
                </Card.Content>
                <br/>
                <br/>
                <br/>
              </Card.Content>
            </nav>
        )
    })




    return (
        <div>
                <h3>Schedules</h3>
                <Card.Group className="centered">
                {schedules}
                </Card.Group>
        </div>
    )
}

export default Schedules