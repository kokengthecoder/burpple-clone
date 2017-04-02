import React, { Component } from 'react';
import PlaceHeader from '../../components/PlaceHeader';
import PlaceNav from './PlaceNav';
import PlaceAbout from '../../components/PlaceAbout';
import PlaceFood from '../../components/PlaceFood';
import PlaceReview from './PlaceReview';
import SideGuide from '../../components/SideGuide';
import faker from 'faker';
import { Grid } from 'semantic-ui-react';

const foodImg = 'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg';

const data = {
	place: {
		headerImage: foodImg,
		logo: foodImg,
		name: faker.company.companyName(),
		address1: faker.address.streetAddress(),
		address2: faker.address.streetName(),
		city: faker.address.city(),
		state: faker.address.state(),
		country: faker.address.country(),
		phone: faker.phone.phoneNumber(),
		description: faker.lorem.sentences(),
		website: faker.internet.domainName(),
		total_reviews: faker.random.number(),
		total_wishlisted: faker.random.number()
	},
	foods: [{
		name: faker.lorem.words(),
		price: faker.commerce.price(),
		image: foodImg,
		total_reviews: faker.random.number()
	},{
		name: faker.lorem.words(),
		price: faker.commerce.price(),
		image: foodImg,
		total_reviews: faker.random.number()
	},{
		name: faker.lorem.words(),
		price: faker.commerce.price(),
		image: foodImg,
		total_reviews: faker.random.number()
	},{
		name: faker.lorem.words(),
		price: faker.commerce.price(),
		image: foodImg,
		total_reviews: faker.random.number()
	},{
		name: faker.lorem.words(),
		price: faker.commerce.price(),
		image: foodImg,
		total_reviews: faker.random.number()
	},{
		name: faker.lorem.words(),
		price: faker.commerce.price(),
		image: foodImg,
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
		img: foodImg,
		like: faker.random.number(),
		date: '3 days ago'
	},{
		reviwer: {
			logo: faker.image.avatar(),
			name: faker.internet.userName()
		},
		content: {
			title: faker.lorem.sentence(),
			description: faker.lorem.paragraphs()
		},
		img: foodImg,
		like: faker.random.number(),
		date: '3 days ago'
	},{
		reviwer: {
			logo: faker.image.avatar(),
			name: faker.internet.userName()
		},
		content: {
			title: faker.lorem.sentence(),
			description: faker.lorem.paragraphs()
		},
		img: foodImg,
		like: faker.random.number(),
		date: '3 days ago'
	}]
}

class RestaurantDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedNav: 'home'
		}

		this.handleNavSelect = this.handleNavSelect.bind(this)

	}

	// pass function to PlaceNav to update the state 
	handleNavSelect(selectedNav) {
		this.setState({ selectedNav })
	}

	renderChild() {
		switch (this.state.selectedNav) {
			case 'home':
				return (
					<div className="menu-container">
						<PlaceAbout place={data.place} />
						<PlaceFood foods={data.foods} />
						<PlaceReview reviews={data.reviews} place={data.place} />
					</div>
				)
			case 'about':
				return (
					<div className="menu-container">
						<PlaceAbout place={data.place} />
					</div>
				)
			case 'food':
				return (
					<div className="menu-container">
						<PlaceFood foods={data.foods} />
					</div>
				)
			case 'review':
				return (
					<div className="menu-container">
						<PlaceReview reviews={data.reviews} place={data.place} />
					</div>
				)
			default:
				return (
					<div className="menu-container">
						<PlaceAbout place={data.place} />
						<PlaceFood foods={data.foods} />
						<PlaceReview reviews={data.reviews} place={data.place} />
					</div>
				)
		}

	}

	render() {
		return (
			<div>
				<PlaceHeader place={data.place} />
				<Grid className="layout-grid" padded>
					<Grid.Column mobile={16} tablet={5} computer={4}>
						<PlaceNav 
							selectedNav={this.state.selectedNav}
							onNavSelect={this.handleNavSelect} />
					</Grid.Column>
					<Grid.Column mobile={16} tablet={11} computer={8}>

						{this.renderChild()}
					</Grid.Column>
					<Grid.Column computer={4} only="computer">
						<SideGuide />
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}

export default RestaurantDetail;