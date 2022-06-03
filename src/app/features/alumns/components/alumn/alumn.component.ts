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

  constructor(private dialog: MatDialog,
              private alumnService: AlumnService) {
  }

  async ngOnInit() {
    await this.alumnService.getAlumns()
    this.alumnService.listAlumns$.subscribe((alumns: any) => {
      this.listAlumns = alumns;
    })
  }

  ngOnDestroy(): void {
    if(this.alumnSubscription){
      this.alumnSubscription.unsubscribe();
    }
  }

  removeAlumn(id: number){
    this.alumnService.deleteAlumn(id);
  }

  openDialogEdit(alumn: any){
    this.dialog.open(FormAlumnComponent, {
      width: '450px',
      data: alumn
    });
  }

  openDialogCreate(){
    this.dialog.open(FormAlumnCreateComponent, {
      width: '450px',
      data: this.currentCourses
    })
  }
}
