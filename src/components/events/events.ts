import { Component } from '@angular/core';

/**
 * Generated class for the EventsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'events',
  templateUrl: 'events.html'
})
export class EventsComponent {

  text: string;

  constructor() {
    console.log('Hello EventsComponent Component');
    this.text = 'Hello World';
  }

}
