import React, { Component } from 'react';
import PlaceHeader from './PlaceHeader';
import PlaceNav from './PlaceNav';
import PlaceAbout from '../../components/PlaceAbout';
import PlaceFood from '../../components/PlaceFood';
//import PlaceReview from './PlaceReview';
import faker from 'faker';

const data = {
	place: {
		headerImage: faker.image.food(),
		logo: faker.image.food(),
		name: faker.company.companyName(),
		address1: faker.address.streetAddress(),
		address2: faker.address.streetName(),
		city: faker.address.city(),
		state: faker.address.state(),
		country: faker.address.country(),
		phone: faker.phone.phoneNumber(),
		description: faker.lorem.sentences(),
		website: faker.internet.domainName()
	},
	foods: [{
		name: faker.lorem.words(),
		price: faker.commerce.price(),
		image: faker.image.food(),
		total_reviews: faker.random.number()
	},{
		name: faker.lorem.words(),
		price: faker.commerce.price(),
		image: faker.image.food(),
		total_reviews: faker.random.number()
	}],
	reviews: [{
		reviwer: {
			logo: faker.image.avatar(),
			name: faker.internet.userName()
		},
		content: {
			title: faker.lorem.sentence(),
			description: faker.lorem.paragraphs()
		},
		img: faker.image.food(),
		date: '3 days ago'
	}]
}

class RestaurantDetail extends Component {
	render() {
		return (
			<div>
				<PlaceHeader />
				<PlaceNav />
				<PlaceAbout place={data.place} />
				<PlaceFood foods={data.foods} />
				{/*	<PlaceReview /> */}
			</div>
		)
	}
}

export default RestaurantDetail;