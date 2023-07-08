import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {

      title: "Animal Uno",
      img: "https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg",
      icon: "caret-forward-outline",
      description: "Hola soy el animal numero 1"

    },

    {

      title: "Animal Secundario",
      img: "assets/images/imag1.jpg",
      icon: "navigate-outline",
      description: "Hola soy el animal numero 2"

    },
    {

      title: "Animal Tercero",
      img: "assets/images/imag2.jpg",
      icon: "play-forward-outline",
      description: "Hola soy el animal numero 3"

    },
    {

      title: "Animal Cuarto",
      img: "assets/images/imag3.jpg",
      icon: "swap-horizontal-outline",
      description: "Hola soy el animal numero 4"

    },
    {

      title: "Animal Quinto",
      img: "assets/images/imag4.jpg",
      icon: "return-up-back-outline",
      description: "Hola soy el animal numero 5"

    }


  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  finish() {
    this.router.navigateByUrl("/home");

  }

}
