import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { Alumn } from "../models/alumn.model";

@Injectable({
  providedIn: 'root'
})

export class AlumnService {

  listAlumns: Alumn[] = [{
    Id: 1,
    FullName: "Leodora Sockell",
    Identification: "1764836324",
    Code: "8906",
    Course: "Angular",
    State: true,
    AdmissionDate: new Date("2021-06-12 03:33:42")
  }, {
    Id: 2,
    FullName: "Abe Melluish",
    Identification: "7389215968",
    Code: "912",
    Course: "Javascript",
    State: false,
    AdmissionDate: new Date("2021-08-16 08:19:20")
  }, {
    Id: 3,
    FullName: "Doroteya Tomek",
    Identification: "7648054884",
    Code: "890",
    Course: "IOT",
    State: true,
    AdmissionDate: new Date("2022-01-10 07:05:50")
  }, {
    Id: 4,
    FullName: "Merwin Cescon",
    Identification: "1902052951",
    Code: "46429",
    Course:"PHP",
    State: false,
    AdmissionDate: new Date("2021-07-23 01:51:09")
  }, {
    Id: 5,
    FullName: "Selinda Dilworth",
    Identification: "7928064251",
    Code: "7621",
    Course: "CSS",
    State: true,
    AdmissionDate: new Date("2021-10-28 22:51:42")
  }];

  alumnsSubject = new Subject<Alumn>();


  addAlumn(alumn: Alumn) {
    this.listAlumns.push(alumn);
    this.alumnsSubject.next(alumn);
  }

  getAlumns(){
    return this.listAlumns.slice()
  }

  deleteAlumn(alumn: any) {
    this.listAlumns = this.listAlumns.filter( b => b !== alumn);
    this.alumnsSubject.next(alumn);
  }

}
