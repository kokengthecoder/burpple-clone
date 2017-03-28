import React from 'react';
import { Card, Image, Icon, Menu, Feed } from 'semantic-ui-react';

export default function ReviewCard(props) {
	return (
		<Card fluid>
			<Card.Content>
				<Feed>
					<Feed.Event>
						<Feed.Label image={props.data.reviwer.logo} />
						<Feed.Content>
							<Feed.Summary>
								<a>{props.data.reviwer.name}</a>
								<small>&nbsp; at</small>
								<Icon name="marker" size="small" /> 
								<a>{props.data.location}</a>
							</Feed.Summary>
							<Feed.Date>
								{props.data.date}
							</Feed.Date>
						</Feed.Content>
					</Feed.Event>
				</Feed>
			</Card.Content>
			<Image src={props.data.img} />
			<Card.Content>
				<Card.Header>
					{ props.data.content.title }
				</Card.Header>
				<Card.Description>
					{ props.data.content.description }
				</Card.Description>
				<span><Icon name="heart" size="small" />54 likes</span>
			</Card.Content>
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
		</Card>
	)
};