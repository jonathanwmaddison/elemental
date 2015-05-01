var React = require('react');
var Router = require('react-router');

const NavItems = [
	{ value: 'buttons',     label: 'Buttons' },
	{ value: 'tables',      label: 'Tables' },
	{ value: 'forms',       label: 'Forms' },
	{ value: 'spinner',     label: 'Spinner' },
	{ value: 'modal',       label: 'Modal' },
	{ value: 'grid',        label: 'Grid' },
	{ value: 'date-picker', label: 'Date Picker' }
];

var Header = React.createClass({
	render: function() {
		return (
			<div className="page-header">
				<h1>Elemental UI</h1>
			</div>
		);
	}
});

var PageNav = React.createClass({
	getInitialState: function() {
		return {
			showMenu: false
		};
	},
	toggleMenu: function() {
		this.setState({
			showMenu: !this.state.showMenu
		});
	},
	render: function() {
		var self = this;
		var menuClass = this.state.showMenu ? 'primary-nav-menu is-visible' : 'primary-nav-menu is-hidden';
		var menuItems = NavItems.map(function(item, i) {
			return <Router.Link key={item.value} className="primary-nav__item" onClick={self.toggleMenu} to={item.value}>{item.label}</Router.Link>;
		});
		return (
			<nav className="primary-nav">
				<Router.Link to="home" className="primary-nav__brand special" title="Home">
					<img src="./images/elemental-logo-paths.svg" className="primary-nav__brand-src" />
				</Router.Link>
				{/*<Router.Link to="home">Home</Router.Link>*/}
				<button onClick={this.toggleMenu} className="primary-nav__item primary-nav-menu-trigger">
					<span className="primary-nav-menu-trigger-icon octicon octicon-navicon" />
					<span className="primary-nav-menu-trigger-label">Menu</span>
				</button>
				<div className={menuClass}>
					<div className="primary-nav-menu-inner">
						{menuItems}
					</div>
				</div>
				<a href="https://github.com/elementalui/elemental" target="_blank" title="View on GitHub" className="primary-nav__brand right">
					<img src="./images/github-logo.svg" className="primary-nav__brand-src" />
				</a>
			</nav>
		);
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="page-wrapper">
				<PageNav />
				<div className="page-body">
					<Router.RouteHandler/>
				</div>
				<div className="page-footer">
					<div className="demo-container container">
						Copyright &copy; 2015 &middot; (MIT) License &middot; Built by <a href="https://twitter.com/jedwatson">@jedwatson</a> and <a href="https://twitter.com/jossmackison">@jossmackison</a> at <a href="http://www.thinkmill.com.au" target="_blank">Thinkmill</a>
					</div>
				</div>
			</div>
		);
	}
});

var basepath = (window.location.pathname.slice(0,10) === '/elemental') ? '/elemental' : '';

var routes = (
	<Router.Route name="app" path={basepath + '/'} handler={App}>
		<Router.Route name="home" path={basepath + '/'} handler={require('./pages/Home')} />
		<Router.Route name="buttons" path={basepath + '/buttons'} handler={require('./pages/Buttons')} />
		<Router.Route name="tables" path={basepath + '/tables'} handler={require('./pages/Tables')} />
		<Router.Route name="forms" path={basepath + '/forms'} handler={require('./pages/Forms')} />
		<Router.Route name="spinner" path={basepath + '/spinner'} handler={require('./pages/Spinner')} />
		<Router.Route name="modal" path={basepath + '/modal'} handler={require('./pages/Modal')} />
		<Router.Route name="grid" path={basepath + '/grid'} handler={require('./pages/Grid')} />
		<Router.Route name="date-picker" path={basepath + '/date-picker'} handler={require('./pages/DatePicker')} />
		<Router.DefaultRoute handler={require('./pages/Home')} />
	</Router.Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
	React.render(<Handler/>, document.body);
});
