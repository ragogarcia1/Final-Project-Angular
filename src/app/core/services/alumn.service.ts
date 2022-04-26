import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, tap } from "rxjs";
import { Alumn } from "../models/alumn.model";

@Injectable({
  providedIn: 'root'
})

export class AlumnService {

  listAlumns!: Alumn[];
  UrlServiceAlumn: string = 'https://625f17ca873d6798e2b2ca9c.mockapi.io/Prject/api/Alumn/';
  alumnsSubject = new Subject<Alumn>();

  constructor(private httpClient: HttpClient){  }

  getAlumns(): Observable<Alumn>{
     return this.httpClient.get<Alumn>(this.UrlServiceAlumn);
  }

  createAlumn(alumn: Alumn): Observable<Alumn> {
    return this.httpClient.post<Alumn>(this.UrlServiceAlumn, alumn)
      .pipe(
        tap(() => {
          this.listAlumns.push(alumn);
        })
      )
  }

  deleteAlumn(id: number) {
    return this.httpClient.delete(`${this.UrlServiceAlumn}${id}`);
  }

}
