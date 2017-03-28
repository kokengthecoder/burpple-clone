import React from 'react';
import { Segment, Card, Grid, Label, Image } from 'semantic-ui-react';

const FoodCard = ({food}) => (
	<Card fluid>
		<Image src={food.image} />
		<Label 
			basic 
			attached="top right" 
			size="tiny">
			${food.price}
		</Label>
		<Card.Content>
			<Card.Description>
				<strong>
					{food.name}
				</strong>
			</Card.Description>
			<Card.Meta>
				{food.total_reviews} reviews
			</Card.Meta>
		</Card.Content>
	</Card>
)

// Continue
function renderFoodCard(props) {
	props.foods.map((food) => {
		return (

		)
	})
}

const PlaceFood = (props) => {
	return (
		<Segment>
			<h4>
				Foods 
			</h4>
			<Grid columns={2}>
				<Grid.Column stretched>
					<FoodCard food={props.foods[0]} />
				</Grid.Column>
				<Grid.Column stretched>
					<FoodCard food={props.foods[1]} />
				</Grid.Column>
			</Grid>
		</Segment>
	)
}

export default PlaceFood;
