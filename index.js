"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PerformanceChart =
/*#__PURE__*/
function (_Component) {
  _inherits(PerformanceChart, _Component);

  function PerformanceChart(props) {
    var _this;

    _classCallCheck(this, PerformanceChart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PerformanceChart).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(PerformanceChart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          data = _this$props.data,
          size = _this$props.size;
      var ctx = this.canvas.getContext("2d");
      var total = data.reduce(function (sum, _ref) {
        var value = _ref.value;
        return sum + value;
      }, 0); // Start at the top

      var centerX = size / 2;
      var centerY = size / 2;
      var radius = size / 2;
      var currentAngle = .85 * Math.PI;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var result = _step.value;
          var sliceAngle = result.value / total * 1.3 * Math.PI;
          ctx.beginPath(); // center=100,100, radius=100
          // from current angle, clockwise by slice's angle

          ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
          currentAngle += sliceAngle;
          ctx.lineTo(centerX, centerY);
          ctx.fillStyle = result.color;
          ctx.fill();
          ctx.lineTo(centerX, centerY);
          ctx.strokeStyle = "#fff";
          ctx.lineWidth = 5;
          ctx.stroke();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      ctx.font = "bold 12px Verdana";
      ctx.fillStyle = "#fff";
      ctx.fillText(data[0].name, 10, radius);
      ctx.fillText(data[0].value + '%', 20, size / 2 + 20);
      ctx.fillText(data[4].name, size - 50, radius);
      ctx.fillText(data[4].value + '%', size - 50, size / 2 + 20);
      ctx.fillStyle = "#000";
      ctx.fillText(data[2].name, size / 2 - 40, 30);
      ctx.fillText(data[2].value + '%', size / 2 - 25, 50);
      ctx.closePath();
      this.drawNeedle(ctx, size / 2, size / 2, radius - 50, (360 - (180 - 180 / (100 / this.props.current))) * Math.PI / 180);
    }
  }, {
    key: "drawNeedle",
    value: function drawNeedle(ctx, cx, cy, radius, radianAngle) {
      ctx.translate(cx, cy);
      ctx.rotate(radianAngle);
      ctx.beginPath();
      ctx.moveTo(0, -5);
      ctx.lineTo(radius, 0);
      ctx.lineTo(0, 5);
      ctx.fillStyle = '#000';
      ctx.fill();
      ctx.rotate(-radianAngle);
      ctx.translate(-cx, -cy);
      ctx.beginPath();
      ctx.arc(cx, cy, 10, 0, Math.PI * 2);
      ctx.fill();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("canvas", {
        ref: function ref(el) {
          _this2.canvas = el;
        },
        width: this.props.size,
        height: this.props.size
      }, " ");
    }
  }]);

  return PerformanceChart;
}(_react.Component);

exports["default"] = PerformanceChart;
