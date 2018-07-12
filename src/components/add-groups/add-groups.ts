import { Component } from '@angular/core';
import { GetDataFromSpringProvider } from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { GroupsComponent } from '../groups/groups';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the AddGroupsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-groups',
  templateUrl: 'add-groups.html'
})
export class AddGroupsComponent {

  text: string;
  public groupName;
  public result;
  public coach;
  public user;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello AddGroupsComponent Component');
    this.text = 'Hello World';
    this.coach = this.navParams.get('coach');
    this.user = this.navParams.get('role');
  }

  addGroup(){
    console.log("Add Group ");
    this.springData.addGroup(this.groupName, this.coach).subscribe(
      data => {
        console.log("in subscribe to data of add Group");

        this.result= data.result;
        this.navCtrl.push(HomePage, {coach:this.coach, role:this.user});
      },
      err => console.error(err),
      () => console.log('add Group completed')
    );

  }


}
