import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Menu } from '../menu/menu';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}