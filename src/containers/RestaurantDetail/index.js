import React, { Component } from 'react';
import PlaceHeader from './PlaceHeader';
import PlaceNav from './PlaceNav';

class RestaurantDetail extends Component {
	render() {
		return (
			<div>
				<PlaceHeader />
				<PlaceNav />
			</div>
		)
	}
}

export default RestaurantDetail;