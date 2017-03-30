import React from 'react';
import { Menu } from 'semantic-ui-react';

const PlaceNav = ({ selectedNav, onNavSelect }) => {

	const handleItemClick = (e, { name }) => {
		onNavSelect(name);
	}

	return (
		<div>
			<Menu pointing secondary>
				<Menu.Item name="home" active={selectedNav === "home"} onClick={handleItemClick} />
				<Menu.Item name="about" active={selectedNav === "about"} onClick={handleItemClick} />
				<Menu.Item name="food" active={selectedNav === "food"} onClick={handleItemClick} />
				<Menu.Item name="review" active={selectedNav === "review"} onClick={handleItemClick} />
			</Menu>
		</div>
	)
}

export default PlaceNav;