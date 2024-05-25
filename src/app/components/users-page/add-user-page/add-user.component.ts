import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { Router } from '@angular/router';


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
        private api: ApiService,
        private userService:UsersService,
        private router: Router
    ) {
        this.addUserForm = this.fb.group({
            firstName: ["", [Validators.required, Validators.minLength(4)]],
            lastName: ["", [Validators.required, Validators.minLength(4)]],
            password: ["", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])$/),Validators.minLength(5)]],
            confirmPassword: ["", [Validators.required]],
            username: ["", [Validators.required, Validators.pattern(/^[a-z0-9]+.{4,}$/)]],
            avatar:[null]
        }, {
            validators: this.passwordMatchValidator
        });
    }

    ngOnInit() { }

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
        const file = event.target.files[0]
        if (file) {
            // this.showUpload = true
            // this.status = 'initial'
            // this.file = file
            this.addUserForm.get('avatar').setValue(file)
        }
    }

  

   
      

    onUpload() {
        if (this.file) {
            const formData = new FormData();

            formData.append('file', this.file, this.file.name);

            const upload$ = this.api.post("https://httpbin.org/post", formData);

            this.status = 'uploading';

            upload$.subscribe({
                next: () => {
                    this.status = 'success';
                },
                error: (error: any) => {
                    this.status = 'fail';
                    return new Error(error);
                },
            });
        }
    }


    addUser(){
        try{

            const formData = new FormData();       
            Object.keys(this.addUserForm.controls).forEach(formControlName => {  
                formData.append(formControlName,  this.addUserForm.get(formControlName).value);    
            }); 

            console.log('user',formData)
            this.userService.addUser(formData)
            // this.router.navigate([`users/all`])

        }
        catch(e)
        {

            console.log('error in submit user',e)

        }
    }

}
