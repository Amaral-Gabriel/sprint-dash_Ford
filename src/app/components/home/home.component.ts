import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, HeaderComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {} // Injeta o Router corretamente

  logout() {
    // 1. Limpe todos os dados de autenticação
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    
    // 2. Forçar navegação para login com replaceUrl para limpar o histórico
    this.router.navigate(['/login'], { replaceUrl: true })
      .then(() => {
        // 3. Recarregue a página para garantir que todos os estados sejam resetados
        window.location.reload();
      });
  }
}
