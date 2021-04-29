import { Component, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public myForm: FormGroup;
  private comment: number = 1;
  
  public myForm2: FormGroup;
  private comment2: number = 1;

  public myForm3: FormGroup;
  private comment3: number = 1;

  constructor(private formBuilder: FormBuilder) {

    this.myForm = formBuilder.group({
      comment7: ['', Validators.required]
    });
    this.myForm2 = formBuilder.group({
      comment8: ['', Validators.required]
    });
    this.myForm3 = formBuilder.group({
      comment9: ['', Validators.required]
    });
   }

  addComment(){
    this.comment++;
    this.myForm.addControl('player' + this.comment, new FormControl('', Validators.required));
  }

  addComment2(){
    this.comment2++;
    this.myForm2.addControl('player' + this.comment2, new FormControl('', Validators.required));
  }
  
  addComment3(){
    this.comment3++;
    this.myForm3.addControl('player' + this.comment3, new FormControl('', Validators.required));
  }


}
