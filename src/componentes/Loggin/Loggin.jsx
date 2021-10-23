import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Loggin = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  return <div></div>;
};

export default Loggin;
