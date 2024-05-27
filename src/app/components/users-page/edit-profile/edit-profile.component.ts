import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/shared/model/user.model';
import { ApiService } from 'src/app/shared/services/api.service';
import { FileUploadService } from 'src/app/shared/services/file-upload.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: 'edit-profile.component.html',
  styleUrl: 'edit-profile.component.scss'
})
export class EditProfileComponent implements OnInit {
  editProfileForm: FormGroup;
  editPasswordForm:FormGroup;
  showUpload = true;
  status: "initial" | "uploading" | "success" | "fail" = "initial"
  file: File | null = null
  user:IUser;

  constructor(
    private fb: FormBuilder,
    private userService:UsersService,
    private toastr:ToastrService
  ) {

    this.editProfileForm = this.fb.group({
      firstName: [ '' , [Validators.required, Validators.minLength(4)]],
      lastName: [ '', [Validators.required, Validators.minLength(4)]],
    });

    
    this.editPasswordForm=this.fb.group({
      password: ['', [Validators.required, Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/),Validators.minLength(8)]],
      confirmPassword: ["", [Validators.required]],
      oldPassword:['',[Validators.required]]
    })
  }
  ngOnInit(): void {
    
      this.userService.getMaster().subscribe(res=>{
        this.user=res
        this.editProfileForm.setValue({
          firstName:this.user.firstName,
          lastName:this.user.lastName
        })
      })
      
      
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


  editProfile(){
    if(this.editProfileForm.invalid)
      {
        this.toastr.warning('موارد خواسته شده را تکمیل نمایید')
        this.editProfileForm.markAllAsTouched
        return null
      }
    else{

      const formData=new FormData()
      formData.append("Id" ,this.user.id+"")
      formData.append('FirstName',this.editProfileForm.get('firstName').value)
      formData.append('LastName',this.editProfileForm.get('lastName').value)

      this.userService.UpdateUserInfo(formData).subscribe(res=>{
        if(res?.success)
          {
              this.toastr.success(res?.message)
          }
          else{
            console.log(res)
              this.toastr.error(res?.message)
          }
      })
    }  
  }



  changePassword(){


    if(this.editPasswordForm.invalid)
      {
        this.toastr.warning('موارد خواسته شده را تکمیل نمایید')
        this.editPasswordForm.markAllAsTouched
        return null;
      }
    else{

      const formData=new FormData()
      formData.append("Id",this.user.id+"")
      formData.append("OldPassword",this.editPasswordForm.get("oldPassword").value)
      formData.append("NewPassword",this.editPasswordForm.get('password').value)

      this.userService.UpdateUserPassword(formData).subscribe(res=>{
        if(res?.success)
          {
              this.toastr.success(res?.message)
          }
          else{
            console.log(res)
              this.toastr.error(res?.message)
          }
      })
    }  
  }






}
