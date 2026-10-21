import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  usuario:string = "";
  senha:string = "";

  registros:any[] = [];

  logar(){
    this.registros.push({
      usuario: this.usuario,
      senha: this.senha
    })
  }
}
