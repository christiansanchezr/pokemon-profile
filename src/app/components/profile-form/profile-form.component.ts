import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent {
  @Output()onContinue = new EventEmitter<boolean>();


  continue(event: any) {
    event.preventDefault();
    this.onContinue.emit(true);
  }
}
