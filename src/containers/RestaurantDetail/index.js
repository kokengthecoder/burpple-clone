import React, { Component } from 'react';
import PlaceHeader from '../../components/PlaceHeader';
import PlaceNav from './PlaceNav';
import PlaceAbout from '../../components/PlaceAbout';
import PlaceFood from '../../components/PlaceFood';
import PlaceReview from './PlaceReview';
import SideGuide from '../../components/SideGuide';
import { Grid } from 'semantic-ui-react';
import './index.css';
import data from '../../data';

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
					<div className="place-menu-container">
						<PlaceAbout place={data.place} />
						<PlaceFood foods={data.foods} />
						<PlaceReview reviews={data.reviews} place={data.place} />
					</div>
				)
			case 'about':
				return (
					<div className="place-menu-container">
						<PlaceAbout place={data.place} />
					</div>
				)
			case 'food':
				return (
					<div className="place-menu-container">
						<PlaceFood foods={data.foods} />
					</div>
				)
			case 'review':
				return (
					<div className="place-menu-container">
						<PlaceReview reviews={data.reviews} place={data.place} />
					</div>
				)
			default:
				return (
					<div className="place-menu-container">
						<PlaceAbout place={data.place} />
						<PlaceFood foods={data.foods} />
						<PlaceReview reviews={data.reviews} place={data.place} />
					</div>
				)
		}

	}

	render() {
		return (
			<div className="page-layout">
				<PlaceHeader place={data.place} />
				<Grid className="layout-grid" padded>
					<Grid.Column mobile={16} tablet={11} computer={12} className="layout-grid">
						<div>
							<Grid className="layout-grid">
								<Grid.Column mobile={16} tablet={16} computer={5} className="layout-grid tablet-grid">
									<PlaceNav 
										selectedNav={this.state.selectedNav}
										onNavSelect={this.handleNavSelect} />
								</Grid.Column>
								<Grid.Column mobile={16} tablet={16} computer={11} className="layout-grid tablet-grid">
									{this.renderChild()}
								</Grid.Column>
							</Grid>
						</div>
					</Grid.Column>
					<Grid.Column tablet={5} computer={4} only="tablet">
						<SideGuide />
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}

export default RestaurantDetail;