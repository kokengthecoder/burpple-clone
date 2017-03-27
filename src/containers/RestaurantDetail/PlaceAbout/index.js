import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class PlaceAbout extends Component {
	render() {
		return (
			<Segment.Group>
				<Segment>
					<span><small><strong>Breakfast &bull; Desserts &bull; Cafes & Coffee</strong></small></span>
					<p>
						<small>Stateland Cafe is a vintage-industrial themed cafe,
						located in the heart of Singapore, along Bali Lane.
						Warning: opened by 3 funny guys.
						</small>
					</p>
					<strong><small>Trending Now</small></strong>
				</Segment>
		    <Segment>
		    	<small>
			    	<strong>Mon: </strong>
			    	12:00pm - 9:30pm
		    	</small>
		    </Segment>
		    <Segment>
		    	<small>
			    	<strong>Phone: </strong>
			    	690823414
		    	</small>
		    </Segment>
        <Segment>
        	<small>
    	    	<strong>Price: </strong>
    	    	~$25/pax
        	</small>
        </Segment>
        <Segment>
		    	<small>
			    	<strong>Website: </strong>
			    	www.burpple.com
		    	</small>
		    </Segment>
		    <Segment secondary>
		    	<small>
			    	SUGGEST EDITS
		    	</small>
		    </Segment>
			</Segment.Group>
		)
	}
}

export default PlaceAbout;