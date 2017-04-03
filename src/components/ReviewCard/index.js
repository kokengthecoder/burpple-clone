import React from 'react';
import { Card, Image, Icon, Menu, Feed } from 'semantic-ui-react';
import './index.css';

const ReviewCard = ({review, place}) => {

	const ReviewHead = () => (
		<Card.Content>
			<Feed>
				<Feed.Event>
					<Feed.Label image={review.reviwer.logo} />
					<Feed.Content>
						<Feed.Date>
							{review.date}
						</Feed.Date>
						<Feed.Summary>
							<a>{review.reviwer.name}</a>
							<small>&nbsp; at</small>
							<Icon name="marker" size="small" /> 
							<a>{place.name}</a>
						</Feed.Summary>
					</Feed.Content>
				</Feed.Event>
			</Feed>
		</Card.Content>
	)

	const ReviewContent = () => (
		<Card.Content>
			<Card.Header>
				{ review.content.title }
			</Card.Header>
			<Card.Description className="review-description">
				{ review.content.description }
			</Card.Description>
			<br />
			<span>
				<Icon name="heart" size="small" />
				<small> { review.like } likes</small>
			</span>
		</Card.Content>
	)

	const IconList = () => (
		<Card.Content extra>
			<Menu secondary size="mini" icon>
				<Menu.Item>
					<Icon as="i" name="empty heart" size="large" />
				</Menu.Item>
				<Menu.Item>
					<Icon as="i" name="comment outline" size="large" />
				</Menu.Item>
				<Menu.Item>
					<Icon as="i" name="send outline" size="large" />
				</Menu.Item>
				<Menu.Menu position="right">
					<Menu.Item>
						<Icon as="i" name="remove bookmark" size="large" />
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		</Card.Content>
	)


	return (
		<Card fluid>

			{/* Card Header */}
			<ReviewHead />

			{/* Card Media */}
			<Image src={review.img} />

			{/* Card Content */}
			<ReviewContent />

			{/* Card Bottom Icon */}
			<IconList />

		</Card>
	)
};

export default ReviewCard;