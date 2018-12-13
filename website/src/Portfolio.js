import React from 'react'
import './Tile'


export default class Portfolio extends React.Component {
  render() {
    return (
      <div className='grid'>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      </div>
    )
  }
}

