

import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import data from './components/data.json';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: '',
      image: '',
      description: '',

    };
  }
  display = (title, url, desc) => {
    this.setState({
      title: title,
      image: url,
      description: desc,
    });
  }
  handleShow = () => {
    this.setState({
      show: true
    });
  };
  handleHide = () => {
    this.setState({
      show: false
    });
  };






  render() {
    // console.log(this.state)
    return (
      <>
        <div className="app">
          <Header />

          <Main
            data={data}
            handleShow={this.handleShow}
            displayImage={this.display}

          />
          <Footer />

          <SelectedBeast
            hideCard={this.handleHide}
            showCard={this.state.show}
            imageData={this.state.image}
            titleData={this.state.title}
            descriptionData={this.state.description}
          />
        </div>


      </>

    )
  }

}

export default App;
