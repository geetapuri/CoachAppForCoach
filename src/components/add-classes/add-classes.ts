import { Component } from '@angular/core';
import { GetDataFromSpringProvider } from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the AddClassesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-classes',
  templateUrl: 'add-classes.html'
})
export class AddClassesComponent {

  text: string;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController) {
    console.log('Hello AddClassesComponent Component');
    this.text = 'Hello World';
  }

}
