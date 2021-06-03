import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  isLoginMode = true;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // const email = form.value.email;
      // const password = form.value.password;

      // let authObs: Observable<AuthResponseData>;

      // // this.isLoading = true;

      // if (this.isLoginMode) {
      //   authObs = this.authService.login(email, password);
      // } else {
      //   authObs = this.authService.signup(email, password);
      // }
  }

  onSwitchMode() {
      this.isLoginMode = !this.isLoginMode
  }

}
