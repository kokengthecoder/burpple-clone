import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import faker from 'faker';

const foodImg = 'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg';

const SideGuide = () => {
	return (
		<div>
			<h3>Recomended Guides</h3>
			<Card.Group>
				<Card link>
					<Image src={foodImg} shape="rounded"/>
					<Card.Content>
						<Card.Header>
							{faker.lorem.sentence()}
						</Card.Header>
					</Card.Content>
					<Card.Content extra>
						<p><small>
							<Icon name="food" />
							Burpple Guide
						</small></p>
					</Card.Content>
				</Card>

				<Card link>
					<Image src={foodImg} shape="rounded"/>
					<Card.Content>
						<Card.Header>
							{faker.lorem.sentence()}
						</Card.Header>
					</Card.Content>
					<Card.Content extra>
						<p><small>
							<Icon name="food" />
							Burpple Guide
						</small></p>
					</Card.Content>
				</Card>

				<Card link>
					<Image src={foodImg} shape="rounded"/>
					<Card.Content>
						<Card.Header>
							{faker.lorem.sentence()}
						</Card.Header>
					</Card.Content>
					<Card.Content extra>
						<p><small>
							<Icon name="food" />
							Burpple Guide
						</small></p>
					</Card.Content>
				</Card>

				<Card link>
					<Image src={foodImg} shape="rounded"/>
					<Card.Content>
						<Card.Header>
							{faker.lorem.sentence()}
						</Card.Header>
					</Card.Content>
					<Card.Content extra>
						<p><small>
							<Icon name="food" />
							Burpple Guide
						</small></p>
					</Card.Content>
				</Card>

				<Card link>
					<Image src={foodImg} shape="rounded"/>
					<Card.Content>
						<Card.Header>
							{faker.lorem.sentence()}
						</Card.Header>
					</Card.Content>
					<Card.Content extra>
						<p><small>
							<Icon name="food" />
							Burpple Guide
						</small></p>
					</Card.Content>
				</Card>
			</Card.Group>
		</div>

	)
}

export default SideGuide;