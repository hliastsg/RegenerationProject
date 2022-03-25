import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  RegisterForm = new FormGroup({})

  ngOnInit(): void {
    this.RegisterForm = this.fb.group({
      fullName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
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

  onSubmit() {

  }
}
