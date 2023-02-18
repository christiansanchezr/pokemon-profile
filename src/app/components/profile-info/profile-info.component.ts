import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent {
  @Input() showUpload: boolean = false;
  @Input() hobbie?: string;
  @Input() age?: number;
  @Input() dui?: string;
  @Input() title?: string;
  @Input() titleIconSrc?: string;

  constructor() {}

}
