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

@Component({
  selector: 'alumn',
  templateUrl: './alumn.component.html',
  styleUrls: ['./alumn.component.css']
})

export class AlumnComponent implements OnInit, OnDestroy {

  deployColumns = ['FullName','Code','Identification', 'Courses', 'State', 'Action'];

  listAlumns!: any;


  private alumnSubscription!: Subscription;

  constructor(private _alumnService: AlumnService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this._alumnService.getAlumns().subscribe((alumns: Alumn) =>{
      this.listAlumns = alumns;
    })
  }

  ngOnDestroy(): void {
    this.alumnSubscription.unsubscribe();
  }

  removeAlumn(id: number){
    this._alumnService.deleteAlumn(id);
  }

  openDialog(alumn?: Alumn){
    this.dialog.open(FormAlumnComponent, {
      width: '350px',
      data: alumn
    });
  }
}
