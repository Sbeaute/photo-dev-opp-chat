import firebase from 'firebase'
import firestone from 'firebase/firestone'
// Initialize Firebase
var config = {
apiKey: "AIzaSyASVoPpeU9dF8Px8jLgkUFI9lKpSrLTRoo",
authDomain: "photo-dev-opp-chat.firebaseapp.com",
databaseURL: "https://photo-dev-opp-chat.firebaseio.com",
projectId: "photo-dev-opp-chat",
storageBucket: "photo-dev-opp-chat.appspot.com",
messagingSenderId: "996592822475"
};
const firebaseApp= firebase.initializeApp(config);
firebaseApp.firestone().settings{{ timestampsInSnapshots: true}}

export default firebaseApp.firestone()
