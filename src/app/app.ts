import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pesquisa } from './pesquisa/pesquisa';
import { Menu } from './menu/menu';
import { Secao } from './secao/secao';
import { Card } from './card/card';
import { Paravoce } from './paravoce/paravoce';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pesquisa, Menu, Secao, Card, Paravoce],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('site-roupa');
}
