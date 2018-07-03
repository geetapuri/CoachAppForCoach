import { Component } from '@angular/core';
import { GetDataFromSpringProvider} from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { GroupsComponent} from '../../components/groups/groups';


/**
 * Generated class for the EditGroupsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit-groups',
  templateUrl: 'edit-groups.html'
})
export class EditGroupsComponent {

  text: string;
  public group;
  public result;
  public coach;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController,public navParams: NavParams) {
    console.log('Hello EditGroupsComponent Component');
    this.text = 'Hello World';
    this.group= this.navParams.get('selectedGroup');
    console.log("group name now =" + this.group.groupName);
    this.coach= this.navParams.get('coach');
    console.log("in construct of EditGroups, coachID = " + this.coach[0].coachID);

  }

  saveGroupInfo(){
    console.log("save group Info");
    this.springData.updateGroup(this.group).subscribe(
      data => {

        this.result=data.result;
        this.navCtrl.push(GroupsComponent, {coach:this.coach});

      },
      err => console.error(err),
      () => console.log('saveKidInfo completed')

    );
  }

}
