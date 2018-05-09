(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sourceDialog"],{

/***/ "./src/SourceDialog.js":
/*!*****************************!*\
  !*** ./src/SourceDialog.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");

var _reactModal2 = _interopRequireDefault(_reactModal);

var _reactSyntaxHighlighter = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/index.js");

var _reactSyntaxHighlighter2 = _interopRequireDefault(_reactSyntaxHighlighter);

var _hljs = __webpack_require__(/*! react-syntax-highlighter/styles/hljs */ "./node_modules/react-syntax-highlighter/styles/hljs/index.js");

var _loadingCSS = __webpack_require__(/*! ./loadingCSS */ "./src/loadingCSS.js");

var _loadingCSS2 = _interopRequireDefault(_loadingCSS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactModal2.default.setAppElement('#app');

class SourceDialog extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: props.modalIsOpen,
      loadingClassName: props.loadingClassName
    };
    this.closeModal = this.closeModal.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.modalIsOpen !== nextProps.modalIsOpen) {
      return {
        modalIsOpen: nextProps.modalIsOpen
      };
    }
    return null;
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const htmlString = _loadingCSS2.default[this.state.loadingClassName]['htmlString'];
    const cssString = _loadingCSS2.default[this.state.loadingClassName]['cssString'];

    const HTMLCodeView = () => {
      return _react2.default.createElement(
        _reactSyntaxHighlighter2.default,
        { language: 'html', style: _hljs.tomorrowNightEighties },
        htmlString
      );
    };
    const CSSCodeView = () => {
      return _react2.default.createElement(
        _reactSyntaxHighlighter2.default,
        { language: 'css', style: _hljs.tomorrowNightEighties },
        cssString
      );
    };
    return _react2.default.createElement(
      _reactModal2.default,
      {
        isOpen: this.state.modalIsOpen,
        onRequestClose: this.closeModal,
        className: 'dialog-content',
        overlayClassName: 'dialog-overlay'
      },
      _react2.default.createElement(
        'h2',
        { ref: subtitle => this.subtitle = subtitle },
        'Source Code'
      ),
      _react2.default.createElement(
        'div',
        { className: 'source-view' },
        _react2.default.createElement(
          'div',
          null,
          'div'
        ),
        _react2.default.createElement(HTMLCodeView, null),
        _react2.default.createElement(
          'div',
          null,
          'css'
        ),
        _react2.default.createElement(CSSCodeView, null)
      ),
      _react2.default.createElement(
        'button',
        { className: 'close-btn', onClick: this.closeModal },
        'close'
      )
    );
  }
}

exports.default = SourceDialog;

/***/ }),

/***/ "./src/loadingCSS.js":
/*!***************************!*\
  !*** ./src/loadingCSS.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'three-dots-scale': {
    htmlString: '<div className="three-dots-scale"><div/><div/><div/></div>',
    cssString: `.circle-dots-scale div {
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 50%;
  display: inline-block;
}

@keyframes circle-dots-scale {
  100% {
    transform: scale(0);
    opacity: 0;
  }
  75% {
    transform: scale(0.25);
    opacity: 0.25;
  }
  50% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  25% {
    transform: scale(0.75);
    opacity: 0.75;
  }
  0% {
    transform: scale(1);
    opacity: 1;
  }
}
.circle-dots-scale {
  width: 0px;
  margin: 0 auto;
  position: relative;
}
.circle-dots-scale div {
  position: absolute;
  margin: 2px;
}
.circle-dots-scale div:nth-child(1) {
  top: -30px;
  left: 0;
  animation: circle-dots-scale 3.2s -2.8s infinite linear;
}
.circle-dots-scale div:nth-child(2) {
  top: -20px;
  left: 20px;
  animation: circle-dots-scale 3.2s -2.4s infinite linear;
}
.circle-dots-scale div:nth-child(3) {
  top: 0px;
  left: 30px;
  animation: circle-dots-scale 3.2s -2s infinite linear;
}
.circle-dots-scale div:nth-child(4) {
  top: 20px;
  left: 20px;
  animation: circle-dots-scale 3.2s -1.6s infinite linear;
}
.circle-dots-scale div:nth-child(5) {
  top: 30px;
  left: 0px;
  animation: circle-dots-scale 3.2s -1.2s infinite linear;
}
.circle-dots-scale div:nth-child(6) {
  top: 20px;
  left: -20px;
  animation: circle-dots-scale 3.2s -0.8s infinite linear;
}
.circle-dots-scale div:nth-child(7) {
  top: 0px;
  left: -30px;
  animation: circle-dots-scale 3.2s -0.4s infinite linear;
}
.circle-dots-scale div:nth-child(8) {
  top: -20px;
  left: -20px;
  animation: circle-dots-scale 3.2s 0s infinite linear;
}
`
  }

};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvU291cmNlRGlhbG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9sb2FkaW5nQ1NTLmpzIl0sIm5hbWVzIjpbInNldEFwcEVsZW1lbnQiLCJTb3VyY2VEaWFsb2ciLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb2RhbElzT3BlbiIsImxvYWRpbmdDbGFzc05hbWUiLCJjbG9zZU1vZGFsIiwiYmluZCIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm5leHRQcm9wcyIsInByZXZTdGF0ZSIsInNldFN0YXRlIiwicmVuZGVyIiwiaHRtbFN0cmluZyIsImNzc1N0cmluZyIsIkhUTUxDb2RlVmlldyIsIkNTU0NvZGVWaWV3Iiwic3VidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEscUJBQU1BLGFBQU4sQ0FBb0IsTUFBcEI7O0FBRUEsTUFBTUMsWUFBTixTQUEyQixnQkFBTUMsU0FBakMsQ0FBMkM7QUFDekNDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBYUYsTUFBTUUsV0FEUjtBQUVYQyx3QkFBa0JILE1BQU1HO0FBRmIsS0FBYjtBQUlBLFNBQUtDLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEI7QUFDRDs7QUFFRCxTQUFPQyx3QkFBUCxDQUFnQ0MsU0FBaEMsRUFBMkNDLFNBQTNDLEVBQXNEO0FBQ3BELFFBQUdBLFVBQVVOLFdBQVYsS0FBMEJLLFVBQVVMLFdBQXZDLEVBQW9EO0FBQ2xELGFBQU87QUFDTEEscUJBQWFLLFVBQVVMO0FBRGxCLE9BQVA7QUFHRDtBQUNELFdBQU8sSUFBUDtBQUNEOztBQUVERSxlQUFhO0FBQ1gsU0FBS0ssUUFBTCxDQUFjLEVBQUNQLGFBQWEsS0FBZCxFQUFkO0FBQ0Q7O0FBRURRLFdBQVM7QUFDUCxVQUFNQyxhQUFhLHFCQUFXLEtBQUtWLEtBQUwsQ0FBV0UsZ0JBQXRCLEVBQXdDLFlBQXhDLENBQW5CO0FBQ0EsVUFBTVMsWUFBWSxxQkFBVyxLQUFLWCxLQUFMLENBQVdFLGdCQUF0QixFQUF3QyxXQUF4QyxDQUFsQjs7QUFFQSxVQUFNVSxlQUFlLE1BQU07QUFDekIsYUFBTztBQUFBO0FBQUEsVUFBbUIsVUFBUyxNQUE1QixFQUFtQyxrQ0FBbkM7QUFBa0VGO0FBQWxFLE9BQVA7QUFDRCxLQUZEO0FBR0EsVUFBTUcsY0FBYyxNQUFNO0FBQ3hCLGFBQU87QUFBQTtBQUFBLFVBQW1CLFVBQVMsS0FBNUIsRUFBa0Msa0NBQWxDO0FBQWlFRjtBQUFqRSxPQUFQO0FBQ0QsS0FGRDtBQUdBLFdBQ0U7QUFBQTtBQUFBO0FBQ0MsZ0JBQVEsS0FBS1gsS0FBTCxDQUFXQyxXQURwQjtBQUVDLHdCQUFnQixLQUFLRSxVQUZ0QjtBQUdDLG1CQUFVLGdCQUhYO0FBSUMsMEJBQWlCO0FBSmxCO0FBTUM7QUFBQTtBQUFBLFVBQUksS0FBS1csWUFBWSxLQUFLQSxRQUFMLEdBQWdCQSxRQUFyQztBQUFBO0FBQUEsT0FORDtBQU9DO0FBQUE7QUFBQSxVQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLHNDQUFDLFlBQUQsT0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FIRjtBQUlFLHNDQUFDLFdBQUQ7QUFKRixPQVBEO0FBYUM7QUFBQTtBQUFBLFVBQVEsV0FBVSxXQUFsQixFQUE4QixTQUFTLEtBQUtYLFVBQTVDO0FBQUE7QUFBQTtBQWJELEtBREY7QUFpQkQ7QUFsRHdDOztrQkFxRDVCUCxZOzs7Ozs7Ozs7Ozs7Ozs7OztrQkM3REE7QUFDYixzQkFBb0I7QUFDbEJjLGdCQUFZLDREQURNO0FBRWxCQyxlQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUhxQjs7QUFEUCxDIiwiZmlsZSI6InNvdXJjZURpYWxvZy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbmltcG9ydCBTeW50YXhIaWdobGlnaHRlciBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXInO1xuaW1wb3J0IHsgZG9jY28sIHRvbW9ycm93TmlnaHRFaWdodGllcyB9IGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9zdHlsZXMvaGxqcyc7XG5pbXBvcnQgbG9hZGluZ0NTUyBmcm9tICcuL2xvYWRpbmdDU1MnO1xuXG5Nb2RhbC5zZXRBcHBFbGVtZW50KCcjYXBwJylcblxuY2xhc3MgU291cmNlRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1vZGFsSXNPcGVuOiBwcm9wcy5tb2RhbElzT3BlbixcbiAgICAgIGxvYWRpbmdDbGFzc05hbWU6IHByb3BzLmxvYWRpbmdDbGFzc05hbWUsXG4gICAgfTtcbiAgICB0aGlzLmNsb3NlTW9kYWwgPSB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZihwcmV2U3RhdGUubW9kYWxJc09wZW4gIT09IG5leHRQcm9wcy5tb2RhbElzT3Blbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbW9kYWxJc09wZW46IG5leHRQcm9wcy5tb2RhbElzT3BlblxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW9kYWxJc09wZW46IGZhbHNlfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaHRtbFN0cmluZyA9IGxvYWRpbmdDU1NbdGhpcy5zdGF0ZS5sb2FkaW5nQ2xhc3NOYW1lXVsnaHRtbFN0cmluZyddO1xuICAgIGNvbnN0IGNzc1N0cmluZyA9IGxvYWRpbmdDU1NbdGhpcy5zdGF0ZS5sb2FkaW5nQ2xhc3NOYW1lXVsnY3NzU3RyaW5nJ107XG5cbiAgICBjb25zdCBIVE1MQ29kZVZpZXcgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gPFN5bnRheEhpZ2hsaWdodGVyIGxhbmd1YWdlPSdodG1sJyBzdHlsZT17dG9tb3Jyb3dOaWdodEVpZ2h0aWVzfT57aHRtbFN0cmluZ308L1N5bnRheEhpZ2hsaWdodGVyPjtcbiAgICB9XG4gICAgY29uc3QgQ1NTQ29kZVZpZXcgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gPFN5bnRheEhpZ2hsaWdodGVyIGxhbmd1YWdlPSdjc3MnIHN0eWxlPXt0b21vcnJvd05pZ2h0RWlnaHRpZXN9Pntjc3NTdHJpbmd9PC9TeW50YXhIaWdobGlnaHRlcj47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWxcbiAgICAgICBpc09wZW49e3RoaXMuc3RhdGUubW9kYWxJc09wZW59XG4gICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgICBjbGFzc05hbWU9XCJkaWFsb2ctY29udGVudFwiXG4gICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cImRpYWxvZy1vdmVybGF5XCJcbiAgICAgPlxuICAgICAgIDxoMiByZWY9e3N1YnRpdGxlID0+IHRoaXMuc3VidGl0bGUgPSBzdWJ0aXRsZX0+U291cmNlIENvZGU8L2gyPlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic291cmNlLXZpZXdcIj5cbiAgICAgICAgIDxkaXY+ZGl2PC9kaXY+XG4gICAgICAgICA8SFRNTENvZGVWaWV3Lz5cbiAgICAgICAgIDxkaXY+Y3NzPC9kaXY+XG4gICAgICAgICA8Q1NTQ29kZVZpZXcvPlxuICAgICAgIDwvZGl2PlxuICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xvc2UtYnRuXCIgb25DbGljaz17dGhpcy5jbG9zZU1vZGFsfT5jbG9zZTwvYnV0dG9uPlxuICAgICA8L01vZGFsPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU291cmNlRGlhbG9nO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAndGhyZWUtZG90cy1zY2FsZSc6IHtcbiAgICBodG1sU3RyaW5nOiAnPGRpdiBjbGFzc05hbWU9XCJ0aHJlZS1kb3RzLXNjYWxlXCI+PGRpdi8+PGRpdi8+PGRpdi8+PC9kaXY+JyxcbiAgICBjc3NTdHJpbmc6XG5gLmNpcmNsZS1kb3RzLXNjYWxlIGRpdiB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5Aa2V5ZnJhbWVzIGNpcmNsZS1kb3RzLXNjYWxlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjI1KTtcbiAgICBvcGFjaXR5OiAwLjI1O1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG4gICAgb3BhY2l0eTogMC43NTtcbiAgfVxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uY2lyY2xlLWRvdHMtc2NhbGUge1xuICB3aWR0aDogMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNpcmNsZS1kb3RzLXNjYWxlIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiAycHg7XG59XG4uY2lyY2xlLWRvdHMtc2NhbGUgZGl2Om50aC1jaGlsZCgxKSB7XG4gIHRvcDogLTMwcHg7XG4gIGxlZnQ6IDA7XG4gIGFuaW1hdGlvbjogY2lyY2xlLWRvdHMtc2NhbGUgMy4ycyAtMi44cyBpbmZpbml0ZSBsaW5lYXI7XG59XG4uY2lyY2xlLWRvdHMtc2NhbGUgZGl2Om50aC1jaGlsZCgyKSB7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGFuaW1hdGlvbjogY2lyY2xlLWRvdHMtc2NhbGUgMy4ycyAtMi40cyBpbmZpbml0ZSBsaW5lYXI7XG59XG4uY2lyY2xlLWRvdHMtc2NhbGUgZGl2Om50aC1jaGlsZCgzKSB7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAzMHB4O1xuICBhbmltYXRpb246IGNpcmNsZS1kb3RzLXNjYWxlIDMuMnMgLTJzIGluZmluaXRlIGxpbmVhcjtcbn1cbi5jaXJjbGUtZG90cy1zY2FsZSBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAyMHB4O1xuICBhbmltYXRpb246IGNpcmNsZS1kb3RzLXNjYWxlIDMuMnMgLTEuNnMgaW5maW5pdGUgbGluZWFyO1xufVxuLmNpcmNsZS1kb3RzLXNjYWxlIGRpdjpudGgtY2hpbGQoNSkge1xuICB0b3A6IDMwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYW5pbWF0aW9uOiBjaXJjbGUtZG90cy1zY2FsZSAzLjJzIC0xLjJzIGluZmluaXRlIGxpbmVhcjtcbn1cbi5jaXJjbGUtZG90cy1zY2FsZSBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgdG9wOiAyMHB4O1xuICBsZWZ0OiAtMjBweDtcbiAgYW5pbWF0aW9uOiBjaXJjbGUtZG90cy1zY2FsZSAzLjJzIC0wLjhzIGluZmluaXRlIGxpbmVhcjtcbn1cbi5jaXJjbGUtZG90cy1zY2FsZSBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IC0zMHB4O1xuICBhbmltYXRpb246IGNpcmNsZS1kb3RzLXNjYWxlIDMuMnMgLTAuNHMgaW5maW5pdGUgbGluZWFyO1xufVxuLmNpcmNsZS1kb3RzLXNjYWxlIGRpdjpudGgtY2hpbGQoOCkge1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAtMjBweDtcbiAgYW5pbWF0aW9uOiBjaXJjbGUtZG90cy1zY2FsZSAzLjJzIDBzIGluZmluaXRlIGxpbmVhcjtcbn1cbmBcbiAgfVxuXG4gIH1cbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=