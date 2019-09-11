import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className="item"><p><b style={{background:this.props.item.color}}>{this.props.index+1}</b> <span>{this.props.item.title}</span></p><span>{this.props.item.views}万</span></div>
    )
  }
}
