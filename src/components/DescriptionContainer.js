import React, { Component } from 'react'
import CardDescription from './CardDescription'
import CardComponent from './CardComponent'


export default class DescriptionContainer extends Component {
  render() {
    return (
      <div className="description-container">
        <h2 className="description-heading">Description</h2>
        {this.showCards()}
      </div>
    )
  }

  showCards() {
    const { cards } = this.props

    return cards.filter( card => card.displayed ).map( (card, index) =>
      <div key={`card-description-${index}`}>
        <CardDescription {...card} key={`description-${index}`} />
      </div>
    )
  }
}
