import { Component } from '@angular/core';

/**
 * Generated class for the PerformanceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'performance',
  templateUrl: 'performance.html'
})
export class PerformanceComponent {

  text: string;

  constructor() {
    console.log('Hello PerformanceComponent Component');
    this.text = 'Hello World';
  }

}
