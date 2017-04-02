import React from 'react';
import MediaQuery from 'react-responsive';
import { Segment, Grid } from 'semantic-ui-react';
import FoodCard from '../FoodCard';

const renderFoodCard = (foods, num) => {

	// sort by total_reviews in descending order
	const mapped = foods.sort((a,b) => {
		return b.total_reviews - a.total_reviews;
	})

	// shows number of cards at difference screen wide
	const slice = mapped.slice(0, num);

	// render into card 
	const rendered = slice.map((food) => {
		return (
			<Grid.Column stretched mobile={8} tablet={8} computer={8}>
				<FoodCard food={food} />
			</Grid.Column>
		)
	});

	return rendered;
} 

const PlaceFood = ({foods}) => {
	return (
		<Segment>
			<h4>
				Foods 
			</h4>
			<MediaQuery minWidth={768}>
				{(matches) => {
					if(matches) {
						return <Grid>{renderFoodCard(foods, 4)}</Grid>
					} else {
						return <Grid>{renderFoodCard(foods, 2)}</Grid>
					}
				}}
			</MediaQuery>
		</Segment>
	)
}

export default PlaceFood;
