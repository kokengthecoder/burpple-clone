import React from 'react';
import { Grid, Image, Header, Container } from 'semantic-ui-react';

const PlaceHeader = ({place}) => {
	return(
		<div>
			<div>
				<Image src={place.headerImage} fluid />
			</div>
			<div>
				<Grid padded>
					<Grid.Column mobile={5} verticalAlign="middle">
						<Image src={place.logo} fluid />
					</Grid.Column>					
					<Grid.Column mobile={11} >
						<Container className="place-header">
							<Header as="h1">{place.name}</Header>
							<p>
								<small>
									{place.total_reviews} reviews 
									&bull; &nbsp;
									{place.total_wishlisted} wishlisted
								</small>
							</p>
						</Container>
					</Grid.Column>
				</Grid>
			</div>
		</div>
	)
}

export default PlaceHeader;