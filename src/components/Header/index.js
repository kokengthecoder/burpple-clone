import React, { Component } from 'react';
import { Menu, Icon, Input, Button } from 'semantic-ui-react';

class Header extends Component {
	render () {
		return (
			<Menu borderless fixed="top">
				<Menu.Item name="home-logo">
					Burpple
				</Menu.Item>
				<Menu.Menu position="right">
					<Menu.Item>
						 <Input icon='search' placeholder='Search...' />
					</Menu.Item>
					<Menu.Item>
						<Button color="green">Download App</Button>
					</Menu.Item>
					<Menu.Item name="Sign up" />
					<Menu.Item name="Log in" />
				</Menu.Menu>
			</Menu>
		);
	}
}

export default Header;