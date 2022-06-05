import { Course } from "./course.model";

export interface CourseState{
    load: boolean;
    courses: Course[];
}
