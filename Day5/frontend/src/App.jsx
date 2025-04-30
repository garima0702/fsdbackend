import React from 'react'
import Register from './components/Register'
import Delete from './components/Delete'
import View from './components/View'
import Update from './components/Update'
import './App.css'
const App = () => {
  return (
    <div className="app-container">
      <h1>USER REGISTRATION SYSTEM</h1>
      <Register/>
      <hr></hr>
      <Update/>
      <hr></hr>
      <Delete/>
      <hr></hr>
      <View/>

    </div>
  )
}

export default App
