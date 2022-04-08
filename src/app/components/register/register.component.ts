import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';
import { PostUserService } from 'src/app/services/post-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private service : PostUserService, private router: Router) { }

  RegisterForm = new FormGroup({});
  PaymentForm = new FormGroup({});

  response: any;
  msg: any;

  hasError: boolean = true;
  payError: boolean = true

  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.RegisterForm = this.fb.group({
      fullName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('^[a-zA-Z]+$') ] ),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPass: new FormControl(''),
      dob: new FormControl('', [Validators.required])
    }, {validators: this.checkPasswords})

    this.PaymentForm = this.fb.group({
      card: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$') ] ),
      cardHolder: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      expireDate: new FormControl(Date, [Validators.required]),
    });
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

  getPaymentValidationErrors = () => {

    Object.keys(this.PaymentForm.controls).forEach(key => {
        const controlErrors = this.PaymentForm.get(key)?.errors;
      if (controlErrors != null) {
        return this.payError = true;
      } else {
        return this.payError = false;
      }
    });
    this.getPaymentValidationErrors();
  }

 onSubmit() {
   this.getFormValidationErrors();
  if (!this.hasError || !this.payError) {
    this.service.postUser(this.RegisterForm.value).subscribe({
      next: data => {
        this.response = data
      },
      error: error => this.msg = error,
      complete: () => this.msg = 'Request completed'
    });
    console.log(this.response);
    this.router.navigate(['/', 'dashboard']);
  } else {
    alert("Fill all the fields correctly to register")
  }
  if (this.isChecked1 && this.isChecked2 && this.isChecked3) {
    alert("Choose only one plan")
  }
 }
}
