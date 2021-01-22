import React from 'react'
import './Header.css';
import logo from './logo.png';


class Header extends React.Component {
  render(){
    return (
      <div className="header">
      <img src={logo} alt="logo" />
      <h1>Spoti<span className="highlight">Tunes</span></h1>

       </div>
      )
  }
}

export default Header
