import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/shared/services/api.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  encryptString: string;
  newUser = false;
  signupForm: FormGroup;
  showPass = false;
  showConfirm = false;
  error:
    { isError: boolean; errorMessage: string }
    = { isError: false, errorMessage: '' };
  data: any;
  captchImg: string;
  captchaHashKey: string;
  rememberMe: boolean;
  accessToken: string;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private api: ApiService,
    private authService: AuthService,
    private toastr: ToastrService,
    private activatedRout: ActivatedRoute,
  ) {
    this.signupForm = this.fb.group({
      username: ["", [Validators.required, Validators.pattern(/^[a-z0-9]+.{4,}$/)]],
      password: ["", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/),]],
      confirmPassword: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]]
    },
      {
        validators: this.passwordMatchValidator
      });
  }

  ngOnInit() {
    this.activatedRout.data.subscribe(
      (response: any) => {
        this.captchImg = `data:image/jpg;base64,${response.image}`
        this.captchaHashKey = response.hashKey
      }
    );
  }

  signup(params: FormGroup<any>) {
    let signpuDetails = {
      username: params.value.username,
      password: params.value.password,
      email: params.value.email
    }

    this.authService.signup(signpuDetails).subscribe((response: any) => {
      if (response?.success) {
        localStorage.setItem('Token', response.accessToken)
        this.router.navigate(['/'])
        this.toastr.success('ثبت نام شما با موفقیت انجام شد!');
        this.accessToken = response.Token
      } else {
        console.log(response.message);
        this.error.isError = true
        this.error.errorMessage = response?.message
      }
    })
  }

  showPasswordHandler() {
    this.showPass = !this.showPass
  }

  rememberMeToggleHandler() {
    this.rememberMe = !this.rememberMe
  }

  showConfirmPassHandler() {
    this.showConfirm = !this.showConfirm
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;

    if (password !== confirmPassword) {
      group.get('confirmPassword').setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    group.get('confirmPassword').setErrors(null);
    return null;
  }
}
