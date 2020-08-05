import React from 'react'
import Button from './button.js'

class Albums extends React.Component{
  componentDidMount() {
    document.title = "Album Page"
  }

  render(){
    const albumTitle = ['abc', 'def', 'ghi']
    return (

      <div>
      <h1>Album List</h1>
        <ul>
            {albumTitle.map(item => {
              return <li>{item}</li>
              })}
        </ul>

      </div>
    )
  }
}
export default Albums
