import faker from 'faker';

const headerImage = 'https://preview.ibb.co/cFvxLa/ian_baldwin_49824.jpg'
const foodImg1 = 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?h=350&auto=compress&cs=tinysrgb'
const foodImg2 = 'https://images.pexels.com/photos/104987/pexels-photo-104987.jpeg?h=350&auto=compress&cs=tinysrgb'
const foodImg3 = 'https://images.pexels.com/photos/299347/pexels-photo-299347.jpeg?h=350&auto=compress&cs=tinysrgb'
const foodImg4 = 'https://images.pexels.com/photos/65131/pexels-photo-65131.jpeg?h=350&auto=compress&cs=tinysrgb'
const foodImg5 = 'https://images.pexels.com/photos/62097/pexels-photo-62097.jpeg?h=350&auto=compress&cs=tinysrgb'
const foodImg6 = 'https://images.pexels.com/photos/8758/food-dinner-lemon-rice.jpg?h=350&auto=compress&cs=tinysrgb'



const data = {
	place: {
		headerImage: headerImage,
		logo: headerImage,
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
		image: foodImg1,
		total_reviews: faker.random.number()
	},{
		name: faker.lorem.words(),
		price: faker.commerce.price(),
		image: foodImg2,
		total_reviews: faker.random.number()
	},{
		name: faker.lorem.words(),
		price: faker.commerce.price(),
		image: foodImg3,
		total_reviews: faker.random.number()
	},{
		name: faker.lorem.words(),
		price: faker.commerce.price(),
		image: foodImg4,
		total_reviews: faker.random.number()
	},{
		name: faker.lorem.words(),
		price: faker.commerce.price(),
		image: foodImg5,
		total_reviews: faker.random.number()
	},{
		name: faker.lorem.words(),
		price: faker.commerce.price(),
		image: foodImg6,
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
		img: foodImg1,
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
		img: foodImg2,
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
		img: foodImg3,
		like: faker.random.number(),
		date: '3 days ago'
	}]
}

export default data;