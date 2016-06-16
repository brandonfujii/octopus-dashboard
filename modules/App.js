import React from 'react'
import NavLink from './NavLink'
import './main.scss'

export default React.createClass({
  render() {
    return (
      <div>
        <h3>octopus</h3>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
