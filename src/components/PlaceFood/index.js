import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import FoodCard from '../FoodCard';

const PlaceFood = (props) => {

	const renderFoodCard = props.foods.map((food) => {
		return (
			<Grid.Column stretched>
				<FoodCard food={food} />
			</Grid.Column>
		)
	});

	return (
		<Segment>
			<h4>
				Foods 
			</h4>
			<Grid columns={2}>
				{renderFoodCard}
			</Grid>
		</Segment>
	)
}

export default PlaceFood;
