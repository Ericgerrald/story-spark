import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCidxVGwuqqehMLsVef_LBPaPMEtFqy-sQ",
  authDomain: "story-spark-contact-form.firebaseapp.com",
  databaseURL: "https://story-spark-contact-form-default-rtdb.firebaseio.com",
  projectId: "story-spark-contact-form",
  storageBucket: "story-spark-contact-form.appspot.com",
  messagingSenderId: "942980095484",
  appId: "1:942980095484:web:224bb0cf65b2a7f1d6a679",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
