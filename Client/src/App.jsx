import React from 'react'
import Login from './components/login/login'
import Nav from './components/navbar/nav'
import './index.css'

const App = () => {

  const app = 'Wink!!'

  return (
    <div className='index'>
      <div className="nav">
        <Nav />
        <br></br>
      <div className='content'> 
        {/* <h1 className="class">The Metaverse Explorer</h1> */}
        <h2 className="wink">{app} enables users to discover connections that was not possible before.</h2>
        <img src=''/>
        <div className="login-container">
          <Login />
        </div>
      </div>
      </div>
    </div>
  )
}

export default App