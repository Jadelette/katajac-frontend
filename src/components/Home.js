import './Home.scss';
import KataMapper from './KataMapper';
import React from "react";

function Home(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='page-title'> Katajac </h1>
        <div className='description'>
          <span>An online portfolio, 
          built to showcase the functionality of katas that I have 
          completed as part of my learning and development.
          </span>
        </div>
      </header>
      <main>
        {renderContent(props.data)}
      </main>
    </div>
  );
}

function renderContent(data) {
  const kataList = data.kataList;
  if (kataList.length != 0) {
    return (
      <div className="kata-menu" data-testid="kata-menu">
        <KataMapper data={data}/>
      </div>
    )
  } else {
    return <div className='home-placeholder'>
     <p className='home-placeholder-text'>
       Nothing to see here - katas coming soon!
     </p>
    </div>
  }
}

export default Home;