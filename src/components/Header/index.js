import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

class Header extends Component {
	render () {
		return (
			<Menu borderless fixed="top" size="large">
				<Menu.Item name="home-logo">
					Burpple
				</Menu.Item>
				<Menu.Item position="right">
					<Icon name="bars" />
				</Menu.Item>
			</Menu>
		);
	}
}

export default Header;