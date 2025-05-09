import { FirebaseError, FirebaseReponse, User } from "@/types/Firebase";
import { auth } from "@/utils/firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

type SignInRepsonse =
  | (FirebaseReponse & { status: "SUCCESS"; user: User })
  | (FirebaseReponse & { status: "ERROR"; error: FirebaseError });

export async function signInRequest(email: string, password: string): Promise<SignInRepsonse> {
  return signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;

      const reponse: SignInRepsonse = {
        status: "SUCCESS",
        user: {
          uid: user.uid,
          name: user.displayName ?? "-",
          email: user.email ?? "-",
        },
      };

      return reponse;
    })
    .catch(error => {
      const reponse: SignInRepsonse = {
        status: "ERROR",
        error: {
          code: (error.code as string) ?? "unknown-code",
          message: (error.message as string) ?? "unexpected-error",
        },
      };

      return reponse;
    });
}
