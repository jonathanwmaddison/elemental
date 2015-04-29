var React = require('react/addons');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'Spinner',
	propTypes: {
		className: React.PropTypes.string,
		size: React.PropTypes.oneOf(['sm', 'md', 'lg']),
		type: React.PropTypes.oneOf(['default', 'primary', 'inverted'])
	},
	getDefaultProps() {
		return {
			size: 'md',
			type: 'default'
		};
	},
	render() {
		var componentClass = classNames(
			'spinner',
			'spinner--' + this.props.type,
			'spinner--' + this.props.size,
			this.props.className
		);

		return (
			<div className={componentClass}>
				<i className="spinner__dot spinner__dot--first" />
				<i className="spinner__dot spinner__dot--second" />
				<i className="spinner__dot spinner__dot--third" />
			</div>
		);
	}
});
