import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  validation_messages = {
    email: [
      { type: "required", message: "El email es obligatio" },
      { type: "pattern", message: "Debe poner un email valido" }
    ]
  }

  
  validation_messagespass = {
    password: [
      { type: "required", message: "La contraseña es obligatoria" },
      { type: "pattern", message: "Contraseña no valida" }
    ]
  }

  validation_messagesname = {
    name: [
      { type: "required", message: "El nombre es obligatorio" },
     
    ]
  }

  validation_messageslastname = {
    last_name: [
      { type: "required", message: "Los apellidos son obligatorio" },
     
    ]
  }
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group(
      {
        email: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$")
          ]
          )
        ),
        password: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6)
            ]
          )
        ),
        name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6)
            ]
          )
        ),
        last_name: new FormControl(
          "",
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(6)
            ]
          )
        )
      }
    )
   }

  ngOnInit() {
  }

  goToLogin(){
    this.router.navigateByUrl("/login");
  }

  registerUser(userData:any){
    console.log(userData);
    this.authService.registerUser(userData).then(() => {
      this.navCtrl.navigateBack("/login");
    })
  }

}
