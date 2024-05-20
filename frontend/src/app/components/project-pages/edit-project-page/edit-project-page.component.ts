import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../shared/services/api.service";
import {Jalali} from "jalali-ts";

@Component({
  selector: 'app-edit-project-page',
  templateUrl: './edit-project-page.component.html',
  styleUrl: './edit-project-page.component.scss'
})
export class EditProjectPageComponent implements OnInit {

  
  editProjectForm:FormGroup;
  
  public statusList=["active","complete","canceled"]

  constructor(
      private fb:FormBuilder,
      private api:ApiService
  ){

    this.editProjectForm= this.fb.group({
      id:[1,Validators.required],
      title:["عنوان پروژه",[Validators.required,Validators.minLength(4)]],
      description:['لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده'],
      startDate:["1399/8/13",[Validators.required]],
      endDate:["1402/8/28",Validators.required],
      status:["complete",Validators.required]

    },{
      Validators:this.DateValidator
    })
  }
  
  ngOnInit(): void {
      
  }

  DateValidator(form:FormGroup):{ [key: string]: any } | null{

    console.log('start')
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
