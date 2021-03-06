import React from "react";
import { Card, Button } from 'semantic-ui-react';

const News = (props) => {
    const news = props.allNews.map((eachNews, i) => {
        return (
            <Card key={eachNews._id}>
                <Card.Content>
                <Card.Header>{eachNews.topic}</Card.Header>
                <Card.Description>{eachNews.body}</Card.Description>
                <Card.Content extra>
                    <Button color='red' onClick={() => props.deleteNews(eachNews._id)}>Delete News</Button>
                    <Button color='yellow' onClick={() => props.openNews(eachNews)}>Edit News</Button>
                </Card.Content>
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