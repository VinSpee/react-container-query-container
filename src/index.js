import React, { Component } from 'react';

const isFunction = (obj) => obj && obj instanceof Function;

const Container = (args = {
	componentShouldReevaluate: false,
}) => {
	const {
		cqApi,
		componentShouldReevaluate,
	} = args;
	return (ComponentToContain) => {
		return class extends Component {
			reevaluate(clearCache = false, callback) {
				cqApi.reevaluate(clearCache, () => {
					if (isFunction(callback)) {
						return callback();
					} else {
						return false;
					}
				});
			}

			reparse(callback) {
				cqApi.reparse(() => {
					if (isFunction(callback)) {
						return callback();
					} else {
						return false;
					}
				});
			}

			reprocess(callback) {
				cqApi.reprocess(() => {
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
};
