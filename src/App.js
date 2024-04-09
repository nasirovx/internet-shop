import React from 'react';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Main from './Pages/Main';
import './App.css'


const App = () => {
  return (
    <div className="App">
      <Header/>
    <div className='d-flex mt-2 justify-content-around'>
      <div className="col-2">
        <Nav/>
      </div>
      <div className="col-9 main">
        <Main/>
      </div>
    </div>
    </div>
  )
}

export default App
