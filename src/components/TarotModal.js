import React, { Component } from 'react'
import { Name } from './QuestionForm'
import { Modal, Button } from 'react-bootstrap'

export default class TarotModal extends Component { 

hideModal() {
    this.props.hideModal()
  }

  render() {
    return (
      <Modal show={true} onHide={this.hideModal.bind(this)}
        dialogClassName="custom-modal">

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Your Reading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.props.children}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.hideModal.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}