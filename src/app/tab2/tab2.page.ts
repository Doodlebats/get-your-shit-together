import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { GoalService } from '../services/goal.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoService: PhotoService,
              public goalService: GoalService) { }

addPhotoToGallery() {
  this.photoService.addNewToGallery();
}
async ngOnInit() {
  await this.photoService.loadSaved();
}

addAccountability(){
  //this should open a window with your friends which you can attach to the goal to help keep you accountable.
  console.log("You have no friends");
  window.alert("you have no friends");
}

addGoal(){
  this.goalService.createNewGoal();
}
}
