import React, { Component } from 'react';

export default class CreateSchedule extends Component {
    
    state = {
        date: "",
        photo: "",
        info: ""
    }
    
    updateSchedule = (e) => {
        this.setState({[e.currentTarget.name]: e.currentTarget.value})
    }
    uploadFile = async e => {
        const formData = new FormData()
        formData.append('file', e.currentTarget.files[0])
        formData.append('upload_preset', 'scheduler')
        const response = await fetch('https://api.cloudinary.com/v1_1/blakecloud/image/upload',
            {
                method: 'POST',
                body: formData
            })
            const dataFile = await response.json()
            console.log(dataFile)
            this.setState({
                photo: dataFile.secure_url,
            })
    }
    render() {
        return (
            <div>
                <h3>Create Schedule</h3>
                <form onSubmit={(e) => this.props.addSchedule(e, this.state)}>
                    <label>Date:</label><br/>
                    <input type='text' name='date' value={this.state.date} onChange={this.updateSchedule}/><br/>
                    <label>Schedule:</label><br/>
                    <input type='file' name='photo' onChange={this.uploadFile}/><br/>
                    <label>Info:</label><br/>
                    <input type='text' name='info' value={this.state.info} onChange={this.updateSchedule}/><br/>
                    <button type='Submit'>Create</button>
                </form>
            </div>
        )
    }
}