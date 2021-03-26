import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyAHAS9YBpdjVrU-lw_pYHUMoHG5JvWcjjM",
authDomain: "journalapp-18994.firebaseapp.com",
projectId: "journalapp-18994",
storageBucket: "journalapp-18994.appspot.com",
messagingSenderId: "179335529664",
appId: "1:179335529664:web:b6b7451a9e7774bcf61925"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const bd = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


export { bd, googleAuthProvider, firebase }