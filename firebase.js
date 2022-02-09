// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBKLMKJoDzNY45MXLz1fEdMMb0_kZFgyb4',
	authDomain: 'facebook-2-441cc.firebaseapp.com',
	projectId: 'facebook-2-441cc',
	storageBucket: 'facebook-2-441cc.appspot.com',
	messagingSenderId: '322177867905',
	appId: '1:322177867905:web:3ce9e7741f6a10b03aed80',
};

// Initialize Firebase
/*
const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();*/
const app = initializeApp(firebaseConfig);
//const db = app.firestore();
//const storage = firebase.storage();

//export { db, storage };
