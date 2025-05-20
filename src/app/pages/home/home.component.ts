import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  currentView: string = 'home';

  viewContents = {
    home: {
      upbar: 'Bem-vindo ao Sistema',
      main: 'Conteúdo inicial do dashboard'
    },
    dashboard: {
      upbar: 'Painel de Controle',
      main: 'Gráficos e métricas importantes'
    },
    settings: {
      upbar: 'Configurações',
      main: 'Configurações do sistema'
    }
  };

  onMenuSelected(view: string) {
    this.currentView = view;
  }

  get currentContent() {
    return this.viewContents[this.currentView as keyof typeof this.viewContents];
  }
}