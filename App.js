import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';
import {DataProvider} from './components/Context'
import "./App.css" 

class App extends React.Component{
  render(){
    return(
    <DataProvider>
      <div className="app">
      <Router>
        <Header/>
        <Section/>
      </Router>
    <div className="img1">
    <img src="https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw4604450e/images/e_08/M9160_E_08X1.jpg?sw=406" width="320" height="315"/>
    </div>
    <div className="img2">
    <img src="https://r1.ilikewallpaper.net/pic/201603/papers_co_af73_jordan_fly_wade_nike_shoe_art_34_iphone6_plus_wallpaper_640.jpg" width="365" height="312"/>
    </div>
    <div className="img3">
    <img src="https://s1.thcdn.com/productimg/1600/1600/11520123-1834546810544403.jpg" width="320" height="329"/>
    </div>
    <div className="img4">
    <img src="https://wallpapercave.com/wp/wp2005982.jpg" width="310" height="310"/>
    </div>
    <div className="img5">
    <img src="https://assets.teenvogue.com/photos/5d028aefabe0731c4a4cf056/master/w_1600%2Cc_limit/0729663004_201909_PP_0091.jpg" width="327" height="315"/>
    </div>
    <div className="img6">
    <img src="https://wallpapercave.com/wp/wp3699065.jpg" width="325" height="315"/>
    </div>
    </div>
    </DataProvider>
    );
  }
}

export default App;
