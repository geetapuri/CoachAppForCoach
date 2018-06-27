import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { GetDataFromSpringProvider } from '../../providers/get-data-from-spring/get-data-from-spring';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login',
  templateUrl: 'login.html',
  providers : [GetDataFromSpringProvider]
})
export class LoginComponent {

  text: string;
  credentials = {username: 'admin', password: 'password'};
  public user;

  constructor(private springData: GetDataFromSpringProvider, private http: HttpClient, public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello LoginComponent Component');
    this.text = 'Hello Geeta s World';
  }

  login() {
    //alert("calling login fn");
    this.springData.authenticate(this.credentials).subscribe(
      data => {
        this.user = data.user;
        console.log('user name received = '+ data.user.name);
        this.springData.authenticated=true;
        this.navCtrl.push(HomePage, {role:data.user.name});
      },
      err => console.error(err),
      () => console.log('login completed')
    );

  }

}
