import React, { Component } from 'react';
import NewsForUsers from '../NewsForUsers';
import { Grid, GridColumn, GridRow } from 'semantic-ui-react';

const linkStyle = {
    color: 'white',
    textDecoration: 'underline'
};



export default class NewsContainer extends Component {
    state = {
        news: [],
        editedNews: {
            topic: '',
            body: '',
            _id: ''
        },
        showModal: false
    }

    getNews = async () => {
        const news = await fetch('http://localhost:8000/news');
        const newsParsedJSON = await news.json();
        return newsParsedJSON
    }
    componentDidMount(){
        this.getNews().then((news) => {
            this.setState({news: news.data})
        }).catch((err) => {
            console.log(err);
        })
    }
    render() {
        return (
            <Grid columns={1} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
                <GridRow >  
                    <GridColumn >
                        <br/>
                        <br/>
                    <nav>
                    <h1><a href="/landingUser" style={linkStyle}>Home</a></h1>
                    <h1><a href="/usersSchedule" style={linkStyle}>Schedules</a></h1>
                    <br/>
                    <br/>
                    </nav>
                    <Grid.Row>
                    <Grid.Column>
                        <NewsForUsers allNews={this.state.news} openNews ={this.openEdit} deleteNews={this.deleteNews}/>
                    </Grid.Column>
                    </Grid.Row>
                    </GridColumn>
                </GridRow>
            </Grid>
        )
    }
}