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
    //Data for tets:
        let data=[
        {
            src: "http://cdn.ismorbo.com/wp-content/uploads/2017/08/death-note.jpg",
            caption: "Simpatic Pic",
            thumbnail: "http://cdn.ismorbo.com/wp-content/uploads/2017/08/death-note.jpg"
        },
        {
            src: "https://cdn-3.expansion.mx/dims4/default/3ba6510/2147483647/strip/true/crop/800x450+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fa8%2F59%2Fd1bf92434c34ab033820d8b19b50%2Fpromesas-amlo-amarillo-1-min.gif",
            caption: "Simpatic Pic",
            thumbnail: "https://cdn-3.expansion.mx/dims4/default/3ba6510/2147483647/strip/true/crop/800x450+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Fa8%2F59%2Fd1bf92434c34ab033820d8b19b50%2Fpromesas-amlo-amarillo-1-min.gif"
        },
        {
            src: "https://cdn.cienradios.com/wp-content/uploads/sites/4/2014/10/23.jpg",
            caption: "Simpatic Pic",
            thumbnail: "https://cdn.cienradios.com/wp-content/uploads/sites/4/2014/10/23.jpg"
        },
        {
            src: "https://www.recreoviral.com/wp-content/uploads/2016/05/Los-inventos-m%C3%A1s-extra%C3%B1os-e-inutiles-que-nadie-necesita-16.jpg",
            caption: "Simpatic Pic",
            thumbnail: "https://www.recreoviral.com/wp-content/uploads/2016/05/Los-inventos-m%C3%A1s-extra%C3%B1os-e-inutiles-que-nadie-necesita-16.jpg"
        },
        {
            src: "https://st-listas.20minutos.es/images/2012-12/351012/3843128_640px.jpg?1356559851",
            caption: "Simpatic Pic",
            thumbnail: "https://st-listas.20minutos.es/images/2012-12/351012/3843128_640px.jpg?1356559851"
        }

        ]


    return (
      <div>
        <Gallery images={data}/>
      </div>
    )
  }
}
