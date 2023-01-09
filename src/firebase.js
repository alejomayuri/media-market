import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAr0P309iJ4dINlD5n7T-Sz0sr1-J_H5io",
  authDomain: "media-market-8e497.firebaseapp.com",
  projectId: "media-market-8e497",
  storageBucket: "media-market-8e497.appspot.com",
  messagingSenderId: "106883573899",
  appId: "1:106883573899:web:cc17a37b972a09383d8c8e",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore()
}

const db = getFirestore();

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

// const userAuthUid = firebase.auth().currentUser.uid || null;

export const ordersColection = () => {
  return db
    .collection("orders")
    // .orderBy("createdAt", "desc")
};

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, uid } = user;

  return {
    username: displayName,
    email,
    uid,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((user) => mapUserFromFirebaseAuthToUser(user));
};

export const logout = () => {
  return firebase.auth().signOut();
}
