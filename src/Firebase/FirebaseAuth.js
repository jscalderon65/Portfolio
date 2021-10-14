import { firebase } from "./FirebaseConfig";
const GoogleAuth = () => {
  const provider_Google = new firebase.auth.GoogleAuthProvider();
  const AdminEmail = "jhonnseca0599@gmail.com";
  firebase
    .auth()
    .signInWithPopup(provider_Google)
    .then(({ user }) => {
      if (user.email !== AdminEmail) {
        FirebaseLogOut();
      } else {
        console.log("Logged");
      }
    })
    .catch(({ message: errorMessage }) => {
      console.log(errorMessage);
    });
};
const FirebaseLogOut = () => {
  firebase
    .auth()
    .signOut()
    .catch((error) => console.log(error));
};
export { GoogleAuth, FirebaseLogOut };
