import React, { Component } from 'react'
import style from './App.scss'
import Main from '@/home/main.js'
class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Main/>
      </div>
    )
  }
}

export default App
