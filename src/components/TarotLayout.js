import React, { Component } from 'react'

import DescriptionContainer from './DescriptionContainer'
import TarotModal from './TarotModal'
import TarotCard from './TarotCard'

export default class TarotLayout extends Component {
  constructor( props ) {
    super( props )

    this.state = { currentIndex: 0 }
  }

  tarotCardClickHandler() { 
    this.showNextCard() 
    this.showTarotModal()    
  }

  showNextCard() {
    const { flipCard } = this.props 

    flipCard( this.state.currentIndex )
    this.setState({ currentIndex: this.state.currentIndex + 1 })
  }

  showTarotModal() {
    this.setState({ showTarotModal: true })
  }

  hideTarotModal() {
    this.setState({ showTarotModal: false })
  }

  getTarotModal() {
    const { cards } = this.props
    const displayCard = cards.slice( this.state.currentIndex - 1, this.state.currentIndex )

    if( this.state.showTarotModal ) {
      return ( 
        <TarotModal hideModal={this.hideTarotModal.bind(this)}>
          <DescriptionContainer cards={displayCard} />
        </TarotModal>
      ) 
    } else {
      return <div></div>
    }
  }

  render() {
    const { cards } = this.props
    return (
      <div className='tarot-board' onClick={this.tarotCardClickHandler.bind(this)}>
        {cards.map( (card, index) => 
          <TarotCard key={`tarot-card-${index}`} {...card} cardIndex={index} /> 
        )}
        {this.getTarotModal()}
      </div>
    )
  }
}



 

