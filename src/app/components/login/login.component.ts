import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: Login;
  errorMessage: string = '';  // Mensagem de erro para exibir no template
  successMessage: string = ''; // Mensagem de sucesso para exibir no template

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new Login();
  }

  onLogin() {
    // Limpa as mensagens anteriores
    this.errorMessage = '';
    this.successMessage = '';

    // Verifica se os campos estão preenchidos corretamente
    if (this.loginObj.EmailId.trim() === "" || this.loginObj.Password.trim() === "") {
      this.errorMessage = 'Por favor, preencha todos os campos!';
      return;
    }

    const url = `http://localhost:3000/login`;

    this.http.post(url, {
      nome: this.loginObj.EmailId,
      senha: this.loginObj.Password
    }).subscribe({
      next: (response: any) => {
        this.successMessage = 'Login realizado com sucesso!';
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', 'fake-jwt-token');
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      },
      error: (err) => {
        if (err.status === 400 || err.status === 401) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = 'Erro ao realizar login.';
        }
        console.error('Erro:', err);
      }
    });
  }
}

// Classe Login
export class Login {
  EmailId: string;
  Password: string;

  constructor() {
    this.EmailId = '';
    this.Password = '';
  }
}
