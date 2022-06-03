import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Alumn } from "../models/alumn.model";

@Injectable({
  providedIn: 'root'
})

export class AlumnService {
  UrlServiceAlumn: string = 'https://625f17ca873d6798e2b2ca9c.mockapi.io/Prject/api/Alumn';

  listAlumns = new BehaviorSubject<any>(null);
  listAlumns$ = this.listAlumns.asObservable();
  alumnsSubject = new Subject<Alumn>();

  constructor(private httpClient: HttpClient){  }

  async getAlumns(): Promise<any>{
     const response = await this.httpClient.get<Alumn>(this.UrlServiceAlumn).toPromise();
     if (response) { this.setAlumns(response) }
     console.log(this.listAlumns)
  }

  setAlumns(alumnData: any){
    this.listAlumns.next(alumnData);
  }

  async createAlumn(alumn: Alumn): Promise<any>{
    debugger
     const response =  await this.httpClient.post<Alumn>(this.UrlServiceAlumn, alumn).toPromise();
     if (response) { await this.getAlumns(); }
     return response;
  }

  async deleteAlumn(id: number): Promise<any> {
    const response = await this.httpClient.delete<any>(`${this.UrlServiceAlumn}/${id}`).toPromise();
    if (response) { await this.getAlumns(); }
  }

  async editAlumn(alumn: Alumn){

  }
}
