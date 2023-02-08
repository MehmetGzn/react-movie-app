// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAnTMtav_y0MGrfe42el_Q2X9tlzIwC5MY',
  authDomain: 'react-moview-app.firebaseapp.com',
  projectId: 'react-moview-app',
  storageBucket: 'react-moview-app.appspot.com',
  messagingSenderId: '729947516336',
  appId: '1:729947516336:web:fb457049a4b778bfc6fa75',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, displayName, navigate) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate('/');
  } catch (err) {
    console.log(err);
  }
};

export const googleSignUpProvider = navigate => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then(result => {
      navigate('/');
    })
    .catch(err => {
      console.log(err);
    });
};

export const userObserver = setCurrentUser => {
  onAuthStateChanged(auth, user => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};

export const logIn = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate('/');
  } catch (err) {
    console.log(err);
  }
};

export const logOut = () => {
  signOut(auth);
};
