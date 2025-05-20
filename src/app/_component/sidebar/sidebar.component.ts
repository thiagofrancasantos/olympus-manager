import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  @Output() menuSelected = new EventEmitter<string>();
  activeItem: string = 'home';

  menuItems = [
    { id: 'home', icon: 'home', label: 'Home' },
    { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
    { id: 'settings', icon: 'settings', label: 'Settings' },
    { id: 'users', icon: 'people', label: 'Users' },
    { id: 'reports', icon: 'assessment', label: 'Reports' },
    { id: 'messages', icon: 'mail', label: 'Messages' },
    { id: 'calendar', icon: 'calendar_today', label: 'Calendar' },
    { id: 'files', icon: 'folder', label: 'Files' },
    { id: 'help', icon: 'help', label: 'Help' }
  ];

 
  setActive(itemId: string): void {
    this.activeItem = itemId;
    this.menuSelected.emit(itemId);
  }
}
