var React = require('react/addons');
var classNames = require('classnames');
var _ = require('underscore');

var FormField = require('elemental').FormField;
var Spinner = require('elemental').Spinner;
var icons = require("../FormIcons").map;

var COLOR_VARIANTS = ['danger', 'default', 'primary', 'success', 'warning'];

module.exports = React.createClass({
	displayName: 'FormIconField',
	propTypes: {
		className: React.PropTypes.string,
		iconPosition: React.PropTypes.oneOf(['left', 'right']),
		iconKey: React.PropTypes.string.isRequired,
		iconFill: React.PropTypes.oneOf(COLOR_VARIANTS),
		iconColor: React.PropTypes.oneOf(COLOR_VARIANTS),
		iconIsLoading: React.PropTypes.bool
	},
	getDefaultProps() {
		return {
			iconPosition: 'left'
		};
	},
	render() {
		// props
		var props = _.omit(this.props, ['className', 'iconPosition', 'iconKey', 'iconFill', 'iconColor', 'iconIsLoading']);

		
		// classes
		var fieldClass = classNames('IconField', {
				'has-fill-icon': this.props.iconFill,
				'is-loading-icon': this.props.iconIsLoading
			},
			(this.props.iconFill ? ('field-context-' + this.props.iconFill) : null),
			(this.props.iconColor ? ('field-context-' + this.props.iconColor) : null),
			this.props.iconPosition);

		var iconClass = classNames(
			'IconField__icon',
			(this.props.iconFill ? 'IconField__icon-fill--' + this.props.iconFill : null),
			(this.props.iconColor ? 'IconField__icon-color--' + this.props.iconColor : null),
			icons[this.props.iconKey].className,
			this.props.className
		);

		var icon = this.props.iconIsLoading ? (
			<Spinner size="sm" />
		) : (
			<span className={iconClass} />
		);

		return (
			<FormField {...props}>
				<div className={fieldClass}>
					{this.props.children}
					{icon}
				</div>
			</FormField>
		);
	}
});
