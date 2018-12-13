import React from 'react'
import Ionicon from 'react-ionicons'



export default class Contacts extends React.Component {
  constructor(){
    super()
    this.state = {
      mail: 'andrea.mele.au@gmail.com',
      linkdin: 'https://www.linkedin.com/in/andrea-mele-dev/',
      codewars: 'https://codewars.com/users/isaobushi',
      github: 'https://github.com/isaobushi'
    }
  }
  render(){
    return (
    <ul className='contacts'>  
      <li className='logo-contacts'>
        <a 
        href={`mailto:${this.state.mail}`}
        >
          <Ionicon icon="ios-mail-outline" fontSize="35px" color="rgb(130, 130, 130)"/>
        </a>
      </li>

      <li className='logo-contacts'>
        <a 
        href={`${this.state.linkdin}`}
        target='blank'
        >
           <Ionicon icon="logo-linkedin" fontSize="35px" color="rgb(130, 130, 130)"/>
        </a>
      </li>
      <li className='logo-contacts'>
        <a 
        href={`${this.state.github}`}
        target='blank'
        >
          <Ionicon icon="logo-github" fontSize="35px" color="rgb(130, 130, 130)"/>
        </a>
      </li>

      <li className='logo-contacts'>
        <a 
        href={`${this.state.codewars}`}
        target='blank'
        >
           <Ionicon icon="md-code-working" fontSize="35px" color="rgb(130, 130, 130)"/>
        </a>
      </li>

    </ul>
    )
  }
}