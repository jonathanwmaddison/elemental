var React = require('react');

var Button = require('elemental').Button;
var EmailInputGroup = require('elemental').EmailInputGroup;
var PasswordInputGroup = require('elemental').PasswordInputGroup;
var RadioGroup = require('elemental').RadioGroup;

var FormDragAndDrop = require('elemental').FormDragAndDrop;
var FormField = require('elemental').FormField;
var FormRow = require('elemental').FormRow;
var FormFile = require('elemental').FormFile;
var FormIcon = require('elemental').FormIcon;
var FormIconField = require('elemental').FormIconField;
var FormInput = require('elemental').FormInput;
var FormLabel = require('elemental').FormLabel;
var FormSelect = require('elemental').FormSelect;

var icons = require("../../../src/FormIcons").list;

var controlOptions = [
	{ label: 'Caramel',    value: 'caramel' },
	{ label: 'Chocolate',  value: 'chocolate' },
	{ label: 'Strawberry', value: 'strawberry' },
	{ label: 'Vanilla',    value: 'vanilla' }
];
var COUNTRIES = require('../data/countries');
var COLOR_VARIANTS = [
	{ label: 'Default', value: 'default' },
	{ label: 'Primary', value: 'primary' },
	{ label: 'Success', value: 'success' },
	{ label: 'Warning', value: 'warning' },
	{ label: 'Danger',  value: 'danger' }
];

var Forms = React.createClass({
	displayName: 'VIEW_Forms',

	getInitialState () {
		return {
			'inputEmail': '',
			'inputPassword': ''
		};
	},

	onDrop: function (files) {
		console.log('Received files: ', files);
		this.setState({
			files: files
		});
	},
	handleSearch: function (e) {
		var self = this;
		self.setState({ searching: true });

		setTimeout(function() {
			self.setState({ searching: false });
		}, 1000);
	},

	render () {
		var self = this;

		// handle form input and validation
		function updateSelect(option) {
			self.setState({inputSelect: option});
		}
		function updateRadios(option) {
			self.setState({radioGroup: option});
		}
		function updateInlineRadios(option) {
			self.setState({inlineRadioGroup: option});
		}
		function updateEmail(e) {
			self.setState({inputEmail: e.target.value});
		}
		function updatePassword(e) {
			self.setState({inputPassword: e.target.value});
		}

		// elements

		var countryOptions = COUNTRIES.map(function(country, i) {
			return { label: country.name, value: country.code }
		});

		var checkboxes = [1,2,3].map(function(item) {
			return (
				<div key={'checkbox-' + item} className="checkbox">
					<label className="checkbox-label">
						<input type="checkbox" className="checkbox-input" /> Check me out
					</label>
				</div>
			);
		});

		var radios = [1,2,3].map(function(item) {
			return (
				<div key={'radio-' + item} className="radio">
					<label className="radio-label">
						<input type="radio" name="supportedControlsRadios" className="radio-input" /> Pick me
					</label>
				</div>
			);
		});

		var options = [1,2,3,4,5].map(function(item) {
			return <option key={'option-' + item} value={item}>Option {item}</option>
		});


		// Icon Loops

		var iconFields = icons.map(function(icon, i) {
			return (
				<FormIconField key={icon.value} width="one-sixth" iconPosition="left" iconKey={icon.value} iconColor="primary">
					<FormInput placeholder={icon.label} name={'icon-form-' + icon.value} />
				</FormIconField>
			);
		});

		var iconContextVariantsColor = COLOR_VARIANTS.map(function(color, i) {
			return (
				<FormIconField key={color.value} width="one-fifth" iconPosition="left" iconKey="star" iconColor={color.value}>
					<FormInput placeholder={color.label} name={'icon-form-context-variants-color' + color.value} />
				</FormIconField>
			);
		});

		var iconContextVariantsFill = COLOR_VARIANTS.map(function(color, i) {
			return (
				<FormIconField key={color.value} width="one-fifth" iconPosition="left" iconKey="star" iconFill={color.value}>
					<FormInput placeholder={color.label} name={'icon-form-context-variants-color' + color.value} />
				</FormIconField>
			);
		});

		return (
			<div className="demo-container container">
				<h1>Forms</h1>

				<h2 id="section-basic" className="u-padding-top-lg">Basic Example</h2>
				<form className="u-margin-bottom-lg">
					<FormField label="Email address" htmlFor="basic-form-input-email">
						<FormInput type="email" placeholder="Enter email" name="basic-form-input-email" />
					</FormField>
					<FormField label="Password" htmlFor="basic-form-input-password">
						<FormInput type="password" placeholder="Password" name="basic-form-input-password" />
					</FormField>
					<div className="form-field">
						<label className="checkbox-label">
							<input type="checkbox" className="checkbox-input" /> Check me out
						</label>
					</div>
					<Button type="default">Submit</Button>
				</form>


				<h2 id="section-horizontal" className="u-padding-top-lg">Horizontal Form</h2>
				<form className="horizontal-form u-margin-bottom-lg">
					<FormField label="Email address" htmlFor="horizontal-form-input-email">
						<FormInput type="email" placeholder="Enter email" name="horizontal-form-input-email" />
					</FormField>
					<FormField label="Password" htmlFor="horizontal-form-input-password">
						<FormInput type="password" placeholder="Password" name="horizontal-form-input-password" />
					</FormField>
					<FormField>
						<Button type="default" customClass="horizontal-form-submit-button">Submit</Button>
					</FormField>
				</form>


				<h2 id="section-inline" className="u-padding-top-lg">Inline Form</h2>
				<form className="inline-form u-margin-bottom-lg">
					<FormField label="Email address" htmlFor="inline-form-input-email">
						<FormInput type="email" placeholder="Enter email" name="inline-form-input-email" />
					</FormField>
					<FormField label="Password" htmlFor="inline-form-input-password">
						<FormInput type="password" placeholder="Password" name="inline-form-input-password" />
					</FormField>
					<div className="checkbox">
						<label className="checkbox-label">
							<input type="checkbox" className="checkbox-input" /> Check it
						</label>
					</div>
					<div className="form-field">
						<Button type="default">Submit</Button>
					</div>
				</form>


				<h2 id="section-groups" className="u-padding-top-lg">Input Groups</h2>
				<form className="u-margin-bottom-lg">
					<div className="input-group">
						<input type="text" className="form-input input-group-field" placeholder="Input group field" />
						<span className="input-group-button">
							<Button type="default">Button</Button>
						</span>
					</div>
					<div className="input-group">
						<input type="text" className="form-input input-group-field" placeholder="Input group field" />
						<span className="input-group-button">
							<Button type="primary">Button</Button>
						</span>
					</div>
				</form>

				
				<h2 id="section-controls" className="u-padding-top-lg">Supported Controls</h2>
				<form className="u-margin-bottom-lg">
					<FormField label="Input" htmlFor="supported-controls-input">
						<FormInput placeholder="Input" name="supported-controls-input" />
					</FormField>
					<FormField label="Large Input" htmlFor="supported-controls-input-lg">
						<FormInput placeholder="Large" name="supported-controls-input-lg" size="lg" />
					</FormField>
					<FormField label="Small Input" htmlFor="supported-controls-input-sm">
						<FormInput placeholder="Small" name="supported-controls-input-sm" size="sm" />
					</FormField>
					<FormField label="Disabled Input" htmlFor="supported-controls-input-disabled">
						<FormInput placeholder="Disabled" name="supported-controls-input-disabled" disabled />
					</FormField>
					<FormField label="Textarea" htmlFor="supported-controls-textarea">
						<FormInput placeholder="Textarea" name="supported-controls-textarea" multiline />
					</FormField>
					<FormField label="Select" htmlFor="supported-controls-select">
						<FormSelect options={controlOptions} firstOption="Select" />
					</FormField>
					<FormSelect label="Disabled Select" options={controlOptions} htmlFor="supported-conrols-select-disabled" firstOption="Disabled Select" disabled />
					<div className="form-field">
						<div className="form-label">Checkboxes</div>
						{checkboxes}
					</div>
					<div className="form-field">
						<div className="form-label">Radios</div>
						{radios}
					</div>
					<div className="form-field">
						<div className="form-label">Inline Checkboxes</div>
						<div className="inline-controls">
							{checkboxes}
						</div>
					</div>
					<div className="form-field">
						<div className="form-label">Inline Radios</div>
						<div className="inline-controls">
							{radios}
						</div>
					</div>
					<div className="form-field">
						<label className="form-label">Help Block</label>
						<div className="form-help">A block of help text that may extend beyond one line. Use &lt;span&gt; or &lt;div&gt; to control display.</div>
					</div>
				</form>
				
				<h2 id="section-validation" className="u-padding-top-lg">Validation</h2>
				<form className="u-margin-bottom-xl">
					<RadioGroup label="Radios" value={this.state.inlineRadioGroup} onChange={updateInlineRadios} options={controlOptions} name="inlineRadioGroup" required inline />
					<FormSelect   label="Select"   value={this.state.inputSelect}   onChange={updateSelect} options={controlOptions} htmlFor="inputSelect" required prependEmptyOption />
					<EmailInputGroup    label="Email"    value={this.state.inputEmail}    onChange={updateEmail}    required />
					<PasswordInputGroup label="Password" value={this.state.inputPassword} onChange={updatePassword} required />
				</form>

				<h2 id="section-complex" className="u-padding-top-lg">Complex Forms</h2>
				<form className="u-margin-bottom-lg">
					<FormRow>
						<FormField width="one-half" label="Credit Card Number" htmlFor="credit-card-number">
							<FormInput pattern="[0-9]*" placeholder="Card Number" name="credit-card-number" />
						</FormField>
						<FormField width="one-quarter" label="Expiration" htmlFor="credit-card-expiration">
							<FormInput placeholder="MM/YYYY" name="credit-card-expiration" />
						</FormField>
						<FormField width="one-quarter" label="Security Code (CCV)" htmlFor="credit-card-security">
							<FormInput pattern="[0-9]*" placeholder="123" name="credit-card-security" />
						</FormField>
					</FormRow>
					<FormRow>
						<FormField width="one-half" label="First Name" htmlFor="first-name">
							<FormInput placeholder="First Name" name="first-name" />
						</FormField>
						<FormField width="one-half" label="Last Name" htmlFor="last-name">
							<FormInput placeholder="Last Name" name="last-name" />
						</FormField>
					</FormRow>
					<FormField label="Billing Address" htmlFor="address-street1">
						<FormInput placeholder="Address Line 1" name="address-street1" />
					</FormField>
					<FormField>
						<FormInput placeholder="Address Line 2" name="address-street2" />
					</FormField>
					<FormRow>
						<FormField width="two-thirds">
							<FormInput placeholder="City" name="city" />
						</FormField>
						<FormField width="one-third">
							<FormInput placeholder="State" name="state" />
						</FormField>
						<FormField width="one-third">
							<FormInput width="one-third" placeholder="Post Code" name="city" />
						</FormField>
						<FormField width="two-thirds">
							<FormSelect options={countryOptions} firstOption="Country" />
						</FormField>
					</FormRow>
				</form>
				<h2 id="section-icon" className="u-padding-top-lg">Icons</h2>
				<form className="u-margin-bottom-lg">
					<FormLabel>Alignment</FormLabel>
					<FormRow>
						<FormIconField width="one-half" iconPosition="left" iconKey="star">
							<FormInput placeholder="Left Aligned" name="icon-alignment-left" />
						</FormIconField>
						<FormIconField width="one-half" iconPosition="right" iconKey="star">
							<FormInput placeholder="Right Aligned" name="icon-alignment-right" />
						</FormIconField>
					</FormRow>
					<FormLabel>Context Variants: Color</FormLabel>
					<FormRow>
						{iconContextVariantsColor}
					</FormRow>
					<FormLabel>Context Variants: Fill</FormLabel>
					<FormRow>
						{iconContextVariantsFill}
					</FormRow>
					<FormLabel>Icon Types</FormLabel>
					<FormRow>
						{iconFields}
					</FormRow>
					<FormIconField label="Loading Indicator" iconPosition="right" iconKey="search" iconIsLoading={this.state.searching}>
						<FormInput onChange={this.handleSearch} type="search" placeholder="Search..." name="icon-form-search" />
					</FormIconField>
				</form>

				<h2 id="section-upload" className="u-padding-top-lg">File Upload</h2>
				<form className="horizontal-form u-margin-bottom-lg">
					<div className="form-field">
						<FormLabel verticalAlign="top">Image</FormLabel>
						<FormFile buttonLabelInitial="Upload Image" buttonLabelChange="Change Image" accept="image/jpg, image/gif, image/png" />
					</div>
					<div className="form-field">
						<FormLabel verticalAlign="top">Images</FormLabel>
						<FormDragAndDrop files={this.state.files} onDrop={this.onDrop} />
					</div>
				</form>
			</div>
		);
	}
});

module.exports = Forms;
