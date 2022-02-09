import React, { useRef, useState } from 'react';
import Image from 'next/image';
import {
	VideoCameraIcon,
	CameraIcon,
	EmojiHappyIcon,
} from '@heroicons/react/solid';
import { db } from '../firebase';
import firebase from 'firebase/app';
//import {useSession} from 'next-auth/client';

function InputBox() {
	//const [session] = useSession();
	const inputRef = useRef(null);
	const filePickerRef = useRef(null);
	const [imageToPost, setImageToPost] = useState(null);

	const sendPost = (e) => {
		e.preventDefault();
		if (!inputRef.current.value) return;

		db.collection('posts')
			.add({
				message: inputRef.current.value,
				name: 'Shahan Mohomed',
				email: 'shahan.designs@outlook.com',
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			})
			.then((doc) => {
				if (imageToPost) {
					const uploadTask = storage
						.ref(`posts/${doc.id}`)
						.putString(imageToPost, 'data_url');

					removeImage();

					uploadTask.on(
						'state_change',
						null,
						(error) => console.error(error),
						() => {
							storage
								.ref(`posts`)
								.child(doc.id)
								.getDownloadURL()
								.then((url) => {
									db.collection('posts').doc(doc.id).set(
										{
											postImage: url,
										},
										{ merge: true }
									);
								});
						}
					);
				}
			});

		inputRef.current.value = '';
	};

	const addImageToPost = (e) => {
		const reader = new FileReader();
		if (e.target.files.length[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}

		reader.onload = (readerEvent) => {
			setImageToPost(readerEvent.target.result);
		};
	};

	return (
		<div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
			<div className='flex space-x-4 p-4 items-center'>
				<Image
					className='rounded-full cursor-pointer'
					src='https://i.postimg.cc/kXPxgc0R/dp2.jpg' //src= {session.user.image}
					width='40'
					height='40'
					layout='fixed'
				/>
				<form className='flex flex-1'>
					<input
						className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
						type='text'
						ref={inputRef}
						placeholder={`What's on your mind, Shahan?`}
					/>
					<button hidden type='submit' onClick={sendPost}></button>
				</form>

				{imageToPost && (
					<div
						onclick={removeImage}
						className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'
					>
						<img className='h-10 object-contain' src={imageToPost} alt='' />
						<p className='text-xs text-red-500 text-center'>Remove</p>
					</div>
				)}
			</div>
			<div className='flex justify-evenly p-3 border-t'>
				<div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
					<VideoCameraIcon className='h-7 text-red-500' />
					<p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
				</div>
				<div
					onClick={() => filePickerRef.current.click()}
					className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'
				>
					<CameraIcon className='h-7 text-green-400' />
					<p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
					<input
						ref={filePickerRef}
						onChange={addImageToPost}
						type='file'
						hidden
					/>
				</div>
				<div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
					<EmojiHappyIcon className='h-7 text-yellow-300' />
					<p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
				</div>
			</div>
		</div>
	);
}

export default InputBox;
