import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slides = [
    {

      title: "Pandora Music",
      img: "assets/images/pandora9.png",
      icon: "caret-forward-outline",
      description: "Te brindamos una experiencia auditiva personalizada que evoluciona continuamente con tu gusto."

    },

    {

      title: "Pandora Music",
      img: "assets/images/pandora7.jpg",
      icon: "caret-forward-outline",
      description: "Crea estaciones a partir de sus canciones, artistas o géneros favoritos"

    },
    {

      title: "Pandora Music",
      img: "assets/images/pandora6.jpg",
      icon: "caret-forward-outline",
      description: "Descarganos desde tu App Store"

    },
    {

      title: "Pandora Music",
      img: "assets/images/pandora3.jpg",
      icon: "caret-forward-outline",
      description: "Comienza a disfrutar de la mejor musica"

    },
    {

      title: "Pandora Music",
      img: "assets/images/pandora4.png",
      icon: "caret-forward-outline",
      description: "Estamos disponible en multiples plataformas"

    }


  ]
  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  finish() {
    this.storage.set("introShow", true);
    this.router.navigateByUrl("/menu/home");

  }

}
