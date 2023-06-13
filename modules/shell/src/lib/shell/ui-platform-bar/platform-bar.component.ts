import { Component, EventEmitter, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IconButtonComponent } from '../../components/icon-button/icon-button.component';

@Component({
  selector: 'app-platform-bar',
  standalone: true,
  imports: [MatToolbarModule, IconButtonComponent],
  template: `
    <mat-toolbar class="platform-bar-container">
      <div class="platform-bar-left">
        <app-icon-button icon="menu" (event)="event()" />
      </div>
      <div class="platform-bar-middle"></div>
      <div class="platform-bar-right">
        <app-icon-button icon="account_circle" (event)="profileMenuClick()" />
      </div>
    </mat-toolbar>
  `,
  styleUrls: ['./platform-bar.component.scss'],
})
export class PlatformBarComponent {
  @Output() navEvent = new EventEmitter<any>();
  @Output() profileEvent = new EventEmitter<any>();

  event() {
    this.navEvent.emit();
  }

  profileMenuClick() {
    this.profileEvent.emit();
  }
}
