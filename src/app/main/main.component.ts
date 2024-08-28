import {Component, effect, inject, signal} from '@angular/core';
import {BooksStore} from "../store/books.store";
import {StoreTutorialComponent} from "../components/store-tutorial/store-tutorial.component";
import {ChildComponent} from "../child/child.component";
import {RouterLink} from "@angular/router";
import {navigationRoutes} from "../navigationRoutes";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [StoreTutorialComponent, ChildComponent, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
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

  protected readonly navigationRoutes = navigationRoutes;
}
