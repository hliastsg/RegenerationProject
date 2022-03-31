import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PostUserService } from 'src/app/services/post-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: PostUserService, private router: Router) { }

  LoginForm = new FormGroup({});
  hasError: boolean = true;
  response: any;
  msg: any;

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  getFormValidationErrors = () => {
    Object.keys(this.LoginForm.controls).forEach(key => {
        const controlErrors = this.LoginForm.get(key)?.errors;
      if (controlErrors != null) {
        return this.hasError = true;
      } else {
        return this.hasError = false;
      }
    });
  }

  onSubmit() {
    this.getFormValidationErrors();
  if (!this.hasError) {
    this.service.postUser(this.LoginForm.value).subscribe({
      next: data => {
        this.response = data
      },
      error: error => this.msg = error,
      complete: () => this.msg = 'Request completed'
    });
    console.log(this.response);
    this.router.navigate(['/', 'dashboard']);

  } else {
    alert("Enter your credentials correctly to sign in")
  }
  }

}
