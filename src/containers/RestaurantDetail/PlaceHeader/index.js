import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import faker from 'faker';

const PlaceHeader = () => {
	return(
		<div>
			<div>
				<Image src={faker.image.food()} fluid />
			</div>
			<div>
				<Grid padded>
					<Grid.Column mobile={6} >
						<Image src={faker.image.food()} fluid />
					</Grid.Column>					
					<Grid.Column mobile={10} >
						<Header as="h3">{faker.company.companyName()}</Header>
						<span>53 reviews &bull; 103 wishlisted</span>
					</Grid.Column>
				</Grid>
			</div>
		</div>
	)
}

export default PlaceHeader;