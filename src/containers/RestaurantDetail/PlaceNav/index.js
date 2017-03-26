import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class PlaceNav extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.handleItemClick = this.handleItemClick.bind(this);
	// }
	state = { activeItem: 'home' }

	handleItemClick = (e, { name }) => {
		this.setState({ activeItem: name });
	}

	render() {

		const { activeItem } = this.state

		return (
			<div>
				<Menu pointing secondary>
					<Menu.Item name="home" active={activeItem === "home"} onClick={this.handleItemClick} />
					<Menu.Item name="about" active={activeItem === "about"} onClick={this.handleItemClick} />
					<Menu.Item name="food" active={activeItem === "food"} onClick={this.handleItemClick} />
					<Menu.Item name="review" active={activeItem === "review"} onClick={this.handleItemClick} />
				</Menu>
			</div>
		)
	}
}

export default PlaceNav;