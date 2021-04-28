import { Injectable } from '@angular/core';
import { Plugins, Capacitor, FilesystemDirectory} from '@capacitor/core';
const { Filesystem, Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor() { }

  createNewGoal(){
    //this is where the new goal will be made public in your profile page.
    console.log("New goal coming up");
  }


}
