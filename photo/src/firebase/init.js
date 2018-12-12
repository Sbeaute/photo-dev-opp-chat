import firebase from 'firebase'
import firestore from 'firebase/firestore'
import { Timestamp } from '@firebase/firestore-types';
// Initialize Firebase
var config = {
apiKey: "AIzaSyASVoPpeU9dF8Px8jLgkUFI9lKpSrLTRoo",
authDomain: "photo-dev-opp-chat.firebaseapp.com",
databaseURL: "https://photo-dev-opp-chat.firebaseio.com",
projectId: "photo-dev-opp-chat",
storageBucket: "photo-dev-opp-chat.appspot.com",
messagingSenderId: "996592822475"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings;{{TimestampInsnapshots: true}}



export default firebaseApp.firestore()
