export type FirebaseReponse = {
  status: "SUCCESS" | "ERROR";
};

export type FirebaseError = { code: string; message: string };

export type User = { uid: string; name: string; email: string };
