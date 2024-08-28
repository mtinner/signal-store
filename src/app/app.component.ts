import {Component, inject, signal, effect} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StoreTutorialComponent} from "./components/store-tutorial/store-tutorial.component";
import {ChildComponent} from "./child/child.component";
import {BooksStore} from "./store/books.store";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
