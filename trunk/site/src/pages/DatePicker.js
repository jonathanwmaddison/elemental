var React = require('react/addons');
var moment = require('moment');

var Button = require('elemental').Button;
var DatePicker = require('elemental').DatePicker;
var EmailInputGroup = require('elemental').EmailInputGroup;
var PasswordInputGroup = require('elemental').PasswordInputGroup;


var DEFAULT_RANGES = [
	{ value: moment(),                        label: 'Today' },
	{ value: moment().subtract(1, 'days'),    label: 'Yesterday' }
];

module.exports = React.createClass({
	displayName: 'VIEW_DatePicker',
	getInitialState() {
		return {
			datePickerIsOpen: false,
			multiPickerIsOpen: false,
			rangePickerIsOpen: false
		};
	},
	toggleDatePicker() {
		this.setState({ datePickerIsOpen: !this.state.datePickerIsOpen });
	},
	toggleMultiPicker() {
		this.setState({ multiPickerIsOpen: !this.state.multiPickerIsOpen });
	},
	toggleRangePicker() {
		this.setState({ rangePickerIsOpen: !this.state.rangePickerIsOpen });
	},
	render() {
		return (
			<div className="demo-container container">
				<h1>Date Picker</h1>
				
				<h2 className="u-margin-top-lg">Day Picker</h2>
				<p>Pick a single date</p>
				<Button onClick={this.toggleDatePicker} type="default">Launch Date Picker</Button>
				
				<h2 className="u-margin-top-lg">Multi Picker</h2>
				<p>Pick a start and end date</p>
				<Button onClick={this.toggleMultiPicker} type="default">Launch Multi Picker</Button>
				
				<h2 className="u-margin-top-lg">Multi Picker with Ranges</h2>
				<p>Pick a start and end date, with the option to use predefined ranges.</p>
				<Button onClick={this.toggleRangePicker} type="default">Launch Range Picker</Button>
				
				<DatePicker isOpen={this.state.datePickerIsOpen}  onChange={this.toggleDatePicker} />
				<DatePicker isOpen={this.state.multiPickerIsOpen} onChange={this.toggleMultiPicker} isMulti />
				<DatePicker isOpen={this.state.rangePickerIsOpen} onChange={this.toggleRangePicker} isMulti showPredefinedRanges />
			</div>
		);
	}
});
