import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        numOfPets : 0
    }
}

incrementNumOfPets = () => {
    this.setState({
        numOfPets: this.state.numOfPets + 1
    })
}

  render() {
    return (
      <>

       

        <Card style={{ width: '18rem',height: "30rem" }}>
          <Card.Img  onClick={this.incrementNumOfPets} variant="top" src={this.props.image} style={{ width: '18rem' }}></Card.Img> 
          <Card.Body>

            <Card.Title>{this.props.description} </Card.Title>
            <Card.Text>
              Number of Pets 😸 : {this.state.numOfPets}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> 


      </>

    )
  }

}

export default App;

 {/* <h2>{this.props.title}</h2>
        <div className = "image">
        <img  src  = {this.props.image} alt={this.props.alt} title={this.props.title} ></img>
        </div>
        <div className = "description">
        <p>{this.props.description}</p> 
        </div>    */}