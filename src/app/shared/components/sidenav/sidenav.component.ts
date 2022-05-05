import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceSecurity } from '../../../core/services/security.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Output() menuToggle = new EventEmitter<void>();
  userState: boolean = false;
  userSubscription!: Subscription;

  constructor(private _serviceSecurity: ServiceSecurity) { }

  ngOnInit(): void {
    this.userSubscription = this._serviceSecurity.changeSecurity.subscribe( state => this.userState = state);
  }

  onClose() {
    this.menuToggle.emit();
  }

  logout(){
    this.onClose();
    this._serviceSecurity.logout();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
