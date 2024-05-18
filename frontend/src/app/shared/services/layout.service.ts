import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public config = {
    settings: {
      layout: 'Dubai',
      layout_type: 'rtl',
      layout_version: 'light-only',
      sidebar_type: 'default-sidebar',
      icon: 'stroke-svg'
    },
    color: {
      primary_color: '#7366ff',
      secondary_color: '#f73164'
    }
  }

  constructor() {
    document.documentElement.style.setProperty('--theme-deafult', this.config.color.primary_color);
    document.documentElement.style.setProperty('--theme-secondary', this.config.color.secondary_color);
  }


}
