import { Component } from '@angular/core';

/**
 * Generated class for the ManageClassesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'manage-classes',
  templateUrl: 'manage-classes.html'
})
export class ManageClassesComponent {

  text: string;

  constructor() {
    console.log('Hello ManageClassesComponent Component');
    this.text = 'Hello World';
  }

}
