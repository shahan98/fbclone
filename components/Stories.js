import React from 'react';
import StoryCard from './StoryCard';

const stories = [
	{
		name: 'Mohomed Shahan',
		src: 'https://i.postimg.cc/h4kH4k48/2018-09-23-11-15-01-1.jpg',
		profile: 'https://i.postimg.cc/kXPxgc0R/dp2.jpg',
	},
	{
		name: 'Elon Musk',
		src: 'https://links.papareact.com/4zn',
		profile: 'https://links.papareact.com/kxk',
	},
	{
		name: 'Jeff Bezoz',
		src: 'https://links.papareact.com/k2j',
		profile: 'https://links.papareact.com/f0p',
	},
	{
		name: 'Mark Zuckerberg',
		src: 'https://links.papareact.com/xql',
		profile: 'https://links.papareact.com/snf',
	},
	{
		name: 'Bill Gates',
		src: 'https://links.papareact.com/4u4',
		profile: 'https://links.papareact.com/zvy',
	},
];

function Stories() {
	return (
		<div className='flex justify-center space-x-3 mx-auto'>
			{stories.map((story) => (
				<StoryCard
					key={story.src}
					name={story.name}
					src={story.src}
					profile={story.profile}
				/>
			))}
		</div>
	);
}

export default Stories;
