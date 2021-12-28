import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'


class NavbarModal extends Component {
  hideNavbarModal() {
    this.props.hideNavbarModal()
  }

  render() {
    return (
      <Modal show={true} onHide={this.hideNavbarModal.bind(this)}
        dialogClassName="custom-modal">

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Metacoven tarot</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {this.props.children}
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.hideNavbarModal.bind(this)}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default NavbarModal