export interface Class {
  _id?: string;
  className?: string;
  sectionNumber?: number;
  classOwner?: string;
}

export interface User {
  _id?: string;
  studentName?: string;
  isProfessor?: boolean;
}
