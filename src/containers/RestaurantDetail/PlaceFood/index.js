import React, { Component } from 'react';
import { Segment, Card, Grid, Label, Image } from 'semantic-ui-react';
import faker from 'faker';

class PlaceFood extends Component {

	render() {
		return (
			<Segment>
				<h4>
					Foods 
				</h4>
				<Grid columns={2}>
					<Grid.Column>
						<Card fluid>
							<Image src={faker.image.food()} />
							<Label basic attached="top right" size="tiny">$12.00</Label>
							<Card.Content>
								<Card.Header>
									{faker.lorem.words()}
								</Card.Header>
								<Card.Meta>
									12 reviews
								</Card.Meta>
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column>
						<Card
							fluid
							image={faker.image.food()}
							header="Risotto"
							meta="12 reviews"
							/>
					</Grid.Column>
				</Grid>
			</Segment>
		)
	}
}

export default PlaceFood;
