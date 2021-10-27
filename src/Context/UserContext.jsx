import * as React from "react";
import "firebase/compat/firestore";
/*import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";*/

const UserContext = React.createContext([]);
UserContext.displayName = "UserContext";

//Provaider es un  componenete que va a envolver los componenetes que queramos que accedan al ccontenido
export const UserProvaider = ({ children }) => {
  const [user, setUser] = React.useState([]);

  /*const register = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    auth.languageCode = "es";
    let newUser;
    signInWithPopup(auth, provider)
      .then((signresult) => {
        // The signed-in user info.
        const newuser = signresult.user;
        newUser = { name: newuser.displayName, email: newuser.email };
        setUser(newUser);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.email;
        console.log(email);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        // ...
      });
  };*/

  const value = { user, setUser };
  return (
    <UserContext.Provider value={{ value }}>{children}</UserContext.Provider>
  );
};
//Custom Hooks para poder usar el contexo
export const useUser = () => {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error("useUser debe usarse desde dentro de un UserProvaider");
  }
  return context;
};
