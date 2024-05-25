import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { FileUploadService } from 'src/app/shared/services/file-upload.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: 'edit-profile.component.html',
  styleUrl: 'edit-profile.component.scss'
})
export class EditProfileComponent {
  editProfileForm: FormGroup;
  showUpload = true;
  status: "initial" | "uploading" | "success" | "fail" = "initial"
  file: File | null = null

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private fileUpload: FileUploadService
  ) {
    this.editProfileForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(4)]],
      familyName: ["", [Validators.required, Validators.minLength(4)]],
      password: ["", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/),]],
      confirmPassword: ["", [Validators.required]],
      username: ["", [Validators.required, Validators.pattern(/^[a-z0-9]+.{4,}$/)]],
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;
    console.log(password === confirmPassword);

    if (password !== confirmPassword) {
      group.get('confirmPassword').setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    group.get('confirmPassword').setErrors(null);
    return null;
  }

  onFileChange(event: any) {

  }



}
