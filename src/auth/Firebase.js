// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVU20Y2VYSMUk93qAQZPL687QBaU16Z14",
  authDomain: "amiandroid-c7992.firebaseapp.com",
  databaseURL:
    "https://amiandroid-c7992-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "amiandroid-c7992",
  storageBucket: "amiandroid-c7992.appspot.com",
  messagingSenderId: "333484229652",
  appId: "1:333484229652:web:e3a1d5eb023e5623a15301",
  measurementId: "G-RM8LBBNXTZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profileAvatar = result.user.photoURL;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export const createUser = async (auth, email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    //   navigate("/login");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};
