'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import cq from 'cq-prolyfill';
import React, { Component } from 'react';

var isFunction = function isFunction(obj) {
	return obj && obj instanceof Function ? true : false;
};

var Container = function Container() {
	var args = arguments.length <= 0 || arguments[0] === undefined ? {
		cqAPI: false,
		componentShouldReevaluate: false
	} : arguments[0];
	var cqAPI = args.cqAPI;
	var componentShouldReevaluate = args.componentShouldReevaluate;

	return function (ComponentToContain) {
		return (function (_Component) {
			_inherits(_class, _Component);

			function _class() {
				_classCallCheck(this, _class);

				_get(Object.getPrototypeOf(_class.prototype), 'constructor', this).apply(this, arguments);
			}

			_createClass(_class, [{
				key: 'reevaluate',
				value: function reevaluate(clearCache, callback) {
					if (clearCache === undefined) clearCache = false;

					cqAPI.reevaluate(clearCache, function () {
						if (isFunction(callback)) {
							return callback();
						} else {
							return false;
						}
					});
				}
			}, {
				key: 'reparse',
				value: function reparse(callback) {
					cqAPI.reparse(function () {
						if (isFunction(callback)) {
							return callback();
						} else {
							return false;
						}
					});
				}
			}, {
				key: 'reprocess',
				value: function reprocess(callback) {
					cqAPI.reprocess(function () {
						if (isFunction(callback)) {
							return callback();
						} else {
							return false;
						}
					});
				}
			}, {
				key: 'componentWillMount',
				value: function componentWillMount() {
					this.reevaluate(false, componentShouldReevaluate);
				}
			}, {
				key: 'render',
				value: function render() {
					return React.createElement(ComponentToContain, this.props);
				}
			}]);

			return _class;
		})(Component);
	};
};

export { Container as default, cq };