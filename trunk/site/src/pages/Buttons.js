var React = require('react');
var Dropdown = require('elemental').Dropdown;
var Button = require('elemental').Button;

var DROPDOWN_OPTIONS = [
	{ type: 'item', anchor: 'javascript:;', label: 'Action' },
	{ type: 'item', anchor: 'javascript:;', label: 'Another action' },
	{ type: 'item', anchor: 'javascript:;', label: 'Something else here' },
	{ type: 'divider' },
	{ type: 'header', label: 'Dropdown header' },
	{ type: 'item', anchor: 'javascript:;', label: 'Separated link' },
];

var Buttons = React.createClass({
	displayName: 'VIEW_Buttons',
	getInitialState() {
		return {
			dropdownOpen: false
		};
	},
	toggleDropdown() {
		this.setState({ dropdownOpen: !this.state.dropdownOpen });
	},

	render () {
		return (
			<div className="container">
				<h1>Buttons</h1>
				<h2 className="u-margin-top-lg">Standard</h2>
				<Button type="default" className="btn btn-default">Default</Button>
				<hr />
				<Button type="primary" className="btn btn-primary">Primary</Button>
				<hr />
				<Button type="default" className="btn btn-default" disabled>Disabled</Button>
				<hr />
				<Button type="link" className="btn btn-link">Link</Button>

				<h2 className="u-margin-top-lg">Large</h2>
				<Button type="default" size="lg">Default</Button>
				<hr />
				<Button type="primary" size="lg">Primary</Button>
				<hr />
				<Button type="default" size="lg" disabled>Disabled</Button>
				<hr />
				<Button type="link" size="lg">Link</Button>

				<h2 className="u-margin-top-lg">Small</h2>
				<Button type="default" size="sm">Default</Button>
				<hr />
				<Button type="primary" size="sm">Primary</Button>
				<hr />
				<Button type="default" size="sm" disabled>Disabled</Button>
				<hr />
				<Button type="link" size="sm">Link</Button>

				<h2 className="u-margin-top-lg">Extra Small</h2>
				<Button type="default" size="xs">Default</Button>
				<hr />
				<Button type="primary" size="xs">Primary</Button>
				<hr />
				<Button type="default" size="xs" disabled>Disabled</Button>
				<hr />
				<Button type="link" size="xs">Link</Button>

				<h2 className="u-margin-top-lg">Colours</h2>
				<Button type="danger">Danger</Button>
				<hr />
				<Button type="default-danger">Danger</Button>
				<hr />
				<Button type="warning">Warning</Button>
				<hr />
				<Button type="default-warning">Warning</Button>
				<hr />
				<Button type="success">Success</Button>
				<hr />
				<Button type="default-success">Success</Button>

				<h2 className="u-margin-top-lg">Button Groups</h2>
				<div className="btn-group">
					<Button type="default">Left</Button>
					<Button type="default">Middle</Button>
					<Button type="default">Right</Button>
				</div>

				<h2 className="u-margin-top-lg">Dropdown</h2>
				<Dropdown isOpen={this.state.dropdownOpen} onChange={this.toggleDropdown} items={DROPDOWN_OPTIONS} buttonLabel="Action" buttonClass="btn btn-default" buttonDisclosureArrow />
			</div>
		);
	}
});

module.exports = Buttons;
