import { FIREBASE_UNKNOWN_ERROR_CODE, FIREBASE_UNKNOWN_ERROR_MESSAGE } from "@/constants/Firebase";
import { FirebaseReponse, ResponseStatus } from "@/types/Firebase";
import { Visit } from "@/types/Visit";
import { collections } from "@/utils/firebase/collections";
import {
  getDocs,
  limit,
  orderBy,
  query,
  QueryConstraint,
  Timestamp,
  where,
} from "firebase/firestore";

type getUpcomingVisitsRequestType = {
  userId: string;
  count?: number;
};

export async function getUpcomingVisitsRequest({
  userId,
  count,
}: getUpcomingVisitsRequestType): Promise<FirebaseReponse<Visit[]>> {
  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    0
  );
  const queryConstraints: QueryConstraint[] = [
    where("date", ">=", Timestamp.fromDate(startOfToday)),
    orderBy("date"),
  ];
  if (count) {
    queryConstraints.push(limit(count));
  }

  const queryBuilder = query(collections.visitsByUserId(userId), ...queryConstraints);

  try {
    const snapshot = await getDocs(queryBuilder);

    const visits: Visit[] = snapshot.docs.map(doc => ({
      id: doc.id,
      doctor: {
        name: doc.data().doctor.name,
        profession: doc.data().doctor.profession,
      },
      date: doc.data().date.toDate(),
      createdAt: doc.data().createdAt.toDate(),
      isOnline: doc.data().isOnline,
      location: doc.data().location,
      comment: doc.data().comment,
    }));

    return {
      status: ResponseStatus.SUCCESS,
      payload: visits,
    };
  } catch (error: any) {
    const reponseError: FirebaseReponse<Visit[]> = {
      status: ResponseStatus.ERROR,
      error: {
        code: (error.code as string) ?? FIREBASE_UNKNOWN_ERROR_CODE,
        message: (error.message as string) ?? FIREBASE_UNKNOWN_ERROR_MESSAGE,
      },
    };

    return reponseError;
  }
}
