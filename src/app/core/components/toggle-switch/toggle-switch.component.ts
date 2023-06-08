import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.css']
})
export class ToggleSwitchComponent {

  @Input() public isOn: boolean = true;
  @Input() public onChange: () => void = () => {
    console.log("toggled")
  };

  constructor() {
    console.log(this.isOn);
  }

}
