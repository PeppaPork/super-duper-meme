import { Component, OnInit } from '@angular/core';

// add firebase and form control
import * as firebase from 'Firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  // firebase var
  ref = firebase.database().ref('infos/');
  infoForm: FormGroup;

  // initialize the info FormBuilder

  constructor(private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
    this.infoForm = this.formBuilder.group({
      'info_title': [null, Validators.required],
      'info_description': [null, Validators.required]
    });
  }

  // post the form data to the Firebase Real-time Database
  saveInfo() {
    let newInfo = firebase.database().ref('infos/').push();
    newInfo.set(this.infoForm.value);
    this.router.navigate(['/detail/' + newInfo.key]);
  }

  ngOnInit() {
  }

}
