import React from 'react'

export default class Tile extends React.Component{
  constructor(props){
    super()
    console.log(props.projects.image)
    this.state = {
      active: false,
      title: props.projects.title,
      backgroundImage: props.projects.image,
      footer: props.projects.stats
    }
  }

  toggleActive() {
    this.setState({
      active: !this.state.active
    })
  }
  
    render(){
      
      let styleTile = {
        // backgroundColor: this.state.active ? 'green' : 'tranparent',
        width: this.state.active ? '30rem' : '15rem',
        height: this.state.active ? '30rem' : '15rem',
        position: this.state.active ? 'fixed' : '',
        top: this.state.active ? '0px' : '',
        left: this.state.active ? '0px' : '',
        transform: this.state.active ? 'translate(90%, 20%)' : '',
        margin: this.state.active ? 'auto' : '',
        backgroundImage: `url(${this.state.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
       }
    return(
      
      <div 
      className="tile"
      style={styleTile}
        onClick={() => this.toggleActive()}
      >
        <div className="tile-title">{this.state.title}</div>
        <div className="tile-stats">{this.state.footer}</div>
      </div>
    )

  }
}