import { collections } from "@/utils/firebase/collections";
import { orderBy, query, QueryConstraint, Timestamp, where } from "firebase/firestore";

export const upcomingVisitsQuery = (userId: string) => {
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

  return query(collections.visitsByUserId(userId), ...queryConstraints);
};
