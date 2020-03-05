import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username
  password
  loginForm: FormGroup;
  submitted = false;
  keepmeLogin
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      keepmeLogin: ['']
    });
  }
  get f() { return this.loginForm.controls; }
  goToRegistraion() {
    this.router.navigate(['registration']);
    console.log("this is me");

    // this.router.navigate["registration"]
  }
  login(formValue) {
    console.log(formValue);
    console.log(this.keepmeLogin);
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    else if (formValue.username == "santosh" && formValue.password == "123456") {
      this.router.navigate(['home/pipe']);
      alert('SUCCESS!! :-)');

    }

  }
}
