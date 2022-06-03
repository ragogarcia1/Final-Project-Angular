import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Course } from "../models/course.model";

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  UrlServiceCourse: string = 'https://625f17ca873d6798e2b2ca9c.mockapi.io/Prject/api/Course/';

  listCourses = new BehaviorSubject<any>(null);
  listCourses$ = this.listCourses.asObservable();

  courseSubject = new Subject<Course>();

  constructor(private httpClient: HttpClient){

  }



  async getCourses(): Promise<any>{
     const response = await this.httpClient.get<Course>(this.UrlServiceCourse).toPromise();
     if (response) { this.setCourses(response)}
     return response
  }

  setCourses(data: any){
    this.listCourses.next(data);
  }

  deleteCourse(id: number) {
    const response = this.httpClient.delete(`${this.UrlServiceCourse}${id}`)

    return response
  }

}
