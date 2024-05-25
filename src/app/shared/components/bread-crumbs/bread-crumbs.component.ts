import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrl: './bread-crumbs.component.scss'
})
export class BreadCrumbsComponent implements OnInit {
  breadcrumbs: string[];
  pathname: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.breadcrumbs = this.router.url.split('/').filter(item => item !== '');
    this.pathname = this.router.url
    console.log(this.breadcrumbs);
    console.log(this.pathname);
  }
}
