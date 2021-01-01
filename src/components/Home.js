import '../App.scss';
import KataMapper from './KataMapper';
import React from "react";



function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className= 'page-title'> Katajac </h1>
        <div className='description'>
          <span>An online portfolio, 
          built to showcase the functionality of katas that I have 
          completed as part of my learning and development.
          </span>
        </div>
      </header>
      <body> 
        <KataMapper />
      </body>
    </div>
  );
}

export default Home;