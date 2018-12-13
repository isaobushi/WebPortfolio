import React from 'react'
import Tile from './Tile'
import BackgroundImageTTT from './ttt.png'; // Relative Path to BackgroundImage
import BackgroundImageEAF from './eaf.png'; // Relative Path to BackgroundImage
import BackgroundImagePortfolio from './website.png'; // Relative Path to BackgroundImage




export default class Portfolio extends React.Component {
  constructor(){
    super()
    this.state = {
      projects: [
        {title: 'TTT', image: BackgroundImageTTT, stats: 'no'},
        {title: 'EAF', image: BackgroundImageEAF, stats: 'yes'},
        {title: 'Portfolio', image: BackgroundImagePortfolio, stats: 'soso'}
      ]
    }
  }


  render() {
    return (
      <div className='grid'>
          {this.state.projects.map(project=>{
            // console.log(project.title)
           return <Tile projects = {{title: project.title, image: project.image, stats: project.stats }} />
          })}
      </div>
    )
  }
}

