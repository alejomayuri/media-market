import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAr0P309iJ4dINlD5n7T-Sz0sr1-J_H5io",
  authDomain: "media-market-8e497.firebaseapp.com",
  projectId: "media-market-8e497",
  storageBucket: "media-market-8e497.appspot.com",
  messagingSenderId: "106883573899",
  appId: "1:106883573899:web:cc17a37b972a09383d8c8e",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const productsColection = () => {
  return db
    .collection("products")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;

        return {
          ...data,
          id,
        };
      });
    });
};
