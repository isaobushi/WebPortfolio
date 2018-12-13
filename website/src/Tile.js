import React from 'react'
import Ionicon from 'react-ionicons'

export default class Tile extends React.Component{
  constructor(props){
    super()
    console.log(props.projects.image)
    this.state = {
      active: false,
      title: props.projects.title,
      backgroundImage: props.projects.image,
      footer: props.projects.stats,
      link: props.projects.link
    }
  }

  toggleActive() {
    this.setState({
      active: !this.state.active
    })
  }
  
    render(){
      const linearGradient = 'linear-gradient(rgba(0, 0, 0, 0.315),rgba(0, 0, 0, 0.235))'
      const background = `url(${this.state.backgroundImage})`

      let styleTile = {
        // backgroundColor: this.state.active ? 'green' : 'tranparent',
        width: this.state.active ? '70%' : '15rem',
        height: this.state.active ? '70%' : '15rem',
        position: this.state.active ? 'fixed' : '',
        zIndex: this.state.active ? '2' : '',
        top: this.state.active ? '0px' : '',
        left: this.state.active ? '0px' : '',
        transform: this.state.active ? 'translate(25%, 20%)' : '',
        margin: this.state.active ? 'auto' : '',
        backgroundImage: this.state.active ? `${background}`: `${linearGradient}, ${background}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '10px'
       }

       let styleDescription = {
         opacity: '0'
       }

    return(
      
      <div 
      className="tile"
      style={styleTile}
        onClick={() => this.toggleActive()}
      >
        <div className="tile-title">
        <a 
        href={this.state.link}
        target='blank'

        ><Ionicon icon="logo-octocat" fontSize="35px" color="tomato"/></a></div>
        <div 
          className='tile-stats'
          style={this.state.active? {opacity: '1'} : styleDescription   }
          >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi suscipit error itaque officia, molestiae quo nesciunt nemo veritatis exercitationem tempore maiores autem eaque sequi, maxime saepe commodi delectus, doloribus adipisci?
        </div>
      </div>
    )

  }
}