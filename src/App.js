import React from 'react';
import Sidebar from './components/Sidebar';  
import Reviews from './components/Reviews';
import Ratings from './components/Ratings';
import Analysis from './components/Analysis';
import Visitors from './components/Visitors';

import './App.css'


function App() {
   return (
     <div className='App'>
       <div className='Sidebar'><Sidebar/></div>
       <div className='right'></div>
       <div className='topRight'>
      
       <Reviews/>
       <Ratings/>
       <Analysis/>
       </div>
       <div className='bottomRight'><Visitors/></div>

     </div>
  );
}

export default App;
 