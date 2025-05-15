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
    { id: 4, name: 'Ford antigo', img: 'img/ford-antigo.jpg' },
    { id: 5, name: 'Ford de corrida', img: 'img/ford-corrida.jpg' },
    { id: 6, name: 'Mustang', img: 'img/mustang-antigo-frente.jpg' },
    { id: 7, name: 'Mustang', img: 'img/mustang-fundo.jpg' },
    { id: 8, name: 'Mustang', img: 'img/mustang-traseira.jpg' }
  ];

  ngOnInit() { 
    this.setBgImage();
  }


  setBgImage() {
    const myElement = document.getElementById("bgBig");  
  
    const setId: number = Math.floor(Math.random() * 7); 
    
  
    if (myElement) {
      const imgSrc = this.cards[setId].img; 
      const imgAlt = this.cards[setId].name; 
  
      
      myElement.style.backgroundImage = `url('${imgSrc}')`;


      const imageElement = document.getElementById("myImage") as HTMLImageElement;
      if (imageElement) {
        imageElement.alt = imgAlt;  
      }
    }
  }
  
  
  
}
