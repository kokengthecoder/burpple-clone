import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import ReviewCard from '../../../components/ReviewCard';
import faker from 'faker';

const data = {
	content: {
		title: faker.lorem.sentence(),
		description: faker.lorem.paragraphs()
	},
	img: faker.image.food(),
	reviwer: {
		logo: faker.image.avatar(),
		name: faker.internet.userName()
	},
	location: faker.company.companyName(),
	date: '3 days ago'
}

class Review extends Component {
	render() {
		return (
			<Segment>
				<h4>Reviews</h4>
				<ReviewCard data={data} />
				<ReviewCard data={data} />
			</Segment>
		)
	}
};

export default Review;