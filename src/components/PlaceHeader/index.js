import React from 'react';
import { Grid, Image, Header, Container } from 'semantic-ui-react';
import './index.css';

const PlaceHeader = ({place}) => {

	const divBgImage = {
		background: 'url(' + place.headerImage + ') no-repeat center center',
	}

	return(
		<div>
			<div style={divBgImage} className="place-header-img" >
			</div>
			<div>
				<Grid padded>
					<Grid.Column mobile={5} computer={3} verticalAlign="middle">
						<Image src={place.logo} fluid  shape="rounded" />
					</Grid.Column>					
					<Grid.Column mobile={11} >
						<Container>
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