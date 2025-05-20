import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upbar',
  standalone: false,
  templateUrl: './upbar.component.html',
  styleUrl: './upbar.component.css'
})

export class UpbarComponent {
  @Input() currentView: string = '';

  getTitle(view: string): string {
    switch(view) {
      case 'home': return 'Home';
      case 'dashboard': return 'Dashboard';
      case 'settings': return 'Configurações';
      case 'users': return 'Gerenciamento de Usuários';
      case 'reports': return 'Relatórios';
      case 'messages': return 'Mensagens';
      case 'calendar': return 'Calendário';
      case 'files': return 'Arquivos';
      case 'help': return 'Ajuda';
      default: return '';
    }
  }
}