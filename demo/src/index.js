import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';

import './test.css';
import ContainerQueryContainer, { initializeContainers } from '../../src';

initializeContainers({ postcss: true });

@ContainerQueryContainer({
	componentShouldReevaluate: () => console.log('reevaluated.'),
})
class DemoComponent extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
	}
	render() {
		return (
			<div className="Demo">
				<h2>{this.props.name}</h2>
			</div>
		);
	}
};

const Demo = React.createClass({
	render() {
		return (
			<div>
				<h1>Container Query Container Demo</h1>
				<div style={{'max-width': '10rem'}}>
					<DemoComponent name="Testing" />
				</div>
				<div style={{'max-width': '15rem'}}>
					<DemoComponent name="Testing" />
				</div>
				<div style={{'max-width': '20rem'}}>
					<DemoComponent name="Testing" />
				</div>
			</div>
		);
	}
});

render(<Demo/>, document.querySelector('#demo'));
