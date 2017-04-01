import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import './index.css';

const PlaceHeader = ({place}) => {

	const divBgImage = {
		backgroundImage: ' linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.5)), url(' + place.headerImage + ')'
	}

	return(
		<div style={divBgImage} className="place-header-img" >
			<div className="place-header">
				<Grid padded>
					<Grid.Column computer={4} only="tablet" verticalAlign="middle">
						<Image src={place.logo} fluid  shape="rounded" />
					</Grid.Column>					
					<Grid.Column mobile={11} verticalAlign="middle">
						<Container>
							<h1>{place.name}</h1>
							<p>
								{place.total_reviews} reviews 
								&bull; &nbsp;
								{place.total_wishlisted} wishlisted
							</p>
						</Container>
					</Grid.Column>
				</Grid>
			</div>
		</div>
	)
}

export default PlaceHeader;