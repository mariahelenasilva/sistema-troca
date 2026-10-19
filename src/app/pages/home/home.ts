import { Component } from '@angular/core';
import { itens } from '../../data/mock-data';
import { Item } from '../../componentes/item/item';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Item, RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  listaItens = itens;
}

// import { Component } from '@angular/core';
// import { CardComponent } from "../card/card";

// @Component({
//   imports: [CardComponent],
//   selector: 'app-home',
//   styleUrl: './home.css',
//   templateUrl: './home.html',
// })
// export class Home {}
