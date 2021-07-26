

import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

import Footer from './components/Footer';
// import pic11 from "./pic11.jpg"
// import pic22 from "./pic22.jpg"



class App extends React.Component {

  render() {
    return (
      <>
         <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>


      </>

    )
  }

}

export default App;
