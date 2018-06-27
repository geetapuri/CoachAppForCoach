import { Component } from '@angular/core';

/**
 * Generated class for the GetScheduleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'get-schedule',
  templateUrl: 'get-schedule.html'
})
export class GetScheduleComponent {

  text: string;

  constructor() {
    console.log('Hello GetScheduleComponent Component');
    this.text = 'Hello World';
  }

}
