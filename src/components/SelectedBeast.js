import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component{



  render(){
    console.log(this.props)
    return(
      <>
      <Modal
       show={this.props.showCard}
        onHide={this.props.hideCard}>


        <Modal.Header closeButton>

          <Modal.Title>
              {this.props.titleData}
              </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.imageData} 
          style={{width: '400px'}}/>
          <p>{this.props.descriptionData}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hideCard}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
}

export default SelectedBeast;















