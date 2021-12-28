import React, { Component } from 'react'
import { Media, image } from 'react-bootstrap'

export default class CardDescription extends Component {
  render() {
    const { name, upright } = this.props

    return (
      <div className='card-description'>
        <Media>
            <Media.Left>
               <img width={130} height={190} src={this.props.image} alt=""/>
             </Media.Left>
             <Media.Body>
               <Media.Heading>{name}</Media.Heading>
               <p>{this.props.positionDescription}</p>
               <p>{this.props.normalDescription}</p>
             </Media.Body>
        </Media>
      </div>
    )
  }
}
