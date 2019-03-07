import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import axios from 'axios';


export default class imageList extends Component {
    constructor(props){
        super(props);
        this.state={
            imageList: null,
        }
    }
    componentWillMount = () => {
        var data={};
        axios.get('http://localhost:3001/gallery').then(res=>{
        
        this.setState({
            imageList: res
        });
        
        });
    }
    
    loadImages(){
        var data={};
        axios.get('http://localhost:3001/gallery').then(res=>{
        res.json();
        this.setState(data,()=>{
            console.log('ok, up!');
        });
        console.log("state: ",this.state);
        });
        return data;
        
    }

    render() {
       
    return (
      <div>
        <h1>Hola</h1>
      </div>
    )
  }
}
