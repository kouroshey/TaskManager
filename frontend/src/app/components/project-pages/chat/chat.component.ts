import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  activeTab: 1 | 2 = 1;
  navItems = [
    {
      id: 1,
      title: 'گفتگو',
    },
    {
      id: 2,
      title: 'وظایف',
    },
  ]

  constructor() { }

  onNavClick(newItem: number) {

    if (this.activeTab === 1) {
      this.activeTab = 2
    } else {
      this.activeTab = 1
    }
  }
}
