import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './index.css';
import faker from 'faker';

const foodImg = 'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg';

const SideGuide = () => {
	return (
		<div className="side-guide">
			<h3>Recomended Guides</h3>
			<Card.Group>
				<Card link>
					<Image src={foodImg} shape="rounded"/>
					<Card.Content verticalAlign="middle">
						<Card.Header>
							{faker.lorem.sentence()}
						</Card.Header>
					</Card.Content>
					<Card.Content extra>
						<p>Burpple Guide</p>
					</Card.Content>
				</Card>

				<Card link>
					<Image src={foodImg} shape="rounded"/>
					<Card.Content verticalAlign="middle">
						<Card.Header>
							{faker.lorem.sentence()}
						</Card.Header>
					</Card.Content>
					<Card.Content extra>
						<p>Burpple Guide</p>
					</Card.Content>
				</Card>

				<Card link>
					<Image src={foodImg} shape="rounded"/>
					<Card.Content verticalAlign="middle">
						<Card.Header>
							{faker.lorem.sentence()}
						</Card.Header>
					</Card.Content>
					<Card.Content extra>
						<p>Burpple Guide</p>
					</Card.Content>
				</Card>

				<Card link>
					<Image src={foodImg} shape="rounded"/>
					<Card.Content verticalAlign="middle">
						<Card.Header>
							{faker.lorem.sentence()}
						</Card.Header>
					</Card.Content>
					<Card.Content extra>
						<p>Burpple Guide</p>
					</Card.Content>
				</Card>

				<Card link>
					<Image src={foodImg} shape="rounded"/>
					<Card.Content verticalAlign="middle">
						<Card.Header>
							{faker.lorem.sentence()}
						</Card.Header>
					</Card.Content>
					<Card.Content extra>
						<p>Burpple Guide</p>
					</Card.Content>
				</Card>
			</Card.Group>
		</div>

	)
}

export default SideGuide;