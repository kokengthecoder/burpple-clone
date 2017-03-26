import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import faker from 'faker';

const PlaceHeader = () => {
	return(
		<div>
			<div className="header-img">
				<Image src={faker.image.food()} fluid height="20%"/>
			</div>
			<div>
				<Grid padded>
					<Grid.Column mobile={6} >
						<Image src={faker.image.food()} fluid/>
					</Grid.Column>					
					<Grid.Column mobile={10} >
						<Header as="h4">{faker.company.companyName()}</Header>
						<span><small>53 reviews &bull; 103 wishlisted</small></span>
					</Grid.Column>
				</Grid>
			</div>
		</div>
	)
}

export default PlaceHeader;