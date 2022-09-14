import React from 'react';
import './App.css';
import{originals,action} from '../src/urls'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div className='App'>
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix originals'/>
    <RowPost url={action} title='Action' isSmall={true}/>
    </div>
  );
}

export default App;
