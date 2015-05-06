var React = require('react/addons');
var blacklist = require('blacklist');
var classNames = require('classnames');

module.exports = React.createClass({
	displayName: 'FormFile',
	propTypes: {
		buttonClassChange: React.PropTypes.string,
		buttonClassInitial: React.PropTypes.string,
		buttonLabelChange: React.PropTypes.string,
		buttonLabelInitial: React.PropTypes.string,
		disabled: React.PropTypes.bool,
		file: React.PropTypes.object, // https://developer.mozilla.org/en/docs/Using_files_from_web_applications
		onChange: React.PropTypes.func
	},
	getDefaultProps() {
		return {
			buttonLabelInitial: 'Upload File',
			buttonLabelChange:  'Change File',
			buttonClassInitial: 'Button Button--default',
			buttonClassChange:  'Button Button--default'
		};
	},
	getInitialState() {
		return {
			file: {},
			loading: false
		};
	},

	triggerFileBrowser() {
		this.refs.fileInput.getDOMNode().click();
	},
	handleChange(e) {
		var self = this;
		var reader = new FileReader();
		var file = e.target.files[0];
		
		reader.readAsDataURL(file);

		reader.onloadstart = function() {
			self.setState({
				loading: true
			});
		};
		reader.onloadend = function(upload) {
			self.setState({
				loading: false,
				file: file,
				data_uri: upload.target.result
			});
		};
	},
	cancelUpload() {
		this.setState({
			file: false
		});
	},

	render() {
		// helpers
		function isEmptyObject(obj) {
			return Object.keys(obj).length === 0;
		};
		var file = this.state.file;


		// props

		var props = blacklist(this.props, 'buttonClassChange', 'buttonClassInitial', 'buttonLabelChange', 'buttonLabelInitial', 'disabled', 'file', 'onChange');


		// elements

		var component = <button type="button" onClick={this.triggerFileBrowser} className={this.props.buttonClassInitial} disabled={this.props.disabled}>{this.props.buttonLabelInitial}</button>;
		
		if (!isEmptyObject(file)) {
			component = <div className="file-upload">
				<div className="file-upload-image">
					<img className="file-upload-image-src" src={this.state.data_uri} />
				</div>
				<div className="file-upload-content">
					<div className="file-upload-message">
						{file.name} ({Math.round(file.size / 1024)}Kb)
					</div>
					<div className="file-upload-buttons">
						<button type="button" onClick={this.triggerFileBrowser} className={this.props.buttonClassChange}>{this.props.buttonLabelChange}</button>
						<button type="button" onClick={this.cancelUpload} className="Button Button--link-cancel">Cancel</button>
					</div>
				</div>
			</div>
		};

		return (
			<div>
				{component}
				<input style={{display: 'none' }} type="file" ref="fileInput" onChange={this.handleChange} {...props} />
			</div>
		);
	}
});
