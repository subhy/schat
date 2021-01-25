import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCATX0f45TKOzHBAtjg9kZnY5nB_F4l_0s",
    authDomain: "snapchat-clone-26c18.firebaseapp.com",
    projectId: "snapchat-clone-26c18",
    storageBucket: "snapchat-clone-26c18.appspot.com",
    messagingSenderId: "602639844123",
    appId: "1:602639844123:web:aaac0678992ebaf1bb09be"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const  db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();
const provider=new firebase.auth.GoogleAuthProvider();

export {db,storage,auth,provider};
