export interface Class {
  _id?: string;
  className?: string;
  sectionNumber?: number;
  classOwner?: string;
  classDays?: string;
  classTime?: string;
  classCheckInStartTime?: string;
  classCheckInEndTime?: string;
}

export interface User {
  _id?: string;
  redID?: number;
  userName?: string;
  userEmail?: string;
  isProfessor?: boolean;
}
