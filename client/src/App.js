import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import Homepage from './Components/Homepage'
import LoginPage from './Components/LoginPage'
import IdeaPage from './Components/IdeaPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/user/:userId" component={IdeaPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App