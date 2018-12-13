import React from 'react'

export default class Tile extends React.Component{
  constructor(){
    super()
    this.state = {
      active: false,
      clicked: false
    }
  }

  toggleActive() {
    this.setState({
      active: !this.state.active
    })
  }
    render(){

    return(

    
      <div 
      className="tile" 
      style={{
        backgroundColor: this.state.active ? 'green' : 'yellow',
        width: this.state.active ? '30rem' : '15rem',
        height: this.state.active ? '30rem' : '15rem',
        position: this.state.active ? 'fixed' : '',
        top: this.state.active ? '0px' : '',
        left: this.state.active ? '0px' : '',
        transform: this.state.active ? 'translate(90%, 20%)' : '',
        margin: this.state.active ? 'auto' : ''

        // top: this.state.active ? '0' : '',
       }}
        onClick={() => this.toggleActive()}
      >
      </div>
    )

  }
}