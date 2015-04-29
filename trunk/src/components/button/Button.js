var React = require('react/addons');
var classNames = require('classnames');
var blacklist = require('blacklist');

module.exports = React.createClass({
	displayName: 'ElementalButton',
	propTypes: {
		onClick: React.PropTypes.func,
		type: React.PropTypes.string,
		size: React.PropTypes.string,
		href: React.PropTypes.string,
		customClass: React.PropTypes.string
	},
	getDefaultProps() {
		return {
			type: 'default'
		};
	},
	render() {
		// classes
		var componentClass = classNames(
			'Button',
			('Button-' + this.props.type),
			(this.props.size ? 'Button-' + this.props.size : null),
			this.props.customClass
		);

		// props
		var props = blacklist(this.props, ['type', 'size', 'customClass']);

		var tag = 'a';

		if (!props.href) {
			tag = 'button';
			props.type = 'button';
		}

		return React.createElement(
			tag,
			Object.assign({ className: componentClass }, props),
			this.props.children
		);
	}
});