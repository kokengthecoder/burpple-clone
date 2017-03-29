import React from 'react';
import { Segment } from 'semantic-ui-react';
import ReviewCard from '../../../components/ReviewCard';

const PlaceReview = ({ reviews, place }) => {

	const renderReview = reviews.map((review) => {
		return <ReviewCard review={review} place={place} />
	})

	return (
		<Segment>
			<h4>Reviews</h4>
			{renderReview}
		</Segment>
	)
};

export default PlaceReview;