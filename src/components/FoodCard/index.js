import React from 'react';
import { Card, Label, Image } from 'semantic-ui-react';
import './index.css';

const FoodCard = ({food}) => (
	<Card fluid>
		<Image src={food.image} />
		<Label 
			basic 
			attached="top right" 
			size="small"
			className="price-label">
			${food.price}
		</Label>
		<Card.Content>
			<Card.Header>
				{food.name}
			</Card.Header>
			<Card.Meta>
				<small>
					{food.total_reviews} reviews
				</small>
			</Card.Meta>
		</Card.Content>
	</Card>
)

export default FoodCard;