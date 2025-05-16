import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object // Injeta a plataforma
  ) {}

  canActivate(): boolean {
    // Verifica se estamos no navegador
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      
      if (!token || !isLoggedIn) {
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      // Se estiver no servidor, sempre permite o acesso
      return true;
    }
    
    return true; // Se não tiver problemas com o token, o acesso é permitido
  }
}
