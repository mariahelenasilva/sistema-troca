import { Component, Input } from '@angular/core';
import { Item as ItemDados} from '../../interfaces/item-interface'

@Component({
  imports: [],
  selector: 'app-item',
  styleUrl: './item.css',
  templateUrl: './item.html',
})

export class Item {
  @Input({ required: true }) item!: ItemDados;
}