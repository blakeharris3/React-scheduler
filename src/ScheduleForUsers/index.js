import React from "react";
import { Card, Header } from 'semantic-ui-react';

const Schedules = (props) => {
    const schedules = props.allSchedules.map((eachSchedule, i) => {
        return (
            <nav key={eachSchedule._id}>
                <Card.Content>
                <Header>{eachSchedule.date}</Header>
                <h4>{eachSchedule.info}</h4>
                <Card.Description><img src={eachSchedule.photo} alt="Schedule"/></Card.Description>
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
                <nav className="centered">
                {schedules}
                </nav>
        </div>
    )
}

export default Schedules