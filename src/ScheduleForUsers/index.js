import React from "react";
import { Card } from 'semantic-ui-react';

const Schedules = (props) => {
    const schedules = props.allSchedules.map((eachSchedule, i) => {
        return (
            <Card key={eachSchedule._id}>
                <Card.Content>
                <Card.Header>{eachSchedule.date}</Card.Header>
                <Card.Description><img src={eachSchedule.photo} alt="Schedule"/></Card.Description>
                <Card.Description>{eachSchedule.info}</Card.Description>
                <br/>
                <br/>
                <br/>
              </Card.Content>
            </Card>
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