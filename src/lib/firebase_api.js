// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCCzzxSIggJzXUjtG9QF_gR9OJxqYrf2GY',
	authDomain: 'quiz-with-langchain.firebaseapp.com',
	projectId: 'quiz-with-langchain',
	storageBucket: 'quiz-with-langchain.appspot.com',
	messagingSenderId: '874286057412',
	appId: '1:874286057412:web:70674a316d71c594e88691'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
