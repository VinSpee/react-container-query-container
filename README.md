# React ContainerQueryContainer

[![npm package][npm-badge]][npm]


## Usage

1. `npm i -D react-container-query-container`
2. initialize the [container queries
	 prolyfill](https://github.com/ausi/cq-prolyfill) *once* in the top of your app. (set `postcss: true` if you're using the [postcss-plugin](https://github.com/ausi/cq-prolyfill/blob/master/docs/postcss.md)):
	```
	import ContainerQueryContainer, { cq } from 'react-container-query-container';
	const cqAPI = cq({ postcss: true });
	```
3. decorate your component with the higher-order component, passing an optional
	 callback to execute when the component is reevaluated:
	```
	@ContainerQueryContainer({
		cqAPI,
		componentShouldReevaluate: () => console.log('reevaluated.'),
	})
	class DemoComponent extends Component { …
	```

Welcome to the future!




Collaborating on this React component:

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with npm)
* [nwb](https://github.com/insin/nwb/) - `npm install -g nwb`

## Installation

* `git clone https://github.com/VinSpee/react-container-query-container.git` this repository
* change into the new directory
* `npm install`

## Running / Development

* `nwb serve` will run the component's demo app
* Visit the demo at [http://localhost:3000](http://localhost:3000)

### Running Tests

* `nwb test` will run the tests once
* `nwb test --server` will run the tests on every change

### Building

* `nwb build`

[npm-badge]: https://img.shields.io/npm/v/react-container-query-container.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-container-query-containe


