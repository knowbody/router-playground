import React, { PropTypes, Component, ContextTypes } from 'react'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router'
import { Stage, TilingSprite, Text } from 'react-pixi'

const Navigation = () => {
  return (
    <div>
      <h3 >Navigation</h3>
      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>
    </div>
  )
}

const Home = () => {
  return (
    <Stage width={300} height={300}>
      <TilingSprite
        image='https://raw.githubusercontent.com/Izzimach/react-pixi/master/examples/assets/bg_castle.png'
        width={300}
        height={300}
        key='1'
      />
      <Text
        text='Vector text'
        x={150}
        y={10}
        style={{font:'40px Times'}}
        anchor={new PIXI.Point(0.5,0)}
        key='2'
      />
    </Stage>
  )
}

const App = (props) => {
  return (
    <div>
      <h1>App</h1>
      <Navigation />
      {props.children}
    </div>
  )
}

export default class Root extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    )
  }
}
