import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Course } from "../models/course.model";

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  listCourse!: Course[];
  courseSubject = new Subject<Course>();

  constructor(private httpClient: HttpClient){

  }

  public UrlServiceCourse: string = 'https://625f17ca873d6798e2b2ca9c.mockapi.io/Prject/api/Course/';


  getCourses(): Observable<Course>{
     return this.httpClient.get<Course>(this.UrlServiceCourse);
  }

  // createCourse(course: Course): Observable<Course> {

  // }

  deleteCourse(id: number) {
    return this.httpClient.delete(`${this.UrlServiceCourse}${id}`);
  }

}
