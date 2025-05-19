import { limit, orderBy, query, QueryConstraint, Timestamp, where } from "firebase/firestore";
import { collections } from "./paths";
import { todayDateTime } from "@/helpers/dates";

export const upcomingVisitsQuery = (userId: string, count?: number) => {
  const queryConstraints: QueryConstraint[] = [
    where("date", ">=", Timestamp.fromDate(todayDateTime())),
    orderBy("date"),
  ];

  if (count) {
    queryConstraints.push(limit(count));
  }

  return query(collections.visitsByUserId(userId), ...queryConstraints);
};

export const exercisesQuery = (userId: string) => {
  const queryConstraints: QueryConstraint[] = [orderBy("date")];

  return query(collections.visitsByUserId(userId), ...queryConstraints);
};

export const visitsByUserIdQuery = (userId: string) => {
  const queryConstraints: QueryConstraint[] = [orderBy("date")];

  return query(collections.visitsByUserId(userId), ...queryConstraints);
};
