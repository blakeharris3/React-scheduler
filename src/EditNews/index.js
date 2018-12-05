import React from 'react'
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';


const EditNews = (props) => {
  return (
    <Modal open={props.openModal}>
      <Header>Edit News</Header>
      <Modal.Content>
        <Form onSubmit={props.closeAndEdit}>
          <Label>
            Topic:
          </Label>
          <Form.Input type='text' name='topic' value={props.editedNews.topic} onChange={props.handleChange}/>
          <Label>
            Body:
          </Label>
          <Form.Input type='text' name='body' value={props.editedNews.body} onChange={props.handleChange}/>

          <Modal.Actions>
            <Button color='blue' type='submit'>Submit Changes</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
    )
}

export default EditNews;
