export interface Course {
  CourseId: number;
  Name: string;
  Description: string;
  Duration: Date;
  DateInit: string;
  Teacher?: {};
  Students?: [];
}
