import React, { Component } from 'react';
import PlaceHeader from './PlaceHeader';
import PlaceNav from './PlaceNav';
import PlaceAbout from './PlaceAbout';

class RestaurantDetail extends Component {
	render() {
		return (
			<div>
				<PlaceHeader />
				<PlaceNav />
				<PlaceAbout />
			</div>
		)
	}
}

export default RestaurantDetail;