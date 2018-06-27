import { Component } from '@angular/core';
import { GetDataFromSpringProvider } from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the ClassesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'classes',
  templateUrl: 'classes.html'
})
export class ClassesComponent {

  text: string;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController) {
    console.log('Hello ClassesComponent Component');
    this.text = 'Hello World';
  }

}
