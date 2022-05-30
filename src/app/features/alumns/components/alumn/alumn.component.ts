import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
//Components
import { FormAlumnComponent } from '../form-alumn/form-alumn.component';
//Models
import { Alumn } from 'src/app/core/models/alumn.model';
//Services
import { AlumnService } from 'src/app/core/services/alumn.service';
//MaterialUI
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormAlumnCreateComponent } from '../form-alumn-create/form-alumn-create.component';
import { CourseService } from '../../../../core/services/course.service';

@Component({
  selector: 'alumn',
  templateUrl: './alumn.component.html',
  styleUrls: ['./alumn.component.css']
})

export class AlumnComponent implements OnInit, OnDestroy {

  deployColumns = ['FullName','Code','Identification', 'Courses', 'State', 'Action'];

  listAlumns!: any;

  currentCourses!: any;

  private alumnSubscription!: Subscription;

  constructor(private _alumnService: AlumnService,
              private dialog: MatDialog,
              private courseService: CourseService) {

  }

  async ngOnInit() {
    this.currentCourses = await this.courseService.getCourses();
  }

  ngOnDestroy(): void {
    if(this.alumnSubscription){
      this.alumnSubscription.unsubscribe();
    }
  }

  removeAlumn(id: number){
    this._alumnService.deleteAlumn(id).subscribe( response => console.log(response))
  }

  openDialogEdit(){
    this.dialog.open(FormAlumnComponent, {
      width: '450px'
    });
  }

  openDialogCreate(){
    this.dialog.open(FormAlumnCreateComponent, {
      width: '450px',
      data: this.currentCourses
    })
  }
}
