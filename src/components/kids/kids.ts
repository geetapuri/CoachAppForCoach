import { Component, OnInit } from '@angular/core';
import { GetDataFromSpringProvider } from '../../providers/get-data-from-spring/get-data-from-spring';
import {  NavController, NavParams } from 'ionic-angular';
import { EditKidComponent } from '../edit-kid/edit-kid';
import { AddKidComponent } from '../add-kid/add-kid';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the KidsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'kids',
  templateUrl: 'kids.html'
})
export class KidsComponent implements OnInit{
  ngOnInit(){
    this.getKidsList();

  }
  text: string;
  public kidList;
  public coach;
  public user;

  constructor(private springData: GetDataFromSpringProvider,public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello KidsComponent Component');
    this.text = 'Hello World';
    this.coach= this.navParams.get('coach');
    this.user = this.navParams.get('role');
    console.log("in constructor, coach ID = " + this.coach[0].coachID);
  }

  getKidsList(){
    //get all the kids list from DB first
    this.springData.getKidInfo(this.coach).subscribe(
      data => {


        this.kidList= data.kidList;

      },
      err => console.error(err),
      () => console.log('getKidsList completed')
    );


  }



  addKids(){
    console.log("add kid");
    this.navCtrl.push(AddKidComponent, {coach:this.coach, role:this.user});

  }

  goToEditKidDetails(selectedKid) {
    console.log("edit kid");
    console.log("pushing coach ID as " + this.coach[0].coachID);
    this.navCtrl.push(EditKidComponent, {coach:this.coach,selectedKid:selectedKid, role:this.user });
  }

  goBackHome(){
    console.log("going back to home page");
    this.navCtrl.push(HomePage, {coach:this.coach, role:this.user});
  }

}
