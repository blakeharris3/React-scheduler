import React, { Component } from 'react';
import CreateNews from '../CreateNews';
import News from '../News';
import EditNews from '../EditNews';
import { Grid } from 'semantic-ui-react';

const styleLink = {
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

    addNews = async (e, news) => {
        e.preventDefault();
        try {
            const createdNews = await fetch('http://localhost:8000/news', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(news),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedResponse = await createdNews.json()
            this.setState({
                news: [...this.state.news, parsedResponse.data]
            })
        } catch (err) {
            console.log(err)
        }
    }

    handleChange = (e) => {
        this.setState({
            editedNews: {...this.state.editedNews, [e.currentTarget.name]: e.currentTarget.value}
        });
    }

    deleteNews = async (id) => {
        const deleteNewsResponse = await fetch('http://localhost:8000/news/' + id, {method: 'DELETE'});
        await deleteNewsResponse.json();
        this.setState({news: this.state.news.filter((news) => news._id !== id )})
    }

    close = async (e) => {
        e.preventDefault();
        try {
    
            const editResponse = await fetch('http://localhost:8000/news/' + this.state.editedNews._id, {
                method: 'PUT',
                body: JSON.stringify({
                    topic: this.state.editedNews.topic,
                    body: this.state.editedNews.body
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            const editResponseParsed = await editResponse.json();
            
            const newEditedNews = this.state.news.map((news) => {
                
                if(news._id === editResponseParsed.data._id){
                    news = editResponseParsed.data
                }
                
                return news
            });
            this.setState({
                showModal: false,
                news: newEditedNews
            });
        } catch(err){
            console.log(err)
        }
        
    }

    openEdit = (eachNews) => {
        this.setState({
            showModal: true,
            editedNews: {
                ...eachNews
            }
        })
    }
    render() {
        return (
            <Grid columns={1} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
                <nav>
                <br/>
                <h1 ><a href="/" style={styleLink}>Home</a></h1 >
                <h1 ><a href="/schedule" style={styleLink}>Schedules</a></h1 >
                <br/>
                </nav>
                <Grid.Row>
                <Grid.Column>
                        <CreateNews addNews={this.addNews}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                </Grid.Column>
                <Grid.Column>
                    <News allNews={this.state.news} openNews ={this.openEdit} deleteNews={this.deleteNews}/>
                </Grid.Column>
                <Grid.Column>
                    <EditNews openModal={this.state.showModal} editedNews={this.state.editedNews} handleChange={this.handleChange} closeAndEdit={this.close}/>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}