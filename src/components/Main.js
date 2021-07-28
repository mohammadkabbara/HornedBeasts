import React from 'react';
import HornedBeasts from './HornedBeast';
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import data from './data.json';
import Form from 'react-bootstrap/Form';


import Button from 'react-bootstrap/Form';






class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: "all"
     };
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      value: event.target.value,
    });
  };
  render() {


    return (
      <>
        {/* <Form.Label onSubmit={this.handleSubmit}
          style={{
            width: '70%',
            padding: '0.5%',
            textAlign: 'center',
            color: '#626060',
            marginLeft: '15%',
            fontSize: '30px',

            fontWeight: 'bold'
          }}


        >Learn about the animal by the number of its horns</Form.Label>
        <Form.Select aria-label="Default select example"
          style={{
            width: '70%',
            padding: '1%',
            backgroundColor: '#947e7e',
            color: 'white',
            marginLeft: '15%'
          }} name='select'

        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>

        </Form.Select>


        <Button variant="primary"
          type="submit"
          style={{
            width: '5%',
            padding: '0.6%',
            backgroundColor: 'rgb(65 70 67)',
            color: 'white',
            marginLeft: '47%',
            marginBottom: ' 20px',
            borderRadius: '20px'
          }}

        >
          Submit
        </Button> */}
          <Form>
          <Form.Group controlId="exampleForm.SelectCustomHtmlSize" 
            style={{
            width: '70%',
            padding: '1%',
            backgroundColor: '#947e7e',
            color: 'white',
            marginLeft: '15%',
            marginBottom:'2%'

          }} 
>
            <Form.Label>Learn about the animal by the number of its horns</Form.Label>
            <Form.Control as="select" custom onChange={this.handleClick}>
              <option value="all">All</option>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="100">Waow..</option>
            </Form.Control>
          </Form.Group>
          <Button  style={{
            width: '5%',
            padding: '0.6%',
            backgroundColor: 'rgb(65 70 67)',
            color: 'white',
            marginLeft: '47%',
            marginBottom: ' 20px',
            borderRadius: '20px'
          }} variant="primary" type="submit">
                Submit
            </Button>
        </Form>





        <div className="first">
        
          <Row xs={1} md={3} className="g-4">
            {
                  data.filter((item) => {
                    if (this.state.value === "all") {
                      return true;
                    } else if (this.state.value === "one") {
                      return item.horns === 1;
                    } else if (this.state.value === "two") {
                      return item.horns === 2;
                    }  else {
                      return item.horns === 100;
                    }
                  })
             .map((item) => {

                return (

                  <HornedBeasts

                    showing={this.props.handleShow}
                    displaying={this.props.displayImage}
                    image={item.image_url}
                    title={item.title}
                    description={item.description}
                  >

                  </HornedBeasts>


                );
              })

            }
          </Row>
          
        </div>
      </>
    )

  }
}
export default Main;







