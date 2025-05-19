import { DoctorProfession } from "@/types/Visit";
import { Timestamp } from "firebase/firestore";

export type VisitFirestore = {
  doctor: {
    name: string;
    profession: DoctorProfession;
  };
  date: Timestamp;
  createdAt: Timestamp;
  location: string;
  comment: string;
};

export type ExerciseFirestore = {
  name: string;
};
