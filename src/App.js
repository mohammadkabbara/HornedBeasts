

import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import data  from './components/data.json';



class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      show :false,
      title: null,
      image:null,
      description:null,

    };
  }
  display = (name, src, description) => {
    this.setState({
      title: name,
      image:  src,
      description: description,
    });
  }
  handleShow = () => {
    this.setState({
      show: true
    });
  };
  handleClose = () => {
    this.setState({
      show: false
    });
  };






  render() {
    return (
      <>
         <div className="app">
        <Header />
        <Main dataC={data} handleShow = {this.handleShow} displayImage = {this.display}/>
        <Footer />
        <SelectedBeast  hideCard={this.handleClose} showCard= {this.state.show}  imageData={this.state.image}  titleData={this.state.title} descriptionData = {this.state.description}/>
      </div>


      </>

    )
  }

}

export default App;
