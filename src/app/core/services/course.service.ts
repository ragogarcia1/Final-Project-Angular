import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Course } from "../models/course.model";

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  UrlServiceCourse: string = 'https://625f17ca873d6798e2b2ca9c.mockapi.io/Prject/api/Course';

  listCourses = new BehaviorSubject<any>(null);
  listCourses$ = this.listCourses.asObservable();

  courseSubject = new Subject<Course>();

  constructor(private httpClient: HttpClient){}

  setCourses(data: any){
    this.listCourses.next(data);
  }

  async getCourses(): Promise<any>{
     const response = await this.httpClient.get<Course>(this.UrlServiceCourse).toPromise();
     if (response) { this.setCourses(response)}
     return response
  }

  async createCourse(course: Course): Promise<any>{
    const response =  await this.httpClient.post<Course>(this.UrlServiceCourse, course).toPromise();
    if (response) { await this.getCourses(); }
    return response;
 }

  async deleteCourse(id: number):Promise<any> {
    const response = await this.httpClient.delete<any>(`${this.UrlServiceCourse}/${id}`).toPromise();
    if(response) {await this.getCourses() }
    return response
  }

  async editCourse(course: Course, id: any): Promise<any> {
    const response = await this.httpClient.put<Course>(`${this.UrlServiceCourse}/${id}`, course).toPromise();
    if (response) { await this.getCourses(); }
  }
}
