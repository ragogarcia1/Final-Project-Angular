import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceSecurity } from '../../../core/services/security.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<void>();

  userState!: boolean;
  userSubscription!: Subscription;

  constructor(private _serviceSecurity: ServiceSecurity) { }

  ngOnInit(){
    this.userSubscription = this._serviceSecurity.changeSecurity.subscribe( status => { this.userState = status; } )
  }

  onMenuToggleDispatch() {
    this.menuToggle.emit();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
  }

  logout(){
    this._serviceSecurity.logout();
  }

}
