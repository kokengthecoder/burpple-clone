import React from 'react';
import MediaQuery from 'react-responsive';
import { Menu } from 'semantic-ui-react';

const PlaceNav = ({ selectedNav, onNavSelect }) => {

	const handleItemClick = (e, { name }) => {
		onNavSelect(name);
	}

	const MenuNav = ({styleProps}) => {

		console.log(styleProps);

		return (
			<Menu className={styleProps} >
				<Menu.Item name="home" active={selectedNav === "home"} onClick={handleItemClick} />
				<Menu.Item name="about" active={selectedNav === "about"} onClick={handleItemClick} />
				<Menu.Item name="food" active={selectedNav === "food"} onClick={handleItemClick} />
				<Menu.Item name="review" active={selectedNav === "review"} onClick={handleItemClick} />
			</Menu>
		)
	}

	return (
		<div>
			<MediaQuery minDeviceWidth={768}>
			{(matches) => {
				if(matches) {
					return <MenuNav styleProps="fluid vertical tabular" />
				} else {
					return <MenuNav styleProps="pointing secondary"/>
				}
			}}
			</MediaQuery>
		</div>
	)
}

export default PlaceNav;