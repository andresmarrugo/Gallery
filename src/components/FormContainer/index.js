import React, { Component } from "react";
import Axios from "axios";
/* Import Components */
import Input from '../Input';
import Button from '../Button';



class FormContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newPhoto: {
        path: "",
        name: "",
        description: "",
        album: ""   
      }
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */


  handleInput(e) {

    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newPhoto: {
          ...prevState.newPhoto,
          [name]: value
        }
      }),
      () => console.log(this.state.newPhoto)
    );
  }

    handleFormSubmit(e) {
    e.preventDefault();
    Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    let photoData = this.state.newPhoto;
    let apiurl= new Request('http://localhost:3001/gallery/upload', {method: 'POST'})
    fetch(apiurl).then(response => {
        console.log("Successful");
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newPhoto: {
        path: "",
        name: "",
        description: "",
        album: ""

      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"file"}
          title={"Select image"}
          name={"image"}
          value={this.state.newPhoto.name}
        />
        
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{/*Submit */}
        
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{/* Clear the form */}
      
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
