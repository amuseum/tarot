import React, { Component } from 'react'
import TarotLayout from './TarotLayout'
import DescriptionContainer from './DescriptionContainer'
import { Form, FormGroup, FormControl, Col, Button, ControlLabel} from 'react-bootstrap'
import { Grid } from 'react-bootstrap';

export default class TarotContainer extends Component {
  render() {
    const { question, name, cards } = this.props

    return (
      <Grid>
        <h1>{question}</h1>
        <h2>{name}</h2>
        <TarotLayout cards={cards} flipCard={this.props.flipCard} />
        <DescriptionContainer cards={cards} />
      </Grid>
    )
  }
  flipNextCard() {
    this.props.cards.forEach(card => {
      console.log(card)
    })
  }
}
