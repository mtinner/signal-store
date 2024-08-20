import {Component, inject, signal, effect} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {StoreTutorialComponent} from "./components/store-tutorial/store-tutorial.component";
import {ChildComponent} from "./child/child.component";
import {BooksStore} from "./store/books.store";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StoreTutorialComponent, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = signal('angular-template');
  readonly store = inject(BooksStore);

  constructor() {
    effect(() => {
      console.log(`The current count is: ${this.store.booksCount()}`);
    });
  }


  generateRandomText=(length = 8) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  onStoreClick() {
    this.title.set(this.generateRandomText());
  }
}
