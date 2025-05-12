export enum ResponseStatus {
  SUCCESS,
  ERROR,
}

export type FirebaseReponse = {
  status: ResponseStatus;
};

export type FirebaseError = { code: string; message: string };

export type User = { uid: string; name: string; email: string };
