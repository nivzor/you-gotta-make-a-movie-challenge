import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      movA:true,
      imA:true,
      imB:true
    };
  }

  play() {
    var playbutton = document.getElementById("play-button");
    var fashion = document.querySelector("#fashion video");
    fashion.removeAttribute("controls");
    playbutton.addEventListener("click", function () {
      fashion.play();
      fashion.classList.add("playing");
    })
  }
react = ()=> {
  console.log("aaaa")
  this.setState({imA:false,movA:false,imB:false},()=>this.play());


}
  render() {
    return (
      <div>
        <figure id="fashion">
        {this.state.movA?
          <video key="a">
            <source src="https://res.cloudinary.com/dkhnhx5tb/video/upload/du_1,so_93/v1554323045/Blue_Pill_or_Red_Pill_-_The_Matrix_29_Movie_CLIP_1999_HD.mp4" />
          </video>:
           <video key="b">
            <source src="https://res.cloudinary.com/ds9c5zpur/video/upload/du_20,so_24/v1554321026/samples/Matrix.mp4" type="video/mp4" />
          </video>
          }
          <div id="vid-cover"></div>
        
          <figcaption>YGLF<span>Choose React</span></figcaption>
           <img id="ia" style={{display:this.state.imB?"none":"static"}} src="https://res.cloudinary.com/ds9c5zpur/image/upload/v1554322703/danFace.png" />
           <img id="ib" width="100" style={{display:!this.state.imA?"none":"static"}} src="  https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" onClick={this.react }/>
        </figure>
        <button onClick={this.play} id="play-button">Play</button>
         
      </div>

    
    );
  }
}

render(<App />, document.getElementById('root'));
