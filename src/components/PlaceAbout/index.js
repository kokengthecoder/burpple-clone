import React from 'react';
import { Segment } from 'semantic-ui-react';

const PlaceAbout = (props) => {
	return (
		<Segment.Group>
			<Segment>
				<span><strong>Breakfast &bull; Desserts &bull; Cafes & Coffee</strong></span>
				<p>
					{props.place.description}
				</p>
				<strong>Trending Now</strong>
			</Segment>
	    <Segment>
	    	<strong>Mon: </strong>
	    	12:00pm - 9:30pm
	    </Segment>
	    <Segment>
	    	<strong>Phone: </strong>
	    	{props.place.phone}
	    </Segment>
      <Segment>
	    	<strong>Price: </strong>
	    	~$25/pax
      </Segment>
      <Segment>
	    	<strong>Website: </strong>
	    	{props.place.website}
	    </Segment>
	    <Segment secondary>
	    	SUGGEST EDITS
	    </Segment>
		</Segment.Group>
	)
}

export default PlaceAbout;