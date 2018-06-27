import { Component } from '@angular/core';
import { GetDataFromSpringProvider } from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { GroupsComponent } from '../groups/groups';
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

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController) {
    console.log('Hello AddGroupsComponent Component');
    this.text = 'Hello World';
  }

  addGroup(){
    console.log("Add Group ");
    this.springData.addGroup(this.groupName).subscribe(
      data => {
        console.log("in subscribe to data of add Group");

        this.result= data.result;
        this.navCtrl.push(GroupsComponent);
      },
      err => console.error(err),
      () => console.log('add Group completed')
    );

  }


}
