import Image from 'next/image';
import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
function Posts() {
	return (
		<div className='bg-white p-5 rounded-2xl shadow-md font-medium mt-6'>
			<div className='flex items-center space-x-2 mb-5'>
				<Image
					className='rounded-full cursor-pointer'
					src='https://i.postimg.cc/kXPxgc0R/dp2.jpg'
					width='40'
					height='40'
					layout='fixed'
				/>
				<div>
					<p className='font-medium text-black'>Mohomed Shahan</p>
					<p className='text-xs text-gray-400'>10/02/2022, 04.21</p>
				</div>
			</div>
			<p className='mb-2'>Freshers Are Welcome!</p>
			<div className='flex flex-col'>
				<Image
					className='pt-5'
					src='https://i.postimg.cc/vBbTCwJr/SLIIT-Football-Poster.jpg'
					width='630'
					height='630'
					layout='fixed'
				/>
			</div>
		</div>
	);
}

export default Posts;
