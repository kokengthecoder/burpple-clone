import React, { Component } from 'react';
import { Menu, Icon, Input, Button } from 'semantic-ui-react';
import './index.css';

class Header extends Component {
	render () {
		return (
			<div className="header-container">

				<Menu borderless fixed="top" className="header-nav-large">
					<Menu.Item name="home-logo">
						Burpple
					</Menu.Item>
					<Menu.Menu position="right">
						<Menu.Item>
							 <Input icon='search' placeholder='Search...' />
						</Menu.Item>
						<Menu.Item>
							<Button compact color="green">Download App</Button>
						</Menu.Item>
						<Menu.Item name="Sign up" />
						<Menu.Item name="Log in" />
					</Menu.Menu>
				</Menu>

				<Menu borderless fixed="top" className="header-nav-small">
					<Menu.Item name="home-logo">
						Burpple
					</Menu.Item>
					<Menu.Menu position="right">
						<Menu.Item>
							<Button compact color="green">Download App</Button>
						</Menu.Item>
						<Menu.Item>
							<Icon name="bars" />
						</Menu.Item>
					</Menu.Menu>
				</Menu>

			</div>

		);
	}
}

export default Header;