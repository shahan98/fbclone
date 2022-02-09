import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

function Posts() {
	const [realtimePosts] = useCollection(
		db.collection('posts').orderBy('timestamp', 'desc')
	);
	return <div></div>;
}

export default Posts;
