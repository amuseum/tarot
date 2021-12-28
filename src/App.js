import React, { Component } from 'react';
import { default as Video } from 'react-html5video';
import _ from 'lodash';

// import logo from './logo.gif';
import './App.css';

import QuestionForm from './components/QuestionForm.js'
import TarotContainer from './components/TarotContainer.js'
import NavbarModal from './components/NavbarModal.js'
import CARDS from './cardinfo'
// console.log( CARDS.map( c => `.${c.cardClassName} { background-image: url("${c.image}"); }` ).join( "\n"))

// import { CELTIC_CROSS } from './layouts'
// import { CELTIC_CROSS_DES } from './positioninfo'

import { CELTIC_CROSS, TETRAKTYS, YOU_ME_US, CAREER_PATH, RELATIONSHIP_SPREAD, SELF_HEALING } from './layouts'
import { CELTIC_CROSS_DES, TETRAKTYS_DES, YOU_ME_US_DES, CAREER_PATH_DES, RELATIONSHIP_SPREAD_DES, SELF_HEALING_DES } from './positioninfo'

class App extends Component {
  constructor(props) {
    super(props)
    this.layouts = { CELTIC_CROSS, TETRAKTYS, YOU_ME_US, CAREER_PATH, RELATIONSHIP_SPREAD, SELF_HEALING }
    this.positions = { CELTIC_CROSS_DES, TETRAKTYS_DES, YOU_ME_US_DES, CAREER_PATH_DES, RELATIONSHIP_SPREAD_DES, SELF_HEALING_DES }
    this.currentLayout = "CELTIC_CROSS"
    this.state = { question: '', name: '', formSubmitted: false, cards: [], showNavbarModal: false }
  }

  showNavbarModal() {
    this.setState({ showNavbarModal: true })
  }

  hideNavbarModal() {
    this.setState({ showNavbarModal: false })
  }

  render() {
    return (
      <div>
          {this.getChild()}
        {this.getModal()}
      </div>
    )
  }

  getChild() {
    if( this.state.formSubmitted ) {
      return <TarotContainer {...this.state} flipCard={this.displayCard.bind(this)} />
    } else {
      return (  
      <div className="video-banner">
        <div className="video-banner-background">
          <Video autoPlay loop muted poster="">
            <source src="https://s3.amazonaws.com/distill-videos/videos/processed/1716/Northernlights2_HD.mp4.mp4" type="video/mp4" />
          </Video>
        </div>
        <a href="#" onClick={this.showNavbarModal.bind(this)}><h1>Metacoven Tarot</h1></a> 
      </div>
      )
    }
  }

  getModal() {
    if( this.state.showNavbarModal ) {
      return ( 
        <NavbarModal hideNavbarModal={this.hideNavbarModal.bind(this)}> 
          <QuestionForm redrawCards={ this.drawCards.bind(this) } submitForm={this.questionFormSubmitted.bind(this)} />
        </NavbarModal>
      ) 
    } else {
      return <div></div>
    }
  }

  questionFormSubmitted(question, name) {
    this.setState({ question, name, formSubmitted: true, cards: this.drawCards(this.currentLayout), showNavbarModal: false })
  }

  drawCards(layoutName) {
    if (layoutName) { this.currentLayout = layoutName } 

    const layout = this.layouts[layoutName]
    const position = this.positions[layoutName+'_DES']

    return  CARDS.slice( 0, layout.length ).map( (card, index) => 
      Object.assign( {}, card, { 
        displayed: false, 
        upright: _.sample([ true, false ]),
        positionDescription: position[ index ]}, 
        layout[ index ] 
      )
    )
  }

  displayCard( index ) {
    const { cards } = this.state

    if( index < cards.length ) {
      const updatedCards = [ 
        ...cards.slice( 0, index ),
        Object.assign( {}, cards[ index ], { displayed: true }),
        ...cards.slice( index + 1 )
      ]

      this.setState({ cards: updatedCards })
    }

  }
}

export default App;
