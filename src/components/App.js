import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Login from './Login'
import LinkList from './LinkList'
import CreateLink from './CreateLink'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
