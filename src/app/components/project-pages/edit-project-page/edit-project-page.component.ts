import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../shared/services/api.service";
import {Jalali} from "jalali-ts";
import { ProjectService } from 'src/app/shared/services/project.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { title } from 'process';

@Component({
  selector: 'app-edit-project-page',
  templateUrl: './edit-project-page.component.html',
  styleUrl: './edit-project-page.component.scss'
})
export class EditProjectPageComponent implements OnInit {

  id:number;
  editProjectForm:FormGroup;
  project:any
  
  public statusList=["active","complete","canceled"]

  constructor(
      private fb:FormBuilder,
      private projectService:ProjectService,
      private activatedRoute:ActivatedRoute,
      private toastr:ToastrService
  ){

    this.editProjectForm= this.fb.group({
      title:['',[Validators.required,Validators.minLength(4)]],
      description:[''],
      startDate:['',[Validators.required]],
      endDate:['',[Validators.required]],

    },{
      Validators:this.DateValidator
    })
  }
  
  ngOnInit(): void {

  this.activatedRoute.params.subscribe(res=>{
    this.id=res.id

    this.projectService.getProject(this.id).subscribe(res=>{

      const start=new Date(res.startTime)

      const end=new Date(res.endTime)
      this.editProjectForm.patchValue({
        title:res.name,
        description:res.description,
        startDate:start.toLocaleDateString('fa-Ir'),
        endDate:end.toLocaleDateString('fa-Ir')
      })
    })
  })



      
  }

  DateValidator(form:FormGroup):{ [key: string]: any } | null{

    const start=form.get('startDate').value;
    const end=form.get('endDate').value;

    const nowD=Jalali.now()
    nowD.format('YYYY/MM/DD HH:mm:ss')
    const startD=Jalali.parse(start);
    const endD=Jalali.parse(end);


    if(nowD.valueOf() > startD.valueOf())
    {
      form.get('startDate').setErrors({startValid:true})

      return {startValid:true}
    }
    if(startD.valueOf() > endD.valueOf())
    {
      form.get('endDate').setErrors({endValid:true})
      return {endValid:true}
    }


    form.get('startDate').setErrors(null)
    form.get('endDate').setErrors(null)

    return null;

  }


  editProject(){

    if(this.editProjectForm.invalid)
      {

          this.editProjectForm.markAllAsTouched
          this.toastr.error('اطلاعات خواسته شده را به طور صحیح و کامل تکمیل نمایید')
      }

      else{

        const start=Jalali.parse(this.editProjectForm.get('startDate').value)
        const end=Jalali.parse(this.editProjectForm.get('endDate').value)

        const form={
          id:this.id,
          name:this.editProjectForm.get('title').value,
          startTime:start.gregorian(),
          endTime:end.gregorian()
        }


        console.log('edit',form)
        this.projectService.updateProject(form).subscribe((response: any) => {
          if (response?.success) {
           
            this.toastr.success(response.message);
           
          } else {
            console.log(response.message);
            
          }
        });


      }
    

  }

}
