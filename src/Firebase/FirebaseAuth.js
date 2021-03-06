import { firebase } from "./FirebaseConfig";
const GoogleAuth = () => {
  const provider_Google = new firebase.auth.GoogleAuthProvider();
  const AdminEmail = process.env.REACT_APP_ADMIN_EMAIL;
  firebase
    .auth()
    .signInWithPopup(provider_Google)
    .then(({ user }) => {
      if(user.email!==AdminEmail){
        FirebaseLogOut();
      }else{
        console.log(JSON.stringify(user));
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
    .then(() => {
      console.log("Se ha cerrado sesión");
    })
    .catch((error) => console.log(error));
};
export { GoogleAuth, FirebaseLogOut };
