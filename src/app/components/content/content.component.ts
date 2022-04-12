import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnService } from '../../services/alumn.service';
import { Alumn } from '../../models/alumn.model';
import { MatDialog } from '@angular/material/dialog';
import { FormAlumnComponent } from '../form-alumn/form-alumn.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit, OnDestroy {

  deployColumns = ['FullName','Code','Identification', 'Courses', 'State', 'Action'];
  alumns = new MatTableDataSource<Alumn>();
  private alumnSubscription!: Subscription;

  constructor(private _alumnService: AlumnService,
              private dialog: MatDialog) { }

  ngOnInit() {

    this.alumns.data = this._alumnService.getAlumns();
    this.alumnSubscription = this._alumnService.alumnsSubject.subscribe(() => {
      this.alumns.data = this._alumnService.getAlumns();
    });
  }

  ngOnDestroy(): void {
    this.alumnSubscription.unsubscribe();
  }

  removeAlumn(alumn: Alumn) {
    this._alumnService.deleteAlumn(alumn);
  }

  openDialog(alumn?: Alumn){
    this.dialog.open(FormAlumnComponent, {
      width: '350px'
    });
  }
}
