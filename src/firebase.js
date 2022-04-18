import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAj93IC_ddVW8e1ZLfJEbUF0dSVvrAP8GM",
  authDomain: "atppuc.firebaseapp.com",
  projectId: "atppuc",
  storageBucket: "atppuc.appspot.com",
  messagingSenderId: "127606031750",
  appId: "1:127606031750:web:0ebb4107097c8f4b06d807",
  measurementId: "G-7Y7WQS6RNE"
};


if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig) 
}

export const auth = firebase.auth()
export default firebase;