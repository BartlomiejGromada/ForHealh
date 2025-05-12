import { FIREBASE_UNKNOWN_ERROR_CODE, FIREBASE_UNKNOWN_ERROR_MESSAGE } from "@/constants/Firebase";
import { FirebaseError, FirebaseReponse, ResponseStatus, User } from "@/types/Firebase";
import { auth } from "@/utils/firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

type SignInRepsonse =
  | (FirebaseReponse & { status: ResponseStatus.SUCCESS; user: User })
  | (FirebaseReponse & { status: ResponseStatus.ERROR; error: FirebaseError });

export async function signInRequest(email: string, password: string): Promise<SignInRepsonse> {
  return signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;

      const reponse: SignInRepsonse = {
        status: ResponseStatus.SUCCESS,
        user: {
          uid: user.uid,
          name: user.displayName ?? "-",
          email: user.email ?? "-",
        },
      };

      return reponse;
    })
    .catch(error => {
      const reponseError: SignInRepsonse = {
        status: ResponseStatus.ERROR,
        error: {
          code: (error.code as string) ?? FIREBASE_UNKNOWN_ERROR_CODE,
          message: (error.message as string) ?? FIREBASE_UNKNOWN_ERROR_MESSAGE,
        },
      };

      return reponseError;
    });
}
