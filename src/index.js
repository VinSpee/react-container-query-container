import cq from 'cq-prolyfill';
import React, { Component } from 'react';

const isFunction = (obj) => obj && obj instanceof Function ? true : false;

const Container = (args = {
	cqAPI: false,
	componentShouldReevaluate: false,
}) => {
	const {
		cqAPI,
		componentShouldReevaluate,
	} = args;

	return (ComponentToContain) => {
		return class extends Component {
			reevaluate(clearCache = false, callback) {
				cqAPI.reevaluate(clearCache, () => {
					if (isFunction(callback)) {
						return callback();
					} else {
						return false;
					}
				});
			}

			reparse(callback) {
				cqAPI.reparse(() => {
					if (isFunction(callback)) {
						return callback();
					} else {
						return false;
					}
				});
			}

			reprocess(callback) {
				cqAPI.reprocess(() => {
					if (isFunction(callback)) {
						return callback();
					} else {
						return false;
					}
				});
			}

			componentWillMount() {
				this.reevaluate(false, componentShouldReevaluate);
			}

			render() {
				return <ComponentToContain {...this.props} />;
			}
		};
	};
};

export {
	Container as default,
	cq,
};
