import React from 'react'
import About from './About.js'
import Portfolio from './Portfolio.js'
import Skills from './Skills.js'
import Home from './Home.js'
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './Container.scss'



function Container({location}){
  return(
    <div className='wrapper fade-enter fade-exit'>
    <TransitionGroup className="transition-group">
    <CSSTransition
          key={location.key}
          timeout={{ enter: 500, exit: 500 }}
          classNames={'fade'}

      >
      <section className="route-section">
       <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route  path="/about" component={About}/>
            <Route  path="/portfolio" component={Portfolio}/>
            <Route  path="/skills" component={Skills}/>
        </Switch>
      </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default withRouter(Container);
