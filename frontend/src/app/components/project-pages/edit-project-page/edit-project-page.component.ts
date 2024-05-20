import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-project-page',
  templateUrl: './edit-project-page.component.html',
  styleUrl: './edit-project-page.component.scss'
})
export class EditProjectPageComponent implements OnInit {

  
  public project={
    id:1,
    title:""
  }
  
  ngOnInit(): void {
      
  }

}
