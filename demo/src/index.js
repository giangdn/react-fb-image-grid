import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import "../../src/css/style.css";
import FbImageLibrary from "../../src";
import LazyLoad from "react-lazyload";

const images = [
  {
    source:
      "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"
  },
  {
    source:
      "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
  },
  {
    source:
      "https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg"
  },
  {
    source:
      "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg"
  },
  {
    source:
      "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&h=350"
  },
  {
    source:
      "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350"
  },
  {
    source:
      "https://d3u2xd68tejot5.cloudfront.net/images/1496.1595172450.vid_20200716125615.mp4"
  }
];

class Demo extends Component {
  render() {
    return (
      <LazyLoad>
        <FbImageLibrary images={images} hideOverlay={true} />
      </LazyLoad>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
