import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/src/style.css"; // This only needs to be imported once in your app
import "video-react/dist/video-react.css"; // import css

class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images || [],
      currentImageIndex: props.index
    };

    this.onMovePrevRequest = this.onMovePrevRequest.bind(this);
    this.onMoveNextRequest = this.onMoveNextRequest.bind(this);
  }

  onMovePrevRequest() {
    const { currentImageIndex, images } = this.state;

    this.setState({
      currentImageIndex: (currentImageIndex + images.length - 1) % images.length
    });
  }

  onMoveNextRequest() {
    const { currentImageIndex, images } = this.state;

    this.setState({
      currentImageIndex: (currentImageIndex + 1) % images.length
    });
  }

  render() {
    const { images, currentImageIndex } = this.state;
    const { onClose } = this.props;

    return (
      <Lightbox
        mainSrc={images[currentImageIndex].src}
        nextSrc={
          images.length > 1
            ? images[(currentImageIndex + 1) % images.length].src
            : null
        }
        prevSrc={
          images.length > 1
            ? images[(currentImageIndex + images.length - 1) % images.length]
                .src
            : null
        }
        onCloseRequest={onClose}
        onMovePrevRequest={this.onMovePrevRequest}
        onMoveNextRequest={this.onMoveNextRequest}
        reactModalStyle={{ overlay: { zIndex: 999999 } }}
      />
    );
  }
}

export default ModalComponent;
