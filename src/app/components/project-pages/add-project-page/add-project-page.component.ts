import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService} from '../../../shared/services/api.service'
import {Jalali} from 'jalali-ts'




@Component({
  selector: 'app-add-project-page',
  templateUrl: './add-project-page.component.html',
  styleUrl: './add-project-page.component.scss'
})
export class AddProjectPageComponent implements OnInit {

 public addProjectForm:FormGroup;


  constructor(
    private fb:FormBuilder,
    private api:ApiService
  ){

    this.addProjectForm= this.fb.group({
      title:["",[Validators.required,Validators.minLength(4)]],
      startDate:["",[Validators.required]],
      endDate:["",Validators.required]

    },{
      validators:this.DateValidator
    })
  }
  
  ngOnInit() { }

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





}
