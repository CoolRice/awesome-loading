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

var _perfectionist = __webpack_require__(/*! perfectionist */ "./node_modules/perfectionist/dist/index.js");

var _perfectionist2 = _interopRequireDefault(_perfectionist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactModal2.default.setAppElement('#app');

class SourceDialog extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.closeDialog();
  }

  render() {
    const { selectedClassName, innerDivNumber } = this.props;
    const htmlString = `<div class="${selectedClassName}">${'<div></div>'.repeat(innerDivNumber)}</div>`;
    console.log(htmlString);
    const cssString = _perfectionist2.default.process(this.props.classContent).css;

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
        isOpen: true,
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
          'HTML'
        ),
        _react2.default.createElement(HTMLCodeView, null),
        _react2.default.createElement(
          'div',
          null,
          'CSS'
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

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvU291cmNlRGlhbG9nLmpzIiwid2VicGFjazovLy9mcyAoaWdub3JlZCkiXSwibmFtZXMiOlsic2V0QXBwRWxlbWVudCIsIlNvdXJjZURpYWxvZyIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJjbG9zZU1vZGFsIiwiYmluZCIsImNsb3NlRGlhbG9nIiwicmVuZGVyIiwic2VsZWN0ZWRDbGFzc05hbWUiLCJpbm5lckRpdk51bWJlciIsImh0bWxTdHJpbmciLCJyZXBlYXQiLCJjb25zb2xlIiwibG9nIiwiY3NzU3RyaW5nIiwicHJvY2VzcyIsImNsYXNzQ29udGVudCIsImNzcyIsIkhUTUxDb2RlVmlldyIsIkNTU0NvZGVWaWV3Iiwic3VidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEscUJBQU1BLGFBQU4sQ0FBb0IsTUFBcEI7O0FBRUEsTUFBTUMsWUFBTixTQUEyQixnQkFBTUMsU0FBakMsQ0FBMkM7QUFDekNDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBbEI7QUFDRDs7QUFFREQsZUFBYTtBQUNYLFNBQUtELEtBQUwsQ0FBV0csV0FBWDtBQUNEOztBQUVEQyxXQUFTO0FBQ1AsVUFBTSxFQUFFQyxpQkFBRixFQUFxQkMsY0FBckIsS0FBd0MsS0FBS04sS0FBbkQ7QUFDQSxVQUFNTyxhQUFjLGVBQWNGLGlCQUFrQixLQUFJLGNBQWNHLE1BQWQsQ0FBcUJGLGNBQXJCLENBQXFDLFFBQTdGO0FBQ0FHLFlBQVFDLEdBQVIsQ0FBWUgsVUFBWjtBQUNBLFVBQU1JLFlBQVksd0JBQWNDLE9BQWQsQ0FBc0IsS0FBS1osS0FBTCxDQUFXYSxZQUFqQyxFQUErQ0MsR0FBakU7O0FBRUEsVUFBTUMsZUFBZSxNQUFNO0FBQ3pCLGFBQU87QUFBQTtBQUFBLFVBQW1CLFVBQVMsTUFBNUIsRUFBbUMsa0NBQW5DO0FBQWtFUjtBQUFsRSxPQUFQO0FBQ0QsS0FGRDtBQUdBLFVBQU1TLGNBQWMsTUFBTTtBQUN4QixhQUFPO0FBQUE7QUFBQSxVQUFtQixVQUFTLEtBQTVCLEVBQWtDLGtDQUFsQztBQUFpRUw7QUFBakUsT0FBUDtBQUNELEtBRkQ7QUFHQSxXQUNFO0FBQUE7QUFBQTtBQUNDLG9CQUREO0FBRUMsd0JBQWdCLEtBQUtWLFVBRnRCO0FBR0MsbUJBQVUsZ0JBSFg7QUFJQywwQkFBaUI7QUFKbEI7QUFNQztBQUFBO0FBQUEsVUFBSSxLQUFLZ0IsWUFBWSxLQUFLQSxRQUFMLEdBQWdCQSxRQUFyQztBQUFBO0FBQUEsT0FORDtBQU9DO0FBQUE7QUFBQSxVQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLHNDQUFDLFlBQUQsT0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FIRjtBQUlFLHNDQUFDLFdBQUQ7QUFKRixPQVBEO0FBYUM7QUFBQTtBQUFBLFVBQVEsV0FBVSxXQUFsQixFQUE4QixTQUFTLEtBQUtoQixVQUE1QztBQUFBO0FBQUE7QUFiRCxLQURGO0FBaUJEO0FBdkN3Qzs7a0JBMEM1QkosWTs7Ozs7Ozs7Ozs7QUNsRGYsZSIsImZpbGUiOiJzb3VyY2VEaWFsb2cuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQgU3ludGF4SGlnaGxpZ2h0ZXIgZnJvbSAncmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyJztcbmltcG9ydCB7IGRvY2NvLCB0b21vcnJvd05pZ2h0RWlnaHRpZXMgfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvc3R5bGVzL2hsanMnO1xuaW1wb3J0IHBlcmZlY3Rpb25pc3QgZnJvbSAncGVyZmVjdGlvbmlzdCc7XG5cbk1vZGFsLnNldEFwcEVsZW1lbnQoJyNhcHAnKVxuXG5jbGFzcyBTb3VyY2VEaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmNsb3NlTW9kYWwgPSB0aGlzLmNsb3NlTW9kYWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoKSB7XG4gICAgdGhpcy5wcm9wcy5jbG9zZURpYWxvZygpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRDbGFzc05hbWUsIGlubmVyRGl2TnVtYmVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGh0bWxTdHJpbmcgPSBgPGRpdiBjbGFzcz1cIiR7c2VsZWN0ZWRDbGFzc05hbWV9XCI+JHsnPGRpdj48L2Rpdj4nLnJlcGVhdChpbm5lckRpdk51bWJlcil9PC9kaXY+YDtcbiAgICBjb25zb2xlLmxvZyhodG1sU3RyaW5nKVxuICAgIGNvbnN0IGNzc1N0cmluZyA9IHBlcmZlY3Rpb25pc3QucHJvY2Vzcyh0aGlzLnByb3BzLmNsYXNzQ29udGVudCkuY3NzO1xuXG4gICAgY29uc3QgSFRNTENvZGVWaWV3ID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT0naHRtbCcgc3R5bGU9e3RvbW9ycm93TmlnaHRFaWdodGllc30+e2h0bWxTdHJpbmd9PC9TeW50YXhIaWdobGlnaHRlcj47XG4gICAgfVxuICAgIGNvbnN0IENTU0NvZGVWaWV3ID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT0nY3NzJyBzdHlsZT17dG9tb3Jyb3dOaWdodEVpZ2h0aWVzfT57Y3NzU3RyaW5nfTwvU3ludGF4SGlnaGxpZ2h0ZXI+O1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgaXNPcGVuXG4gICAgICAgb25SZXF1ZXN0Q2xvc2U9e3RoaXMuY2xvc2VNb2RhbH1cbiAgICAgICBjbGFzc05hbWU9XCJkaWFsb2ctY29udGVudFwiXG4gICAgICAgb3ZlcmxheUNsYXNzTmFtZT1cImRpYWxvZy1vdmVybGF5XCJcbiAgICAgPlxuICAgICAgIDxoMiByZWY9e3N1YnRpdGxlID0+IHRoaXMuc3VidGl0bGUgPSBzdWJ0aXRsZX0+U291cmNlIENvZGU8L2gyPlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic291cmNlLXZpZXdcIj5cbiAgICAgICAgIDxkaXY+SFRNTDwvZGl2PlxuICAgICAgICAgPEhUTUxDb2RlVmlldy8+XG4gICAgICAgICA8ZGl2PkNTUzwvZGl2PlxuICAgICAgICAgPENTU0NvZGVWaWV3Lz5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNsb3NlLWJ0blwiIG9uQ2xpY2s9e3RoaXMuY2xvc2VNb2RhbH0+Y2xvc2U8L2J1dHRvbj5cbiAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvdXJjZURpYWxvZztcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=