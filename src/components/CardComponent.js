import React, { Component } from 'react'

export default class CardComponent extends Component {
  render() {
    const { image, upright } = this.props
    const classNames = `img-rounded${upright ? '' : ' reverse-image'}`

    return (
     <img className={classNames} alt="" src={image} />
    )
  }
}