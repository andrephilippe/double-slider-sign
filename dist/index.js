'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SignUp = require('./SignUp');

var _SignUp2 = _interopRequireDefault(_SignUp);

var _SignIn = require('./SignIn');

var _SignIn2 = _interopRequireDefault(_SignIn);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
    _inherits(Container, _React$Component);

    function Container() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Container);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Container.__proto__ || Object.getPrototypeOf(Container)).call.apply(_ref, [this].concat(args))), _this), _this.signInListener = function () {
            _this.container.classList.add('right-panel-active');
        }, _this.signUpListener = function () {
            _this.container.classList.remove('right-panel-active');
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Container, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                initialRightActive = _props.initialRightActive;

            return _react2.default.createElement(
                'div',
                {
                    id: 'container',
                    className: 'container ' + (initialRightActive ? 'right-panel-active right-panel-active-display' : '')
                },
                children
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.signUpButton.addEventListener('click', this.signInListener);
            this.signInButton.addEventListener('click', this.signUpListener);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.signUpButton.addEventListener('click', this.signInListener);
            this.signInButton.addEventListener('click', this.signUpListener);
        }
    }, {
        key: 'container',
        get: function get() {
            return document.getElementById('container');
        }
    }, {
        key: 'signUpButton',
        get: function get() {
            return document.getElementById('signUp');
        }
    }, {
        key: 'signInButton',
        get: function get() {
            return document.getElementById('signIn');
        }
    }]);

    return Container;
}(_react2.default.Component);

Container.SignUp = _SignUp2.default;
Container.SignIn = _SignIn2.default;
Container.Overlay = _Overlay2.default;
exports.default = Container;