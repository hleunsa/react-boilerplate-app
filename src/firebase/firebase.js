import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAlWlpWpvZbppAN7OUAv2feJ7CXYygwzpk",
  authDomain: "leuns-udemy-react-expensify.firebaseapp.com",
  databaseURL: "https://leuns-udemy-react-expensify.firebaseio.com",
  projectId: "leuns-udemy-react-expensify",
  storageBucket: "leuns-udemy-react-expensify.appspot.com",
  messagingSenderId: "506261691319",
  appId: "1:506261691319:web:7c5708a71e0698d2896632",
  measurementId: "G-3P0048Y1B2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

database.ref().set({
  age: 29, 
  name: 'HuLK',
  isSingle: false,
  location: {
    city: "Bafang",
    country: "Cameroon"
  }
}).catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    // var errorMessage = error.message;
   console.error(error);
});

database.ref('age').set(30);
database.ref('location/city').set('Paris');
database.ref('location/country').set('France');

database.ref('attributes/height').set(176);
database.ref('attributes/weight').set(85);



