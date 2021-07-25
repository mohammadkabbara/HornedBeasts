import React from 'react';





class App extends React.Component {

  render(){
    return(
      <>
        <h2>{this.props.title}</h2>
        <div className = "image">
        <img  src  = {this.props.image} alt={this.props.alt} title={this.props.title} ></img>
        </div>
        <div className = "description">
        <p>{this.props.description}</p> 
        </div>   
        
      

      </>
      
    )
  }

}

export default App;