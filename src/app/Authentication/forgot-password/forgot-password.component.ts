import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgetPasswordForm:FormGroup
  submitted=false;
  constructor(private formBuilder: FormBuilder) { }

  get f() { return this.forgetPasswordForm.controls; }
  ngOnInit() {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', Validators.required],

  });
  }
  forgetPassword(formValue){
    console.log(formValue);
    this.submitted = true;
        if (this.forgetPasswordForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)')
  }
}
