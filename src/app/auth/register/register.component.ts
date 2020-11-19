import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import { AuthService, UserData } from '../auth.service';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  credentials: UserData = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
   
  }

  registerForm: FormGroup;
  errors:any[]=[];

 
  constructor(private fb: FormBuilder,
              private router:Router,
              private auth: AuthService) { }

  ngOnInit(){
    this.initForm();
  }

  initForm():void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required,
        Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: ['', [Validators.required,Validators.minLength(7)]]
    })
  }

  isInvalidForm(fieldName): boolean {
    return this.registerForm.controls[fieldName].invalid &&
           (this.registerForm.controls[fieldName].dirty || this.registerForm.controls[fieldName].touched)
  }

  isRequired(fieldName): boolean {
    return this.registerForm.controls[fieldName].errors.required
  }

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        console.log(this.credentials)
        this.router.navigateByUrl('/login')
      },
      err => {
        console.error(err)
      }
    )
  } 

}
