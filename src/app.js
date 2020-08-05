import React from 'react'
import Button from './button.js'
import { Switch, Route } from 'react-router-dom';
import HomePage from './homePage.js'
import Albums from './albums.js'
import BandInfo from './bandinfo.js'

class App extends React.Component {
  // componentDidMount() {
  //   document.title = "Welcome Page"
  // }
  render() {
    return (
      <Switch>

        <Route exact path="/" render={() => <h1>Welcome</h1>} />
        //takes user to artist homepage
        <Route path="/home" component={HomePage} />

        <Route path="/albums" component={Albums} />
        <Route path="/bandinfo" component={BandInfo} />
      </Switch>
    )
  }
}
export default App
