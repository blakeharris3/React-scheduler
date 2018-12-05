import React from 'react'
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';


const EditSchedule = (props) => {
  return (
    <Modal open={props.openModal}>
      <Header>Edit schedule</Header>
      <Modal.Content>
        <Form onSubmit={props.closeAndEdit}>
          <Label>
            Date:
          </Label>
          <Form.Input type='text' name='date' value={props.editedSchedule.date} onChange={props.handleChange}/>
          <Label>
            Photo:
          </Label>
          <Form.Input type='file' name='photo' value={props.editedSchedule.photo} onChange={props.handleChange}/>
          <Label>
            Info:
          </Label>
          <Form.Input type='text' name='info' value={props.editedSchedule.info} onChange={props.handleChange}/>

          <Modal.Actions>
            <Button color='blue' type='submit'>Submit Changes</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
    )
}

export default EditSchedule;
