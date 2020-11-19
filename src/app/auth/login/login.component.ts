import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

import { AuthService, Logindata } from '../auth.service';


@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  credentials: Logindata = {
    email: '',
    password: ''
  }

  loginForm: FormGroup;
  errors:any[]=[];

  constructor(private fb: FormBuilder,
              private router:Router,
              private auth:AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      
      email: ['', [Validators.required,
                          Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      
      password: ['', Validators.required]
    })
  }

  isInvalidForm(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
           (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched)
  }

  isRequired(fieldName): boolean {
    return this.loginForm.controls[fieldName].errors.required
  }

  login(){
    console.log(this.credentials)
    this.auth.login(this.credentials).subscribe(
      ()=>{
        this.router.navigate(['/home']);
      },
      err =>{
        console.log(err)


      }
    )
  }
}