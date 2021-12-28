import React, { Component } from 'react'

export default class TarotCard extends Component {
  classNames() {
    const { x, y, sideways, displayed, upright, cardClassName } = this.props

    const sidewaysClass = sideways ? ' sideways' : ''
    const uprightClass = upright ? '' : ' reverse-image'
    const displayClass = displayed ? ` ${cardClassName}` : ' card-back'

    return `x-offset-${x} y-offset-${y}${sidewaysClass}${uprightClass}${displayClass}`    
  }

  render() {
    return (
      <img alt="" className={this.classNames()} />
    )
  }
}