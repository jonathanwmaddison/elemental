var React = require('react/addons');
var classNames = require('classnames');
var moment = require('moment');

var Alert = require('elemental').Alert;

var USERS = require('../data/users');
var TABLE_HEADERS = ['', 'User', 'Age', 'Gender'];

var CSSExamples = React.createClass({

	getInitialState() {
		return {
			allChecked: false,
			selectedRows: {}
		};
	},

	toggleAllRows() {
		var selectedRows = {};

		if (!this.state.allChecked) {
			for (var i = 0; i < USERS.length; i++) {
				selectedRows[i] = true;
			}
		}

		this.setState({
			selectedRows: selectedRows,
			allChecked: !this.state.allChecked
		});
	},

	handleChange(e) {
		var selectedRows = this.state.selectedRows;
		if (e.target.value in selectedRows) {
			delete selectedRows[e.target.value];
		} else {
			selectedRows[e.target.value] = true;
		}
		this.setState({
			selectedRows: selectedRows
		});
	},
	render() {
		var self = this;

		var tableHeaderCols = TABLE_HEADERS.map(function(thead, i) {
			var row = !i ? (
				<th key={'header-' + i}>
					<label title="Toggle all customers" className="table-checkbox-label">
						<input type="checkbox" className="table-checkbox" onChange={self.toggleAllRows} />
					</label>
				</th>
			) : (
				<th key={'header-' + i}>{thead}</th>
			);
			return row;
		});

		var tableRows = USERS.map(function(user, i) {
			var dob = moment(user.dob, 'MMM DD, YYYY');
			var userAge = moment().diff(dob, 'years');
			var userAge = 1;
			var checked = i in self.state.selectedRows;
			var rowClass = classNames({
				'row-selected': checked
			});

			return (
				<tr key={'row-' + i} className={rowClass}>
					<td>
						<label className="table-checkbox-label">
							<input id={'checkbox-' + i} value={i} onChange={self.handleChange} checked={checked} type="checkbox" name="customers" className="table-checkbox" />
						</label>
					</td>
					<td>
						<a href="javascript:;" className="customer-item">{user.name}</a>
					</td>
					<td>{userAge}</td>
					<td>{user.gender.substr(0,1).toUpperCase()}</td>
				</tr>
			);
		});

		var alerts = ['info', 'success', 'warning', 'danger'].map(function(alertType, i) {
			return <Alert key={alertType} type={alertType}>This is a {alertType} alert</Alert>;
		});
		return (
			<div className="demo-container container">
				<h1>CSS</h1>
				
				<h2>Typography</h2>
				<div className="demo-box">
					<h1>h.1 Elemental heading</h1>
					<h2>h.2 Elemental heading</h2>
					<h3>h.3 Elemental heading</h3>
					<h4>h.4 Elemental heading</h4>
					<h5>h.5 Elemental heading</h5>
					<h6>h.6 Elemental heading</h6>
					<hr />
					<div className="lead">This is a page lead, it serves an introduction the proceeding content.</div>
				</div>

				<h2>Alerts</h2>
				{alerts}

				<h2>Tables</h2>
				<table className="table">
					<colgroup>
						<col width="50" />
						<col width="" />
						<col width="10%" />
						<col width="10%" />
					</colgroup>
					<thead>
						{tableHeaderCols}
					</thead>
					<tbody>
						{tableRows}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = CSSExamples;
