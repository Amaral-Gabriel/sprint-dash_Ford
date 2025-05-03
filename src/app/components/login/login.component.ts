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

    const url = `http://localhost:3000/users?EmailId=${this.loginObj.EmailId}&Password=${this.loginObj.Password}`;

    this.http.get(url).subscribe({
      next: (users: any) => {
        if (users.length > 0) {
          const user = users[0]; // O primeiro usuário encontrado
          
          // Checa se a senha corresponde
          if (user.Password === this.loginObj.Password) {
            this.successMessage = 'Login realizado com sucesso!';
            console.log('Login OK', user);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('token', 'fake-jwt-token');
            
            // Redireciona
            setTimeout(() => {
              this.router.navigate(['/home']);
            }, 1000);
          } else {
            this.errorMessage = 'Senha incorreta!';
            console.error('Senha incorreta');
          }
        } else {
          this.errorMessage = 'Usuário não encontrado ou senha incorreta!';
          console.error('Usuário não encontrado ou senha incorreta!');
        }
      },
      error: (err) => {
        this.errorMessage = 'Erro ao realizar a requisição';
        console.error('Erro na requisição', err);
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
