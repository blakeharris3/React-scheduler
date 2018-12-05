import React, { Component } from 'react';
import CreateSchedule from '../CreateSchedule';
import Schedule from '../Schedule';
import EditSchedule from '../EditSchedule';
import { Grid } from 'semantic-ui-react';

const styleLink = {
    color: 'white',
    textDecoration: 'underline',
    textAlign: 'center'
};
// const columnStyle = {
//     width: '400px'
// }

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
    componentDidUpdate(){
        console.log(this.state)
    }

    addSchedule = async (e, schedule) => {
        e.preventDefault();
        console.log('this is hitting')
        try {
            const createdSchedule = await fetch('http://localhost:8000/schedule', {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(schedule),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const parsedResponse = await createdSchedule.json()
            this.setState({
                schedules: [...this.state.schedules, parsedResponse.data]
            })
        } catch (err) {
            console.log(err)
        }
    }

    handleChange = (e) => {
        this.setState({
            editedSchedule: {...this.state.editedSchedule, [e.currentTarget.name]: e.currentTarget.value}
        });
    }

    deleteSchedule = async (id) => {
        const deleteScheduleResponse = await fetch('http://localhost:8000/schedule/' + id, {method: 'DELETE'});
        await deleteScheduleResponse.json();
        this.setState({schedules: this.state.schedules.filter((schedule) => schedule._id !== id )})
    }

    close = async (e) => {
        e.preventDefault();
        try {
    
            const editResponse = await fetch('http://localhost:8000/schedule/' + this.state.editedSchedule._id, {
                method: 'PUT',
                body: JSON.stringify({
                    date: this.state.editedSchedule.date,
                    photo: this.state.editedSchedule.photo,
                    info: this.state.editedSchedule.info
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            const editResponseParsed = await editResponse.json();
            
            const newEditedSchedule = this.state.schedules.map((schedule) => {
                
                if(schedule._id === editResponseParsed.data._id){
                    schedule = editResponseParsed.data
                }
                
                return schedule
            });
            this.setState({
                showModal: false,
                schedules: newEditedSchedule
            });
        } catch(err){
            console.log(err)
        }
        
    }

    openEdit = (eachSchedule) => {
        this.setState({
            showModal: true,
            editedSchedule: {
                ...eachSchedule
            }
        })
    }
    render() {
        return (
            <Grid columns={1} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
                <nav>
                    <br/>
                <h1><a href="/" style={styleLink}>Home</a></h1>
                <h1><a href="/news" style={styleLink}>News</a></h1>
                <br/>
                </nav>
                <Grid.Row>
                <Grid.Column>
                        <CreateSchedule  addSchedule={this.addSchedule}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                </Grid.Column>
                <Grid.Column>
                <Grid columns={3} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable >
                        <Grid.Row>
                            <Grid.Column >
                                <Schedule allSchedules={this.state.schedules} openSchedule ={this.openEdit} deleteSchedule={this.deleteSchedule}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column>
                    <EditSchedule openModal={this.state.showModal} editedSchedule={this.state.editedSchedule} handleChange={this.handleChange} closeAndEdit={this.close}/>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}