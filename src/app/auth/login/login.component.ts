import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from '../../shared/services/api.service'
import { AuthService } from '../../shared/services/auth.service'
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})

export class LoginComponent implements OnInit {
  encryptString: string;
  newUser = false;
  loginForm: FormGroup;
  showPass = false;
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
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", [Validators.required]]
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

  login(params: FormGroup<any>) {
    let loginDetails = {
      username: params.value.username,
      password: params.value.password,
    }

    this.authService.login(loginDetails).subscribe((response: any) => {
      if (response?.success) {
        localStorage.setItem('Token', response.accessToken)
        this.router.navigate(['/'])
        this.toastr.success(response.message);
        this.accessToken = response.Token
      } else {
        console.log(response.message);
        this.error.isError = true
        this.error.errorMessage = response.message
      }
    })
  }

  showPasswordHandler() {
    this.showPass = !this.showPass
  }

  rememberMeToggleHandler() {
    this.rememberMe = !this.rememberMe
  }

}
