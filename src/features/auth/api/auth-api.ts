import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(getAuth(), email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      console.log("user", user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log("errorCode", errorCode);
      console.log("errorMessage", errorMessage);
      return { errorCode, errorMessage };
    });
}
