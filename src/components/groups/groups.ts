import { Component } from '@angular/core';
import { GetDataFromSpringProvider } from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { EditGroupsComponent} from '../../components/edit-groups/edit-groups';
import { AddGroupsComponent} from '../../components/add-groups/add-groups';

/**
 * Generated class for the GroupsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'groups',
  templateUrl: 'groups.html'
})
export class GroupsComponent {

  text: string;
  public groupList;
  myDate: String = new Date().toISOString();

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController) {
    console.log('Hello GroupsComponent Component');
    this.text = 'Hello World';

  }

  getGroupList(){
    //get all the kids list from DB first
    this.springData.getGroups(this.myDate).subscribe(
      data => {


        this.groupList= data.groupList;

      },
      err => console.error(err),
      () => console.log('getGroupList completed')
    );


  }

  goToEditGroupDetails(selectedGroup) {
    console.log("edit group");
    this.navCtrl.push(EditGroupsComponent, {selectedGroup:selectedGroup});
  }

  addGroup(){
    console.log("add Group");
    this.navCtrl.push(AddGroupsComponent);

  }


}
