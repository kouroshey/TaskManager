import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-add-user',
    templateUrl: 'add-user.component.html',
    styleUrls: ['add-user.component.scss']
})
export class AddUser implements OnInit {
    addUserForm: FormGroup;
    showUpload = true;
    status: "initial" | "uploading" | "success" | "fail" = "initial"

    file: File | null = null
    constructor(
        private fb: FormBuilder,
        private toastr:ToastrService,
        private userService:UsersService,
        private router: Router
    ) {
        this.addUserForm = this.fb.group({
            FirstName: ["", [Validators.required, Validators.minLength(4)]],
            LastName: ["", [Validators.required, Validators.minLength(4)]],
            Password: ["", [Validators.required, Validators.pattern(/^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/),Validators.minLength(8)]],
            confirmPassword: ["", [Validators.required]],
            UserName: ["", [Validators.required, Validators.pattern(/^[a-z0-9]+.{4,}$/)]],
            Avatar:[null]
        }, {
            validators: this.passwordMatchValidator
        });
    }

    ngOnInit() { }

    passwordMatchValidator(group: FormGroup): { [key: string]: any } | null {
        const password = group.get('Password').value;
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
        const file = event.target.files[0]
        if (file) {
            // this.showUpload = true
            // this.status = 'initial'
            // this.file = file
            this.addUserForm.get('Avatar').setValue(file)
        }
    }

  

   
      

   


    addUser(){
   
        if(this.addUserForm.invalid)
            {
    
                this.addUserForm.markAllAsTouched()
              this.toastr.error('خواهشمند است موارد خواسته شده را به طور صحیح و کامل تکمیل نماید')
                    return null
    
            }
        else{

           const userForm={
            userName:this.addUserForm.get('UserName').value,
            firstName:this.addUserForm.get('FirstName').value,
            lastName:this.addUserForm.get('LastName').value,
            password:this.addUserForm.get('Password').value,
            avatar:""

           }

        
           this.userService.addUser(userForm).subscribe((response: any) => {
            if (response?.success) {
             
              this.router.navigate(['/users/all'])
              this.toastr.success(response.message);
             
            } else {
              console.log(response.message);
              
            }
          });
          
            // this.router.navigate([`users/all`])

      
          
}
       
    }

}
