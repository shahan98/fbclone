import React from 'react';

function SidebarRow({ src, Icon, title }) {
	return (
		<div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl curs'>
			{src && ( //in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.
				<Image
					className='rounded-full'
					src={src}
					width='30'
					height='30'
					layout='fixed'
				/>
			)}
			{Icon && <Icon className='h-8 w-8 text-blue-500' />}
			<p className='hidden md:inline-flex font-medium pl-4'>{title}</p>
		</div>
	);
}

export default SidebarRow;
