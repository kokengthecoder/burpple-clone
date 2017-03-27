import React, { Component } from 'react';
import PlaceHeader from './PlaceHeader';
import PlaceNav from './PlaceNav';
import PlaceAbout from './PlaceAbout';
import PlaceFood from './PlaceFood';

class RestaurantDetail extends Component {
	render() {
		return (
			<div>
				<PlaceHeader />
				<PlaceNav />
				<PlaceAbout />
				<PlaceFood />
			</div>
		)
	}
}

export default RestaurantDetail;