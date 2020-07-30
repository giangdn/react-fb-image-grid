function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/src/style.css"; // This only needs to be imported once in your app
import "video-react/dist/video-react.css"; // import css

var ModalComponent = function (_Component) {
  _inherits(ModalComponent, _Component);

  function ModalComponent(props) {
    _classCallCheck(this, ModalComponent);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      images: props.images || [],
      currentImageIndex: props.index
    };

    _this.onMovePrevRequest = _this.onMovePrevRequest.bind(_this);
    _this.onMoveNextRequest = _this.onMoveNextRequest.bind(_this);
    return _this;
  }

  ModalComponent.prototype.onMovePrevRequest = function onMovePrevRequest() {
    var _state = this.state,
        currentImageIndex = _state.currentImageIndex,
        images = _state.images;


    this.setState({
      currentImageIndex: (currentImageIndex + images.length - 1) % images.length
    });
  };

  ModalComponent.prototype.onMoveNextRequest = function onMoveNextRequest() {
    var _state2 = this.state,
        currentImageIndex = _state2.currentImageIndex,
        images = _state2.images;


    this.setState({
      currentImageIndex: (currentImageIndex + 1) % images.length
    });
  };

  ModalComponent.prototype.render = function render() {
    var _state3 = this.state,
        images = _state3.images,
        currentImageIndex = _state3.currentImageIndex;
    var onClose = this.props.onClose;

    return React.createElement(Lightbox, {
      mainSrc: images[currentImageIndex].url,
      nextSrc: images.length > 1 ? images[(currentImageIndex + 1) % images.length].url : null,
      prevSrc: images.length > 1 ? images[(currentImageIndex + images.length - 1) % images.length].url : null,
      onCloseRequest: onClose,
      onMovePrevRequest: this.onMovePrevRequest,
      onMoveNextRequest: this.onMoveNextRequest,
      reactModalStyle: { overlay: { zIndex: 999999 } }
    });
  };

  return ModalComponent;
}(Component);

export default ModalComponent;