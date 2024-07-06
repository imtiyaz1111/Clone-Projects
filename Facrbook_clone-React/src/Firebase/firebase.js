
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA4aBrynd3qKh3Z7QHz-CZbTj6jjVAefr8",
    authDomain: "facebook-clone-e71f6.firebaseapp.com",
    projectId: "facebook-clone-e71f6",
    storageBucket: "facebook-clone-e71f6.appspot.com",
    messagingSenderId: "265709327103",
    appId: "1:265709327103:web:63dd02adde9233a37132ca"
  });

  const auth=firebase.auth();

  const provider=new firebase.auth.FacebookAuthProvider();

  export {auth,provider}