import { dataPoint } from "./firestoreHelpers";
import { VisitFirestore } from "./types";

export const collections = {
  visitsByUserId: (userId: string) => dataPoint<VisitFirestore>(`users/${userId}/visits`),
};
