import React, { Component } from 'react';
import PlaceHeader from './PlaceHeader';
import PlaceNav from './PlaceNav';
import PlaceAbout from './PlaceAbout';
import PlaceFood from './PlaceFood';
import PlaceReview from './PlaceReview';

class RestaurantDetail extends Component {
	render() {
		return (
			<div>
				<PlaceHeader />
				<PlaceNav />
				<PlaceAbout />
				<PlaceFood />
				<PlaceReview />
			</div>
		)
	}
}

export default RestaurantDetail;