import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-cadastrar',
  styleUrl: './cadastrar.css',
  templateUrl: './cadastrar.html',
})

export class Cadastrar {
  nome:string = "";
  curso:string = "";
  cidade: string = "";
  unidadeSenai: string = "";
  usuario: string = "";
  email:string = "";
  senha: string = "";

  registros:any[] = [];

  cadastrar(){
    this.registros.push({
      nome: this.nome,
      curso: this.curso,
      cidade: this.cidade,
      unidadeSenai: this.unidadeSenai,
      usuario: this.usuario,
      email: this.email,
      senha: this.senha,
    })
  }
}

