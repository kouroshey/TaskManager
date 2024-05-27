import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Jalali} from 'jalali-ts'
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/shared/services/project.service';




@Component({
  selector: 'app-add-project-page',
  templateUrl: './add-project-page.component.html',
  styleUrl: './add-project-page.component.scss'
})
export class AddProjectPageComponent implements OnInit {

 public addProjectForm:FormGroup;


  constructor(
    private fb:FormBuilder,
    private projectService:ProjectService,
    private toastr:ToastrService,
    private router:Router
    
  ){

    this.addProjectForm= this.fb.group({
      title:["",[Validators.required,Validators.minLength(4)]],
      startTime:["",[Validators.required]],
      endTime:["",Validators.required],
      description:['']

    },{
      validators:this.DateValidator
    })
  }
  
  ngOnInit() { }

  DateValidator(form:FormGroup):{ [key: string]: any } | null{

    const start=form.get('startTime').value;
    const end=form.get('endTime').value;
    
    const nowD=Jalali.now()
    nowD.format('YYYY/MM/DD HH:mm:ss')
    const startD=Jalali.parse(start);
    const endD=Jalali.parse(end);


    if(nowD.valueOf() > startD.valueOf())
      {
        form.get('startTime').setErrors({startValid:true})
        
        return {startValid:true}
      }
    if(startD.valueOf() > endD.valueOf())
      {
        form.get('endTime').setErrors({endValid:true})
        return {endValid:true}
      } 


      form.get('startTime').setErrors(null)
      form.get('endTime').setErrors(null)

    return null;

  }



  addProject(){

      if(this.addProjectForm.invalid)
        {
          this.addProjectForm.markAllAsTouched()

          this.toastr.error('خواهشمند است موارد خواسته شده را به طور صحیح و کامل تکمیل نماید')
                return null

        }

      else
        {

            const start=Jalali.parse(this.addProjectForm.get('startTime').value)
            const end=Jalali.parse(this.addProjectForm.get('endTime').value)

          
              const form={
                name:this.addProjectForm.get('title').value,
                description:this.addProjectForm.get('description').value,
                startTime:start.gregorian(),
                endTime:end.gregorian()

              }

            
            this.projectService.AddProject(form).subscribe((response: any) => {
              if (response?.success) {
               
                this.router.navigate(['/projects/all'])
                this.toastr.success(response.message);
               
              } else {
                console.log(response.message);
                
              }
            });
        }
   
    
  }




}
