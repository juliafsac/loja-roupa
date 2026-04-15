import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pesquisa } from './pesquisa/pesquisa';
import { Menu } from './menu/menu';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pesquisa, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('site-roupa');
}
