import { AuthentificationService } from './../../services/authentification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authentificationService: AuthentificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initSigninForm();
  }

  initSigninForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmitSigninForm() {
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    this.authentificationService.signInUser(email, password).then(
      (data) => {
        this.router.navigate(['/admin', 'dashboard']);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    );
  }

}
