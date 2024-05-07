import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchFilter from './componnent/SearchFilter';
import ActivityCounter from './componnent/ActivityCounter';
import PersonList from './componnent/PersonList';
import Texttoggle from './componnent/Texttoggle';

import './App.css';
import Addition from './componnent/Addition';
import ImageSlide from './componnent/ImageSlide';

import logo1 from './assessts/logo1.png';
import logo512 from './assessts/logo512.png';
import MediaPlayer from './componnent/MediaPlayer';
import Counter from './componnent/TestingComponnet/Counter';
import Parent from './componnent/PropsComponent/Parent';

// const images = [logo1, logo512]; 

function App() {
  return (
      <div>
        {/* <SearchFilter/> */}
       {/* <ActivityCounter/> */}
       {/* <PersonList/> */}
       {/* <Texttoggle/> */}
       {/* <Addition/> */}
       {/* <ImageSlide images={images} /> */}
       {/* <NavBar/> */}
       {/* <MediaPlayer/> */}
       {/* <Counter/> */}
       <Parent/>
      </div>
  );
}

export default App;