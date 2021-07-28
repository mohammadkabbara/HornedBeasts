import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
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
    //  console.log(this.props)
    this.setState({
      numOfPets: this.state.numOfPets + 1
    });

    this.props.showing();

    this.props.displaying(
      this.props.title,
       this.props.image,
        this.props.description
        );


    
  };

   


  render() {
    return (
      <>

        <Col>
          <div className="row">

            <Card 
            style={{ width: '18rem' }}
            //  style={{ height: '10rem'  }}
              style={{ background: 'rgb(176 161 161)'  }}
             
               >
               

              <Card.Img
               className="image" 
               onClick={this.incrementNumOfPets}
               variant="top" 
               src={this.props.image} 
               style={{ width: '28.5rem' }}
              

               
               ></Card.Img>

              <Card.Body>

                <Card.Title>
                  {this.props.description} 
                  </Card.Title>
                <Card.Text >
               
                  Number of Pets 😸 : {this.state.numOfPets}
                </Card.Text>
                <Button   variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </Col>



     
      </>

    )
  }

}

export default HornedBeast;

