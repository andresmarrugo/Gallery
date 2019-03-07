import React, { Component } from "react";
import axios from 'axios';
/* Import Components */
import Button from '../Button';
class ImageLoad extends Component {
    state = {
      selectedFile: null,
      caption: null
    };
  constructor(props) {
    super(props);

    

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCaption = this.handleCaption.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */


  handleInput=(e)=> {
    e.preventDefault();
   
    let file={
      selectedFile:e.target.files[0]
    };

    this.setState(file);
  
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let file = new FormData();
        
    console.log(this.state);

    file.append('image',this.state.selectedFile, this.state.selectedFile.name);
    file.append('caption',this.state.caption)
    let apiurl= new Request('http://localhost:3001/upload', {method: 'POST'})
    axios.post('http://localhost:3001/upload', file).then(response => {
        console.log(response);
    });
  }
  handleCaption(e){
    e.preventDefault();
    
    let cap={
      caption: e.target.value
    }
    this.setState(cap);
    
  }
  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      caption: '',
      selectedFile: null
    })
  }

  render() {
    return (
      <form className="container-fluid" encType = "multipart/form-data" onSubmit={this.handleFormSubmit }>
        <label>
          Select image:
        <input type='file' onChange={this.handleInput} />
        </label>
        <label>
          Caption:<br/>
        <input type='text' name='caption' onChange={this.handleCaption}/>
        </label><br/>
        
        {/*Submit */}
        <button  className={"btn btn-primary"}> Submit</button>
        {/* Clear the form */}
        <button  className={"btn btn-secondary"} onClick={this.handleClearForm}> Clear</button>
        
        
        
      
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default ImageLoad;
