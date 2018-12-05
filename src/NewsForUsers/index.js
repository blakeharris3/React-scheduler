import React from "react";
import { Card } from 'semantic-ui-react';

const News = (props) => {
    const news = props.allNews.map((eachNews, i) => {
        return (
            <Card key={eachNews._id}>
                <Card.Content>
                <Card.Header>{eachNews.topic}</Card.Header>
                <Card.Description>{eachNews.body}</Card.Description>
                <br/>
                <br/>
                <br/>
              </Card.Content>
            </Card>
        )
    })




    return (
        <div>
                <h3>News</h3>
                <Card.Group className="centered">
                {news}
                </Card.Group>
        </div>
    )
}

export default News