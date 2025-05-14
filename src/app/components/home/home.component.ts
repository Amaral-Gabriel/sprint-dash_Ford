import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit { // Home class

  constructor(private router: Router) {}

  cards = [ // Images for cards
    { id: 1, name: 'Ranger', img: 'img/ranger-frente.jpg' },
    { id: 2, name: 'Mustang', img: 'img/mustang-frente.jpg' },
    { id: 4, name: 'Bronco Sport', img: 'img/ford-antigo.jpg' },
    { id: 5, name: 'Bronco Sport', img: 'img/ford-corrida.jpg' },
    { id: 6, name: 'Bronco Sport', img: 'img/mustang-antigo-frente.jpg' },
    { id: 7, name: 'Bronco Sport', img: 'img/mustang-fundo.jpg' },
    { id: 8, name: 'Bronco Sport', img: 'img/mustang-traseira.jpg' }
  ];

  ngOnInit() { 
    setInterval(() => {
      this.rotateCards();
    }, 30000); 
  }

  rotateCards() {
    const first = this.cards.shift();
    if (first) {
      this.cards.push(first);
    }
  }
}
