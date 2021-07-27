import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';




class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numOfPets: 0
    }
  }

  incrementNumOfPets = () => {
    this.setState({
      numOfPets: this.state.numOfPets + 1
    });
    this.props.displaying(this.props.title, this.props.image, this.props.description)
    this.props.showing()
  }

   


  render() {
    return (
      <>

        <Col>
          <div className="row">

            <Card 
            style={{ width: '18rem' }}
            //  style={{ height: '18rem'  }}
              style={{ background: '#928585'  }}
             
               >
               

              <Card.Img
               className="image" 
               onClick={this.incrementNumOfPets} 
               variant="top" 
               src={this.props.image} 
               style={{ width: '18rem' }}></Card.Img>

              <Card.Body>

                <Card.Title>
                  {this.props.description} 
                  </Card.Title>
                <Card.Text>
                  Number of Pets 😸 : {this.state.numOfPets}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>



     
      </>

    )
  }

}

export default HornedBeast;

