import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  // firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  firstnameFormControl = new FormControl('', [Validators.required]);
  lastnameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  phoneFormControl = new FormControl('', [Validators.required, Validators.pattern(/(\(?[0-9]{3}\)?-?\s?[0-9]{3}-?[0-9]{4})/)]);
  doorFormControl = new FormControl('', [Validators.required]);
  streetoneFormControl = new FormControl('', [Validators.required]);
  streettwoFormControl = new FormControl('');
  cityFormControl = new FormControl('', [Validators.required]);
  stateFormControl = new FormControl('', [Validators.required]);
  pinFormControl = new FormControl('', [Validators.maxLength(6), Validators.minLength(6)]);

  firstFormGroup: FormGroup = new FormGroup({
    firstname: this.firstnameFormControl,
    lastname: this.lastnameFormControl,
    email: this.emailFormControl,
    phone: this.phoneFormControl,
    secPhone: new FormControl(''),
    currentAddress: new FormGroup({
      door: this.doorFormControl,
      street1: this.streetoneFormControl,
      street2: this.streettwoFormControl,
      city: this.cityFormControl,
      state: this.stateFormControl,
      pincode: this.pinFormControl
    },this.AtLeastOneFieldValidator),
    permanentAddress: new FormGroup({
      door: new FormControl('', [Validators.required]),
      street1: new FormControl('', [Validators.required]),
      street2: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.maxLength(6), Validators.minLength(6)])
    },this.AtLeastOneFieldValidator)
  },this.AtLeastOneFieldValidator);
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    this.secondFormGroup = this._formBuilder.group({
      secondaryEducationFormGroup: this._formBuilder.group({
        serialnumber: ['', Validators.required],
        marks: ['', Validators.required],
        schoolname: ['', Validators.required],
        state: ['', Validators.required],
        board: ['', Validators.required]
      }),
      higherEducationFormGroup: this._formBuilder.group({
        serialnumber: ['', Validators.required],
        marks: ['', Validators.required],
        schoolname: ['', Validators.required],
        state: ['', Validators.required],
        board: ['', Validators.required]
      }),
      ugFormGroup: this._formBuilder.group({
        serialnumber: ['', Validators.required],
        marks: ['', Validators.required],
        collegename: ['', Validators.required],
        state: ['', Validators.required],
        universityname: ['', Validators.required]
      }),
      pgFormGroup: this._formBuilder.group({
        serialnumber: [''],
        marks: [''],
        collegename: [''],
        state: [''],
        universityname: ['']
      })
    });
  }

  getEmailErrorMessage() {
    // console.log(param);
    return this.emailFormControl.hasError('required') ? 'You must enter a value' :
      this.emailFormControl.hasError('email') ? 'Not a valid email' : '';
  }
  getPhoneErrorMessage() {
    return this.phoneFormControl.hasError('required') ? 'You must enter a value' :
      this.phoneFormControl.hasError('pattern') ? 'Format must be (xxx) xxx-xxxx' : '';
  }
  getFirstNameErrorMessage() {
    return this.firstnameFormControl.hasError('required') ? 'You must enter First Name' : '';
  }
  getLastNameErrorMessage() {
    return this.lastnameFormControl.hasError('required') ? 'You must enter Last Name' : '';
  }
  recursiveFunction(array){
    for (const control in array) {
      console.log("control", control);
      if(control.constructor.name=="FormGroup"){
        this.recursiveFunction(control);
      }
      // if (group.controls.hasOwnProperty(control) && group.controls[control].valid && group.controls[control].value) {
      //   isAtLeastOne = true;
      //   break;
      // }
    }
  }
  AtLeastOneFieldValidator(group: FormGroup): { [key: string]: any } {
    let isAtLeastOne = false;
    if (group && group.controls) {
      // this.recursiveFunction(group.controls);
      for (const control in group.controls) {
        console.log("control", control);
        // if (group.controls.hasOwnProperty(control) && group.controls[control].valid && group.controls[control].value) {
        //   isAtLeastOne = true;
        //   break;
        // }
      }
    }
    return isAtLeastOne ? null : { 'required': true };
  } 
}
