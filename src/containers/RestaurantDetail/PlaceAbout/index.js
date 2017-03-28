import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class PlaceAbout extends Component {
	render() {
		return (
			<Segment.Group>
				<Segment>
					<span><strong>Breakfast &bull; Desserts &bull; Cafes & Coffee</strong></span>
					<p>
						Stateland Cafe is a vintage-industrial themed cafe,
						located in the heart of Singapore, along Bali Lane.
						Warning: opened by 3 funny guys.
					</p>
					<strong>Trending Now</strong>
				</Segment>
		    <Segment>
			    	<strong>Mon: </strong>
			    	12:00pm - 9:30pm
		    </Segment>
		    <Segment>
			    	<strong>Phone: </strong>
			    	690823414
		    </Segment>
        <Segment>
    	    	<strong>Price: </strong>
    	    	~$25/pax
        </Segment>
        <Segment>
			    	<strong>Website: </strong>
			    	www.burpple.com
		    </Segment>
		    <Segment secondary>
			    	SUGGEST EDITS
		    </Segment>
			</Segment.Group>
		)
	}
}

export default PlaceAbout;