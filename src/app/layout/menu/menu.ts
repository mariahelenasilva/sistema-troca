import { Component } from '@angular/core';
import { rotas } from '../../data/mock-data';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})
export class Menu {
  itens:Rota[] = rotas;
}
