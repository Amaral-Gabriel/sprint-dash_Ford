import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj: Login;
  errorMessage: string = '';  // Mensagem de erro para exibir no template

  constructor(private http: HttpClient) {
    this.loginObj = new Login();
  }

  onLogin() {
    const url = `http://localhost:3000`;

    this.http.get(url).subscribe({
      next: (users: any) => {
        if (users.length > 0) {
          const user = users[0]; // O primeiro usuário encontrado
          
          // Checa se a senha corresponde
          if (user.Password === this.loginObj.Password) {
            console.log('Login OK', user);
            // Aqui você pode redirecionar ou salvar o estado do login
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
