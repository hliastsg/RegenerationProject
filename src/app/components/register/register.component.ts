import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';
import { PostUserService } from 'src/app/services/post-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private service : PostUserService) { }

  RegisterForm = new FormGroup({})

  response: any;
  msg: any;
  hasError: boolean = true;

  ngOnInit(): void {
    this.RegisterForm = this.fb.group({
      fullName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('^[a-zA-Z]+$') ] ),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPass: new FormControl(''),
      dob: new FormControl('', [Validators.required])
    }, {validators: this.checkPasswords})
  }

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPass')?.value
    return pass === confirmPass ? null : { notSame: true }
  }

  getFormValidationErrors = () => {
    Object.keys(this.RegisterForm.controls).forEach(key => {
        const controlErrors = this.RegisterForm.get(key)?.errors;
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
    this.service.postUser(this.RegisterForm.value).subscribe({
      next: data => {
        this.response = data
      },
      error: error => this.msg = error,
      complete: () => this.msg = 'Request completed'
    });
    console.log(this.response);

  } else {
    alert("Enter your credentials correctly to register")
  }
 }
}
