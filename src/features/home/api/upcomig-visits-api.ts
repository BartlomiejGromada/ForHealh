import { FIREBASE_UNKNOWN_ERROR_CODE, FIREBASE_UNKNOWN_ERROR_MESSAGE } from "@/constants/Firebase";
import { FirebaseReponse, ResponseStatus } from "@/types/Firebase";
import { Visit } from "@/types/Visit";
import { getCountFromServer, getDocs, limit, query, QueryConstraint } from "firebase/firestore";
import { upcomingVisitsQuery } from "../../../utils/firebase/queries";

type getUpcomingVisitsRequestType = {
  userId: string;
  count?: number;
};

export async function getUpcomingVisitsRequest({
  userId,
  count,
}: getUpcomingVisitsRequestType): Promise<FirebaseReponse<Visit[]>> {
  const queryBase = upcomingVisitsQuery(userId);

  let queryConstraints: QueryConstraint[] = [];
  if (count) {
    queryConstraints.push(limit(count));
  }

  const queryBuilder = query(queryBase, ...queryConstraints);

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

type getUpcomingVisitsCountRequestType = {
  userId: string;
};

export async function getUpcomingVisitsCountRequest({
  userId,
}: getUpcomingVisitsCountRequestType): Promise<FirebaseReponse<number>> {
  const queryBase = upcomingVisitsQuery(userId);

  try {
    const snapshot = await getCountFromServer(queryBase);

    return {
      status: ResponseStatus.SUCCESS,
      payload: snapshot.data().count,
    };
  } catch (error: any) {
    const reponseError: FirebaseReponse<number> = {
      status: ResponseStatus.ERROR,
      error: {
        code: (error.code as string) ?? FIREBASE_UNKNOWN_ERROR_CODE,
        message: (error.message as string) ?? FIREBASE_UNKNOWN_ERROR_MESSAGE,
      },
    };

    return reponseError;
  }
}
